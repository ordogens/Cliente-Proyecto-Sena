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
    <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.719)] bg-opacity-50 z-50">
      <div className="w-80 h-96 bg-white p-4 rounded shadow-lg flex flex-col items-center">
        <button className="cursor-pointer" onClick={onClose}>
          X
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
