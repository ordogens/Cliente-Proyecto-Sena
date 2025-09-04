import men from "../assets/ropaHombre.png";
import mujer from "../assets/ropaMujer.png";
import gorros from "../assets/gorros.png";
import { NavLink } from "react-router-dom";

export const Catalogo = () => {
  // Array de categorías (puedes crecerlo después)
  const categorias = [
    {
      id: 1,
      nombre: "Ropa de Hombre",
      descripcion: "Camisas, pantalones y más prendas masculinas.",
      imagen: men, // Cambia por tus imágenes
      path: "/catalogo/hombre",
    },
    {
      id: 2,
      nombre: "Ropa de Mujer",
      descripcion: "Vestidos, blusas y accesorios femeninos.",
      imagen: mujer,
      path: "/catalogo/mujer",
    },
    {
      id: 3,
      nombre: "Gorros en General",
      descripcion: "Encuentra gorras de todos los estilos y colores.",
      imagen: gorros,
      path: "/catalogo/gorros",
    },
  ];

  return (
    <div className="bg-[#f2f9f7] h-168 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 pt-6">Catálogo de <span className="text-green-500">productos</span></h1>

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
              <h2 className="text-xl font-semibold mb-2">{categoria.nombre}</h2>
              <p className="text-gray-600 mb-4">{categoria.descripcion}</p>

              <NavLink to={categoria.path}>
                <button className="w-full cursor-pointer text-black py-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br">
                  Ver más
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
