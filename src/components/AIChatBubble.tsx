import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ImagePlus, Loader2, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import {
  crearSesion,
  obtenerSesionActiva,
  enviarMensaje,
  subirImagenDiseno,
  type Mensaje,
} from '../services/aiAgentService';

interface MensajeLocal extends Mensaje {
  imagenesPendientes?: string[]; // URLs locales de preview
}

export const AIChatBubble = () => {
  const { isAuthenticated, usuario } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [mensajes, setMensajes] = useState<MensajeLocal[]>([]);
  const [inputMensaje, setInputMensaje] = useState('');
  const [sesionId, setSesionId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<File[]>([]);
  const [imagenesPreview, setImagenesPreview] = useState<string[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes]);

  // Obtener el ID del usuario
  const getUserId = (): number => {
    return usuario?.id || 0;
  };

  // Inicializar o recuperar sesión al abrir el chat
  const inicializarSesion = async () => {
    if (!isAuthenticated || sesionId) return;

    setIsInitializing(true);
    try {
      const userId = getUserId();
      
      // Intentar obtener sesión activa
      let sesion = await obtenerSesionActiva(userId);
      
      // Si no hay sesión activa, crear una nueva
      if (!sesion) {
        sesion = await crearSesion(userId);
        // Agregar mensaje de bienvenida
        setMensajes([
          {
            id: 'welcome',
            rol: 'agente',
            contenido: '¡Hola! 👋 Soy tu asistente de moda de CraftYourStyle. Puedo ayudarte a personalizar prendas, analizar imágenes de diseño y darte recomendaciones. ¿En qué puedo ayudarte hoy?',
            timestamp: new Date(),
          },
        ]);
      }
      
      setSesionId(sesion.id);
    } catch (error) {
      console.error('Error inicializando sesión:', error);
      setMensajes([
        {
          id: 'error',
          rol: 'agente',
          contenido: 'Lo siento, hubo un error al conectar con el asistente. Por favor, intenta de nuevo más tarde.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsInitializing(false);
    }
  };

  // Manejar apertura del chat
  const handleToggleChat = () => {
    if (!isOpen && isAuthenticated) {
      inicializarSesion();
    }
    setIsOpen(!isOpen);
  };

  // Manejar selección de imágenes
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const nuevasImagenes = Array.from(files);
    setImagenesSeleccionadas((prev) => [...prev, ...nuevasImagenes]);

    // Crear previews
    nuevasImagenes.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenesPreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });

    // Limpiar input para permitir seleccionar el mismo archivo
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Eliminar imagen seleccionada
  const handleRemoveImage = (index: number) => {
    setImagenesSeleccionadas((prev) => prev.filter((_, i) => i !== index));
    setImagenesPreview((prev) => prev.filter((_, i) => i !== index));
  };

  // Enviar mensaje
  const handleEnviarMensaje = async () => {
    if ((!inputMensaje.trim() && imagenesSeleccionadas.length === 0) || !sesionId || isLoading) {
      return;
    }

    const mensajeTexto = inputMensaje.trim();
    const imagenesParaEnviar = [...imagenesSeleccionadas];
    const previewsParaMensaje = [...imagenesPreview];

    // Limpiar inputs
    setInputMensaje('');
    setImagenesSeleccionadas([]);
    setImagenesPreview([]);

    // Agregar mensaje del usuario inmediatamente
    const mensajeUsuario: MensajeLocal = {
      id: `user-${Date.now()}`,
      rol: 'usuario',
      contenido: mensajeTexto || '(Imagen enviada)',
      imagenesPendientes: previewsParaMensaje,
      timestamp: new Date(),
    };
    setMensajes((prev) => [...prev, mensajeUsuario]);

    setIsLoading(true);

    try {
      const userId = getUserId();
      const urlsImagenes: string[] = [];

      // Subir imágenes si hay
      for (const imagen of imagenesParaEnviar) {
        const resultado = await subirImagenDiseno(imagen, userId);
        urlsImagenes.push(resultado.url);
      }

      // Enviar mensaje con las URLs de las imágenes subidas
      const respuesta = await enviarMensaje(
        sesionId,
        mensajeTexto || 'Analiza esta imagen',
        urlsImagenes.length > 0 ? urlsImagenes : undefined
      );

      // Agregar respuesta del agente
      const mensajeAgente: MensajeLocal = {
        id: `agent-${Date.now()}`,
        rol: 'agente',
        contenido: respuesta.mensaje,
        imagenes: respuesta.imagenes_generadas || undefined,
        timestamp: new Date(),
      };
      setMensajes((prev) => [...prev, mensajeAgente]);
    } catch (error) {
      console.error('Error enviando mensaje:', error);
      // Agregar mensaje de error
      setMensajes((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          rol: 'agente',
          contenido: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar Enter para enviar
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleEnviarMensaje();
    }
  };

  // No mostrar si no está autenticado
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Burbuja flotante */}
      <button
        onClick={handleToggleChat}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'
        }`}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con asistente IA'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Panel del chat */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Asistente CraftYourStyle</h3>
              <p className="text-xs text-white/80">Personalización con IA</p>
            </div>
          </div>
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
          {isInitializing ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
          ) : (
            <>
              {mensajes.map((mensaje) => (
                <div
                  key={mensaje.id}
                  className={`flex ${mensaje.rol === 'usuario' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      mensaje.rol === 'usuario'
                        ? 'bg-emerald-500 text-white rounded-br-sm'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    {/* Imágenes del mensaje */}
                    {mensaje.imagenesPendientes && mensaje.imagenesPendientes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {mensaje.imagenesPendientes.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Imagen ${idx + 1}`}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                    {mensaje.imagenes && mensaje.imagenes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {mensaje.imagenes.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Imagen generada ${idx + 1}`}
                            className="w-full max-w-[200px] rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">{mensaje.contenido}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        mensaje.rol === 'usuario' ? 'text-white/70' : 'text-gray-400'
                      }`}
                    >
                      {mensaje.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Escribiendo...
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Preview de imágenes seleccionadas */}
        {imagenesPreview.length > 0 && (
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto">
              {imagenesPreview.map((preview, index) => (
                <div key={index} className="relative flex-shrink-0">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="flex items-end gap-2">
            {/* Botón de imagen */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageSelect}
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="p-2 text-gray-500 hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
              title="Adjuntar imagen"
            >
              <ImagePlus className="w-5 h-5" />
            </button>

            {/* Campo de texto */}
            <div className="flex-1">
              <textarea
                value={inputMensaje}
                onChange={(e) => setInputMensaje(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading || isInitializing}
                rows={1}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white disabled:opacity-50"
                style={{ maxHeight: '100px' }}
              />
            </div>

            {/* Botón enviar */}
            <button
              onClick={handleEnviarMensaje}
              disabled={
                isLoading ||
                isInitializing ||
                (!inputMensaje.trim() && imagenesSeleccionadas.length === 0)
              }
              className="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Enviar mensaje"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
