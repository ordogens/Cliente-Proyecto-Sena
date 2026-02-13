import { useState } from "react";
import type { ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";
import { LoginRegisterModal } from "./LoginRegisterModal";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(!isAuthenticated);

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Debes iniciar sesión para acceder a esta página
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-6 py-3 cursor-pointer"
        >
          Iniciar Sesión
        </button>
        <LoginRegisterModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    );
  }

  return <>{children}</>;
};
