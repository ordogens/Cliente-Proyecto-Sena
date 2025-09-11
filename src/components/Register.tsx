interface OnchangeType {
  onChangeForm: () => void;
}

export const Register = ({ onChangeForm }: OnchangeType) => {
  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.719)] bg-opacity-50 z-50">
        <div className="w-80 h-120 relative bg-white p-4 rounded shadow-lg flex flex-col">
          <h1 className="text-emerald-600 text-center text-2xl font-bold">
            Hola
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

          <form className="space-y-4">
            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="tu@email.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Tu contraseña"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500"
              />
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

          <div className="flex justify-center">
            <p>¿Ya tienes cuenta?</p>
            <p
              onClick={onChangeForm}
              className="ml-1 text-emerald-600 cursor-pointer hover:text-green-800 transition duration-300 ease-in-out"
            >
              Inicia sesión
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
