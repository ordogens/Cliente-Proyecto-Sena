import { useState } from "react";
import { parteSuperior, parteInferior } from "./imagenesPrendasMujer";
import opcion1 from "../assets/prendasMujer/imagenOpcionParteSuperior.jpeg";
import opcion2 from "../assets/prendasMujer/imagenOpcionParteInferior.jpeg";

const opciones = [
  {
    id: 1,
    imagen: opcion1,
    descripcion: "Blusas y Sacos",
    tipo: "Superior",
  },
  {
    id: 2,
    imagen: opcion2,
    descripcion: "Pantalones y Shorts",
    tipo: "Inferior",
  },
];

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
            {parteSuperior.map((img) => (
              <div key={img.id} className="flex mb-6 justify-center">
                <div className="flex flex-col w-60 h-[380px] bg-[#f2f9f7] shadow-2xl bg-v rounded-t-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-t-lg transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around">
                    <p className="font-medium text-gray-800">{img.titulo}</p>
                    <p className="font-medium text-green-800">{img.precio}</p>
                  </div>
                  <p className="font-medium text-sm text-center text-gray-800 break-words">
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

      {seleccion === "Inferior" && (
        <>
          <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
            {parteInferior.map((img) => (
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

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSeleccion("")}
              className="px-4 py-2 shadow-2xl w-75 bg-gradient-to-r from-green-400 via-green-500 to-green-600 cursor-pointer
              text-white rounded-lg mb-4 "
            >
              Volver
            </button>
          </div>
        </>
      )}
    </div>
  );
};
