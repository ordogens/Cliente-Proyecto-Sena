import { useState } from "react";
import { parteSuperior, parteInferior } from "./imagenesPrendasHombre";
import opcion1 from "../assets/imagenOpcionParteSuperior.jpeg";
import opcion2 from "../assets/imagenOpcionParteInferior.jpeg";

const opciones = [
  {
    id: 1,
    imagen: opcion1,
    descripcion: "Camisetas, Camisas, Camibusos y Sacos",
    tipo: "Superior",
  },
  {
    id: 2,
    imagen: opcion2,
    descripcion: "Jeans, Sudaderas, Joggins y Bermudas",
    tipo: "Inferior",
  },
];

export const Hombre = () => {
  const [seleccion, setSeleccion] = useState("");

  return (
    <div className="h-171 bg-[#f2f9f7]">
      <h1 className="font-mono text-[30px] text-center">Ropa de hombre</h1>
      {seleccion === "" && (
        <div className="grid grid-cols-2 mt-6 gap-4 bg-[#f2f9f7]">
          {opciones.map((img) => (
            <div key={img.id} className="flex mb-6 justify-center">
              <div
                onClick={() => setSeleccion(img.tipo)}
                className="flex flex-col w-60 h-[400px] bg-[#bcf7e6] pt-3.5 px-3.5 rounded-lg cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={img.imagen}
                    alt={`Camisa ${img.id}`}
                    className="w-60 h-80 object-cover rounded-lg shadow-md transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex justify-between"></div>
                <p className="text-sm font-mono text-gray-900 break-words mt-2">
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
                <div className="flex flex-col w-60 h-[400px] bg-[#bcf7e6] pt-3.5 px-3.5 rounded-lg">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-800">{img.titulo}</p>
                    <p className="text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm text-gray-800 break-words">
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSeleccion("")}
              className="px-4 py-2 w-75 bg-blue-400 cursor-pointer
              text-white rounded-lg mb-4 transition-all 
              duration-300 hover:bg-blue-700 ease-in-out"
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
                <div className="flex flex-col w-60 h-[400px] bg-[#bcf7e6] pt-3.5 px-3.5 rounded-lg">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={img.imagen}
                      alt={`Camisa ${img.id}`}
                      className="w-60 h-80 object-cover rounded-lg shadow-md transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-800">{img.titulo}</p>
                    <p className="text-green-800">{img.precio}</p>
                  </div>
                  <p className="text-sm text-gray-800 break-words">
                    {img.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSeleccion("")}
              className="px-4 py-2 w-75 bg-blue-400 cursor-pointer
              text-white rounded-lg mb-4 transition-all 
              duration-300 hover:bg-blue-700 ease-in-out"
            >
              Volver
            </button>
          </div>
        </>
      )}
    </div>
  );
};
