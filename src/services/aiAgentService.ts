import axios from 'axios';

const API_URL = 'http://localhost:10105';

// Tipos para el chat
export interface Sesion {
  id: number;
  id_user: number;
  fecha_inicio: string;
  estado: 'activa' | 'finalizada';
}

export interface MensajeResponse {
  sesion_id: number;
  mensaje: string;
  imagenes_generadas?: string[] | null;
}

export interface Mensaje {
  id: string;
  rol: 'usuario' | 'agente';
  contenido: string;
  imagenes?: string[];
  timestamp: Date;
}

// Crear una nueva sesión de chat
export const crearSesion = async (idUser: number): Promise<Sesion> => {
  try {
    const response = await axios.post(`${API_URL}/chat/session`, {
      id_user: idUser,
    });
    return response.data;
  } catch (error) {
    console.error('Error al crear sesión:', error);
    throw error;
  }
};

// Obtener sesión activa del usuario
export const obtenerSesionActiva = async (idUser: number): Promise<Sesion | null> => {
  try {
    const response = await axios.get(`${API_URL}/chat/session/user/${idUser}`);
    return response.data;
  } catch (error) {
    // Si no hay sesión activa, retornar null
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    console.error('Error al obtener sesión activa:', error);
    throw error;
  }
};

// Enviar mensaje al agente
export const enviarMensaje = async (
  sesionId: number,
  mensaje: string,
  imagenes?: string[]
): Promise<MensajeResponse> => {
  try {
    const response = await axios.post(`${API_URL}/chat/session/${sesionId}/message`, {
      mensaje,
      imagenes: imagenes || [],
    });
    return response.data;
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    throw error;
  }
};

// Subir imagen de diseño
export const subirImagenDiseno = async (
  file: File,
  idUser: number
): Promise<{ id: number; url: string }> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id_user', idUser.toString());

    const response = await axios.post(`${API_URL}/images/design`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al subir imagen:', error);
    throw error;
  }
};

// Cerrar sesión de chat
export const cerrarSesion = async (sesionId: number): Promise<void> => {
  try {
    await axios.post(`${API_URL}/chat/session/${sesionId}/close`);
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
};

// Obtener historial de chat
export const obtenerHistorial = async (sesionId: number): Promise<Mensaje[]> => {
  try {
    const response = await axios.get(`${API_URL}/chat/session/${sesionId}/history`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener historial:', error);
    throw error;
  }
};
