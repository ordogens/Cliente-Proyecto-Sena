import {
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  MailIcon,
  LockIcon,
} from "lucide-react";
import { useState } from "react";
import GoogleIcon from "../assets/svg/GoogleIcon";
import FacebookIcon from "../assets/svg/FacebookIcon";
import { useTheme } from "../contexts/ThemeContext";

interface OnchangeType {
  onChangeForm: () => void;
}

export const Register = ({ onChangeForm }: OnchangeType) => {
  const { isDarkMode } = useTheme();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.719)] bg-opacity-50 z-50">
      <div className={`w-80 relative p-4 rounded shadow-lg flex flex-col transition-colors duration-300 ${
        isDarkMode ? "bg-[#111827]" : "bg-white"
      }`}>
        <h1 className="text-emerald-600 text-center text-2xl font-bold">
          Crear Cuenta
        </h1>

        <div className="relative group">
          <GoogleIcon 
            width="32px" 
            height="32px" 
            className="absolute left-5 top-6.5 -translate-y-1/2 text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 ease-in-out" 
          />
          <button className={`border-[2px] w-2xs cursor-pointer rounded mt-1.5 p-1.5 transition-all duration-300 ${
            isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-800' : 'text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}>
            Continuar con Google
          </button>
        </div>

        <div className="relative group">
          <FacebookIcon 
            width="32px" 
            height="32px" 
            className="absolute left-5 top-6.5 -translate-y-1/2 text-gray-500 group-hover:text-blue-600 transition-colors duration-300 ease-in-out" 
          />
          <button className={`w-2xs border-[2px] cursor-pointer rounded p-1.5 mt-1.5 transition-all duration-300 ${
            isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-800' : 'text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}>
            Continuar con Facebook
          </button>
        </div>

        {/* Separador */}
        <div className="flex items-center my-4">
          <hr className={`flex-grow border-t transition-colors duration-300 ${
            isDarkMode ? 'border-gray-600' : 'border-gray-300'
          }`} />
          <span className={`mx-2 text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            o continúa con email
          </span>
          <hr className={`flex-grow border-t transition-colors duration-300 ${
            isDarkMode ? 'border-gray-600' : 'border-gray-300'
          }`} />
        </div>

        {/* Formulario */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className={`block text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Nombre completo
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre completo"
                className={`mt-1 block w-full rounded-md border pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-black placeholder-gray-400'
                }`}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Correo electrónico
            </label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className={`mt-1 block w-full rounded-md border pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-black placeholder-gray-400'
                }`}
                required
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Contraseña
            </label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Tu contraseña"
                className={`mt-1 block w-full rounded-md border pl-10 pr-10 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-black placeholder-gray-400'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label
              htmlFor="password2"
              className={`block text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Confirmar contraseña
            </label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password2"
                name="password2"
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirma tu contraseña"
                className={`mt-1 block w-full rounded-md border pl-10 pr-10 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-black placeholder-gray-400'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPassword2 ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 px-6 py-3 cursor-pointer text-white text-sm font-medium hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Crear cuenta
          </button>
        </form>

        {/* Cambiar a login */}
        <div className="flex justify-center mt-3 text-sm">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-black'
          }`}>¿Ya tienes cuenta?</p>
          <p
            onClick={onChangeForm}
            className="ml-1 text-emerald-600 cursor-pointer hover:text-green-800 transition duration-300 ease-in-out"
          >
            Inicia sesión
          </p>
        </div>
      </div>
    </div>
  );
};
