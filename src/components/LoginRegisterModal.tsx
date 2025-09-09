import { type ReactNode } from "react";

type LoginRegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const LoginRegisterModal = ({ 
  isOpen, 
  onClose, 
  children 
}: LoginRegisterModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        {/* Botón de cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        {/* Contenido dinámico */}
        {children}
      </div>
    </div>
  );
};
