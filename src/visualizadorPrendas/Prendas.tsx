import { useState } from "react";
import camisa from "../assets/camisa.png";
import atras from "../assets/atras.png";
import adelante from "../assets/camisann.png";
import { colores, tallas } from "../lib/constants/PersonalizationConstants";

const imagenes: string[] = [camisa, atras, adelante];

export const Prendas = () => {
  const [selectedImage, setSelectedImage] = useState<string>(imagenes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(colores[0]);

  return (
    <div className="bg-[#f2f9f7] h-168 flex gap-10">
        {/* contenedor izquierdo */}
      <section className="w-1/2 h-168 flex justify-end pt-15 gap-1">
        <article className="w-15 h-100 rounded-lg flex flex-col gap-1">
          {imagenes.map((imagen, idx) => (
            (selectedImage === imagen) ? (
              <img
                key={idx}
                src={imagen}
                className="rounded-lg cursor-pointer border-2 border-green-500"
                onClick={() => setSelectedImage(imagen)}
              />
            ) : (
              <img
                key={idx}
                src={imagen}
                alt="imagen"
                className="rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(imagen)}
              />
            )

          ))}
        </article>

        <article className="w-100 h-130 rounded-2xl" style={{ backgroundColor: selectedColor }}>
          <img src={selectedImage} alt="selected" className="rounded-lg" />
        </article>
      </section>
      {/* contenedor derecho */}
      <section className="w-1/2 h-168 pt-8 flex flex-col gap-8">
        <p className="font-bold md:text-2xl pb-9 ">Camiseta esencial unisex</p>
          {/* colores */}
        <article className="w-75 h-32  flex flex-wrap gap-1 ">
          {colores.map((color, idx) => (
            <button
              key={idx}
              style={{ backgroundColor: color }}
               onClick={() => setSelectedColor(color)}
              className="w-7 h-7 rounded cursor-pointer border"
            />
          ))}
        </article>
        {/* tallas */}
        <div className="w-71 h-10 flex flex-wrap gap-4 items-center ">
          {tallas.map((talla, idx) => (
            <div
              key={idx}
              className="w-7 h-7 rounded cursor-pointer border flex items-center justify-center"
            >
              {talla}
            </div>
          ))}
        </div>
        {/* informacion */}
        <article className="w-71 h-30 flex gap-1">
          <article className="w-1/2 bg-gray-200 rounded-lg"></article>
          <article className="w-1/2 bg-gray-200 rounded-lg"></article>
        </article>

        <article className="w-71 h-10  bg-gray-200 rounded-lg ">
          <button className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2">
            Empezar a diseñar
          </button>
        </article>
      </section>
    </div>
  );
};
