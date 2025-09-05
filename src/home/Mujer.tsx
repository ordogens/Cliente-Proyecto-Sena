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
import { opciones, opciones2, opciones3 } from "../data/mujer/imagenesOpcionesPrendas";

export const Mujer = () => {
  const [seleccion, setSeleccion] = useState("");

  return (
    <div className="h-171 bg-[#f2f9f7]">
      <h1 className="font-bold text-[30px] text-center">Ropa de mujer</h1>
      {seleccion === "" && (
        <div className="grid grid-cols-2 mt-6 gap-4 bg-[#f2f9f7]">
          {opciones.map((img) => (
            <div key={img.id} className="flex mb-6 justify-center">
              <div
                onClick={() => setSeleccion(img.tipo)}
                className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg cursor-pointer"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={img.imagen}
                    alt={`Camisa ${img.id}`}
                    className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-sm text-center font-medium text-gray-900 break-words mt-2">
                  {img.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {seleccion === "Superior" && (
        <>
          <div className="relative grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {opciones2.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div
                  onClick={() => setSeleccion(img.tipo)}
                  className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg cursor-pointer"
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <p className="text-sm text-center font-medium text-gray-900 break-words mt-2">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {blusas.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {camisetas.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {cropTops.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {sacos.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="relative grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {opciones3.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div
                  onClick={() => setSeleccion(img.tipo)}
                  className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg cursor-pointer"
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <p className="text-sm text-center font-medium text-gray-900 break-words mt-2">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {jeans.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {pantalones.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {faldas.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {shorts.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-800 text-center break-words">
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
