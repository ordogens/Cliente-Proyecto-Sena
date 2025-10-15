import { useState } from "react";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

// Definir las props del componente
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginRegisterModal = ({ isOpen, onClose }: ModalProps) => {
  const [isLoginActive, setIsLoginActive] = useState(true); // Login por defecto

  if (!isOpen) return null;

  const handleChangeForm = () => {
    setIsLoginActive((prev) => !prev);
  };

  // Estilos dinámicos para la X basados en el formulario activo
  const getCloseButtonStyle = () => {
    const baseStyle =
      "cursor-pointer text-gray-600 absolute z-100 text-xl font-bold hover:text-gray-800 transition-colors duration-200";

    if (isLoginActive) {
      // Estilo para Login - esquina superior derecha
      return `${baseStyle} right-4 top-[-40px]`;
    } else {
      // Estilo para Register - ajustar según necesites
      return `${baseStyle} right-4 top-[-100px]`;
    }
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50">
      <div className="w-80 h-96 p-4 flex flex-col relative">
        <button className={getCloseButtonStyle()} onClick={onClose}>
          x
        </button>
        {isLoginActive ? (
          <Login onChangeForm={handleChangeForm} />
        ) : (
          <Register onChangeForm={handleChangeForm} />
        )}
      </div>
    </div>
  );
};
