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
import { opciones1} from "./imagenesOpcionesPrendas";
import { RenderImageCatalog } from "../components/RenderImageCatalog";

export const Hombre = () => {
  const [seleccion, setSeleccion] = useState("");

  return (
    <div className="h-171 bg-[#f2f9f7]">
      <h1 className="font-bold text-[30px] text-center">
        Ropa de <span className="text-green-500">hombre</span>
      </h1>
      {seleccion === "" && (
        <div className="flex justify-center mt-6 gap-6 flex-wrap bg-[#f2f9f7]">
          {opciones1.map((img) => (
            <div key={img.id} className="group flex mb-6 justify-center">
              <div
                onClick={() => setSeleccion(img.tipo)}
                className="flex border-1 border-gray-300 flex-col w-40 h-75 bg-[#f1f5f9] group-hover:transform duration-300 hover:scale-110 rounded-lg cursor-pointer shadow-2xl hover:shadow-2xl"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={img.imagen}
                    alt={`Camisa ${img.id}`}
                    className="w-40 h-60 object-center rounded-t-lg group-hover:transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="font-bold text-center group-hover:text-green-400 break-words mt-3 duration-300">
                  {img.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {seleccion === "Superior" && <RenderImageCatalog ropa={camisetas} />}

      {seleccion === "Inferior" && <RenderImageCatalog ropa={jeans} />}

      {seleccion === "Bermuda" && <RenderImageCatalog ropa={bermudas} />}

      {seleccion === "Sudadera" && <RenderImageCatalog ropa={sudaderas} />}

      {seleccion === "Sudadera" && <RenderImageCatalog ropa={camibusos} />}
      {seleccion === "Sudadera" && <RenderImageCatalog ropa={sacos} />}

      {seleccion === "Sudadera" && <RenderImageCatalog ropa={jeans} />}
      {seleccion === "Sudadera" && <RenderImageCatalog ropa={joggers} />}
      {seleccion === "Sudadera" && <RenderImageCatalog ropa={bermudas} />}
    </div>
  );
};
