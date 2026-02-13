import { useState } from "react";
import { MailIcon, ArrowLeft, CheckCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import axios from "axios";

interface ForgotPasswordModalProps {
  onBack: () => void;
  onClose: () => void;
}

export const ForgotPasswordModal = ({ onBack, onClose }: ForgotPasswordModalProps) => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:1010/api/usuarios/v1/usuarios/recuperar-contrasena",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSent(true);
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Error al enviar el correo de recuperación"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.719)] bg-opacity-50 z-50">
      <div
        className={`w-80 relative p-6 rounded-lg shadow-lg flex flex-col transition-colors duration-300 ${
          isDarkMode ? "bg-[#111827]" : "bg-white"
        }`}
      >
        {!sent ? (
          <>
            {/* Header con botón de volver */}
            <div className="flex items-center mb-4">
              <button
                onClick={onBack}
                className={`p-1 rounded-full hover:bg-gray-200 transition-colors ${
                  isDarkMode ? "hover:bg-gray-700 text-gray-300" : "text-gray-600"
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-emerald-600 text-xl font-bold flex-1 text-center pr-6">
                Recuperar contraseña
              </h1>
            </div>

            <p
              className={`text-sm mb-4 text-center ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ingresa tu correo electrónico y te enviaremos un enlace para
              restablecer tu contraseña.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className={`w-full rounded-md border pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-black placeholder-gray-400"
                    }`}
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-md bg-emerald-600 px-6 py-3 text-white text-sm font-medium hover:bg-emerald-700 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {loading ? "Enviando..." : "Enviar enlace de recuperación"}
              </button>
            </form>
          </>
        ) : (
          /* Mensaje de éxito */
          <div className="text-center py-4">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h2
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              ¡Correo enviado!
            </h2>
            <p
              className={`text-sm mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Si el correo está registrado, recibirás un enlace para restablecer
              tu contraseña. Revisa tu bandeja de entrada y spam.
            </p>
            <button
              onClick={onClose}
              className="w-full rounded-md bg-emerald-600 px-6 py-3 text-white text-sm font-medium hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
