import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";

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

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50">
      <div className="w-80 h-96 p-4 flex flex-col relative">
        <button className="cursor-pointer text-gray-600 text-right absolute right-4 top-[-40px] z-100" onClick={onClose}>
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
