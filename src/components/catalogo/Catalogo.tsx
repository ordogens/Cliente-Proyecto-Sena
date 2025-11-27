import { NavLink } from "react-router-dom";
import { categorias } from "../../lib/constants/categoryPath";
import { useTheme } from "../../contexts/ThemeContext";

export const Catalogo = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`h-168 flex flex-col items-center transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#f2f9f7]'
    }`}>
      <h1
        className={`text-4xl font-bold mb-8 pt-6 transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Catálogo de <span className="text-green-500">productos</span>
      </h1>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
              isDarkMode ? "bg-[#232d4a]" : "bg-white"
            }`}
          >
            <img
              src={categoria.imagen}
              alt={categoria.nombre}
              className={`w-full h-70 object-contain transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            />
            <div className="p-5">
              <h2
                className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-200" : "text-black"
                }`}
              >
                {categoria.nombre}
              </h2>
              <p
                className={`mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {categoria.descripcion}
              </p>

              <NavLink to={categoria.path}>
                <p className="w-full cursor-pointer text-center hover:font-semibold text-black py-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br">
                  Ver más
                </p>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
