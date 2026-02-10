import { EyeIcon, EyeOffIcon, MailIcon, LockIcon } from "lucide-react";
import GoogleIcon from "../assets/svg/GoogleIcon";
import FacebookIcon from "../assets/svg/FacebookIcon";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Interfaz del payload del token JWT
interface TokenPayload {
  sub: string;  // email del usuario
  iat: number;  // fecha de creación (timestamp)
  exp: number;  // fecha de expiración (timestamp)
}

interface OnchangeType {
  onChangeForm: () => void;
  onClose: () => void;
}

export const Login = ({ onChangeForm, onClose }: OnchangeType) => {
  const { isDarkMode } = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:1010/api/usuarios/v1/usuarios/login",
        {
          email: formData.email,
          contraseña: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login exitoso", response.data);
      
      const token = response.data.token;
      const decoded = jwtDecode<TokenPayload>(token);
      
      // Guardar en sessionStorage
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("usuario", JSON.stringify(decoded));
      
      onClose();
    } catch (error: any) {
      console.error(error);
      setError(
        error.response?.data?.message || "Error al iniciar sesión"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.719)] bg-opacity-50 z-50">
      <div
        className={`w-80 h-120 relative p-4 rounded shadow-lg flex flex-col transition-colors duration-300 ${
          isDarkMode ? "bg-[#111827]" : "bg-white"
        }`}
      >
        <h1 className="text-emerald-600 text-center text-2xl font-bold">
          Iniciar Sesión
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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="correo"
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
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={`mt-1 block w-full rounded-md border pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-black placeholder-gray-400'
                }`}
                required
              />
            </div>
          </div>

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
                value={formData.password}
                onChange={handleChange}
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
          <div className="flex justify-between">
            <span></span>
            <p className="text-emerald-600 cursor-pointer hover:text-green-800 transition duration-300 ease-in-out">
              ¿Olvidaste tu contraseña?
            </p>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md bg-emerald-600 px-6 py-4 cursor-pointer text-white text-xs font-medium hover:bg-green-700 transition duration-300 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>

        <div className="flex justify-center mt-2">
          <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
            ¿No tienes cuenta?
          </p>
          <p
            onClick={onChangeForm}
            className="ml-1 text-emerald-600 cursor-pointer hover:text-green-800 transition duration-300 ease-in-out"
          >
            Registrate aquí
          </p>
        </div>
      </div>
    </div>
  );
};