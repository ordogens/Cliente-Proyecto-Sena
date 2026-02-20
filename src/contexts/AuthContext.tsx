import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface Usuario {
  id: number;
  sub: string;
  iat: number;
  exp: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  usuario: Usuario | null;
  token: string | null;
  login: (token: string, usuario: Usuario) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // Cargar datos de sessionStorage al iniciar
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedUsuario = sessionStorage.getItem("usuario");

    if (storedToken && storedUsuario) {
      const parsedUsuario = JSON.parse(storedUsuario);

      // Verificar si el token no ha expirado
      if (parsedUsuario.exp * 1000 > Date.now()) {
        setToken(storedToken);
        setUsuario(parsedUsuario);
      } else {
        // Token expirado, limpiar sessionStorage
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("usuario");
      }
    }
  }, []);

  const login = (newToken: string, newUsuario: Usuario) => {
    setToken(newToken);
    setUsuario(newUsuario);
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("usuario", JSON.stringify(newUsuario));
  };

  const logout = () => {
    setToken(null);
    setUsuario(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        usuario,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
