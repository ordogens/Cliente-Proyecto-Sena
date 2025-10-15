import { NavLink } from "react-router-dom";
import { categorias } from "../../lib/constants/categoryPath";
import { useTheme } from "../../contexts/ThemeContext";

export const Catalogo = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="bg-[#f2f9f7] h-168 flex flex-col items-center">
      <h1 className={`${isDarkMode? "text-white": "text-black"} text-4xl font-bold mb-8 pt-6`}>Catálogo de <span className="text-green-500">productos</span></h1>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={categoria.imagen}
              alt={categoria.nombre}
              className="w-full h-70 object-contain bg-gray-100"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-black">{categoria.nombre}</h2>
              <p className={`${isDarkMode? "text-black": "text-gray-400"} mb-4`}>{categoria.descripcion}</p>

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
