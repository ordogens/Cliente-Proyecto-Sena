import { useState } from "react";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { ForgotPasswordModal } from "./ForgotPasswordModal";
import { useTheme } from "../contexts/ThemeContext";

// Definir las props del componente
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormType = "login" | "register" | "forgotPassword";

export const LoginRegisterModal = ({ isOpen, onClose }: ModalProps) => {
  const [activeForm, setActiveForm] = useState<FormType>("login");
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const handleChangeForm = () => {
    setActiveForm((prev) => (prev === "login" ? "register" : "login"));
  };

  const handleForgotPassword = () => {
    setActiveForm("forgotPassword");
  };

  const handleBackToLogin = () => {
    setActiveForm("login");
  };

  // Si está en el modal de recuperar contraseña, mostrarlo directamente
  if (activeForm === "forgotPassword") {
    return (
      <ForgotPasswordModal 
        onBack={handleBackToLogin} 
        onClose={onClose} 
      />
    );
  }

  // Estilos dinámicos para la X basados en el formulario activo
  const getCloseButtonStyle = () => {
    const colorStyle = isDarkMode 
      ? "text-gray-300 hover:text-white" 
      : "text-gray-600 hover:text-gray-800";
    const baseStyle =
      `cursor-pointer absolute z-100 text-xl font-bold transition-colors duration-300 ${colorStyle}`;

    if (activeForm === "login") {
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
        {activeForm === "login" ? (
          <Login 
            onChangeForm={handleChangeForm} 
            onClose={onClose}
            onForgotPassword={handleForgotPassword}
          />
        ) : (
          <Register onChangeForm={handleChangeForm} onClose={onClose} />
        )}
      </div>
    </div>
  );
};
