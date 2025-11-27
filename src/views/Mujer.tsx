import { useState } from "react";
import {
  blusas,
  camisetas,
  cropTops,
  sacos,
  jeans,
  pantalones,
  faldas,
  shorts,
} from "../data/mujer/imagenesPrendasMujer";
import {
  opciones,
  opciones2,
  opciones3,
} from "../data/mujer/imagenesOpcionesPrendas";
import { useTheme } from "../contexts/ThemeContext";

export const Mujer = () => {
  const [seleccion, setSeleccion] = useState("");
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-171 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#f2f9f7]'
    }`}>
      <h1
        className={`font-bold text-[30px] text-center transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Ropa de mujer
      </h1>
      {seleccion === "" && (
        <div className="grid grid-cols-2 mt-6 gap-4">
          {opciones.map((img) => (
            <div key={img.id} className="flex mb-6 justify-center">
              <div
                onClick={() => setSeleccion(img.tipo)}
                className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={img.imagen}
                    alt={`Camisa ${img.id}`}
                    className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                  />
                </div>
                <p className={`text-sm text-center font-medium break-words mt-2 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-600"
                }`}>
                  {img.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {seleccion === "Superior" && (
        <>
          <div className="relative grid grid-cols-4 mt-6 gap-4">
            {opciones2.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div
                  onClick={() => setSeleccion(img.tipo)}
                  className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                    isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                  }`}
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <p className={`text-sm text-center font-medium break-words mt-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSeleccion("")}
              className="px-4 py-2 w-75 shadow-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 cursor-pointer
              text-white rounded-lg mb-4"
            >
              Volver
            </button>
          </div>
        </>
      )}

      {seleccion === "blusa" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {blusas.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "camiseta" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {camisetas.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "crop top" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {cropTops.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "saco" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {sacos.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "Inferior" && (
        <>
          <div className="relative grid grid-cols-4 mt-6 gap-4">
            {opciones3.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div
                  onClick={() => setSeleccion(img.tipo)}
                  className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                    isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                  }`}
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <p className={`text-sm text-center font-medium break-words mt-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSeleccion("")}
              className="px-4 py-2 w-75 shadow-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 cursor-pointer
              text-white rounded-lg mb-4"
            >
              Volver
            </button>
          </div>
        </>
      )}

      {seleccion === "jean" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {jeans.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "pantalon" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {pantalones.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "falda" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {faldas.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {seleccion === "short" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4">
            {shorts.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-t-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
                }`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>{img.titulo}</p>
                    <p className="font-medium text-green-500">{img.precio}</p>
                  </div>
                  <p className={`text-sm font-medium text-center break-words transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
