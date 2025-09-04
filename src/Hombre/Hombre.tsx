import { useState } from "react";
import {
  camisetas,
  camisas,
  camibusos,
  sacos,
  jeans,
  sudaderas,
  joggers,
  bermudas,
} from "./imagenesPrendasHombre";
import { opciones1, opciones2, opciones3 } from "./imagenesOpcionesPrendas";

export const Hombre = () => {
  const [seleccion, setSeleccion] = useState("");

  return (
    <div className="h-171 bg-[#f2f9f7]">
      <h1 className="font-bold text-[30px] text-center">Ropa de <span className="text-green-500">hombre</span></h1>
      {seleccion === "" && (
        <div className="flex mt-6 gap-16 flex-wrap pl-8 bg-[#f2f9f7]">
          {opciones1.map((img) => (
            <div key={img.id} className="flex mb-6 justify-center ">
              <div
                onClick={() => setSeleccion(img.tipo)}
                className="flex border-1 border-gray-300 flex-col w-60 h-[380px] bg-[#f1f5f9] transform duration-300 hover:scale-110 rounded-lg cursor-pointer shadow-2xl hover:shadow-2xl"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={img.imagen}
                    alt={`Camisa ${img.id}`}
                    className="w-60 h-80 object-center rounded-t-lg"
                  />
                </div>
                <p className="font-bold text-center hover:text-green-400 break-words mt-3 duration-300">
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

      {seleccion === "camisa" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {camisas.map((img) => (
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

      {seleccion === "camibuso" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {camibusos.map((img) => (
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

      {seleccion === "sudadera" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {sudaderas.map((img) => (
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

      {seleccion === "jogger" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {joggers.map((img) => (
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

      {seleccion === "bermuda" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {bermudas.map((img) => (
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
