import { EyeIcon, EyeOffIcon, MailIcon, LockIcon } from "lucide-react";
import { useState } from "react";

interface OnchangeType {
  onChangeForm: () => void;
}

export const Login = ({ onChangeForm }: OnchangeType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.719)] bg-opacity-50 z-50">
      <div className="w-80 h-120 relative bg-white p-4 rounded shadow-lg flex flex-col">
        <h1 className="text-emerald-600 text-center text-2xl font-bold">
          Iniciar Sesión
        </h1>

        <button className="text-gray-700 border-[2px] cursor-pointer border-gray-300 rounded mt-1.5 p-1.5 hover:bg-gray-200 transition duration-300 ease-in-out">
          Continuar con Google
        </button>
        <button className="text-gray-700 border-[2px] cursor-pointer border-gray-300 rounded p-1.5 mt-1.5 hover:bg-gray-200 transition duration-300 ease-in-out">
          Continuar con Facebook
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">
            o continúa con email
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>

            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="tu@email.com"
                className="mt-1 block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500"
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Por favor ingresa un correo válido"
                  )
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full rounded-md border border-gray-300 pl-10 pr-10 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
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

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 px-6 py-4 cursor-pointer text-white text-xs font-medium hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="flex justify-center mt-2">
          <p>¿No tienes cuenta?</p>
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
