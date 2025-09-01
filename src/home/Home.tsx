import hombre from "../assets/modern.png";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-[#f2f9f7] h-168 flex">
      <div className="w-1/2 ml-10 flex flex-col">
        <p className="font-bold text-2xl md:text-6xl pt-3">
          Crea productos personalizados online
        </p>
        <p className="text-gray-600 text-1xl pt-2">
          Convierte tus ideas en productos premium
        </p>
        <p className="text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-md pt-8">
          Diseña tu <span className="text-green-500">estilo único</span>
        </p>
        <p className="text-lg text-muted-foreground text-pretty max-w-md">
          Personaliza camisas, pantalones, gorras y más con nuestros diseños
          predeterminados o sube tus propias creaciones.
        </p>

        <div className="flex gap-3 pt-8">
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Empieza a personalizar{" "}
          </button>
          <NavLink to="/catalogo">
          <button className="text-white bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <p className="text-black">Ver catalogo</p>
          </button>
          </NavLink>
        </div>
      </div>
      <div className="relative mx-auto w-80 h-80 md:w-100 md:h-100  top-25">
        <img
          src={hombre}
          alt=""
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
        <div className="absolute -top-4 -right-4 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
          <NavLink to= "/prendas">¡Nuevo!</NavLink>
        </div>
      </div>
    </div>
  );
};
