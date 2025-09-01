import { useState } from "react";
import camisa from "../assets/camisa.png";
import atras from "../assets/atras.png";
import adelante from "../assets/camisann.png";

const imagenes: string[] = [camisa, atras, adelante];
const tallas: string[] = ["S", "M", "L", "XL"];

const colores: string[] = [
  "#FF6B6B", // rojo coral
  "#FF8E72", // durazno
  "#FFB347", // naranja suave
  "#FFD93D", // amarillo pastel
  "#6BCB77", // verde menta
  "#4D96FF", // azul vivo
  "#6A4C93", // morado elegante
  "#9D4EDD", // violeta
  "#FF4D6D", // rosa fuerte
  "#F72585", // fucsia
  "#7209B7", // púrpura intenso
  "#3A0CA3", // azul púrpura
  "#4361EE", // azul eléctrico
  "#4895EF", // azul cielo fuerte
  "#4CC9F0", // celeste
  "#38B000", // verde brillante
  "#70E000", // lima
  "#9EF01A", // verde limón
  "#FFB5A7", // rosa pastel
  "#FCD5CE", // durazno pastel
  "#F8EDEB", // crema rosado
  "#B5E48C", // verde suave
  "#99D98C", // verde jade
  "#76C893", // verde agua
  "#52B69A", // verde esmeralda
  "#34A0A4", // turquesa
  "#168AAD", // azul océano
  "#1A759F", // azul petróleo
  "#184E77", // azul profundo
  "#6D597A", // gris lilac
  "#FF9F1C", // naranja brillante
  "#2EC4B6", // turquesa fresco
  "#E71D36", // rojo vibrante
  "#011627", // azul casi negro
  "#FFCAD4", // rosa pálido
  "#C77DFF", // lavanda neón
];

export const Prendas = () => {
  const [selectedImage, setSelectedImage] = useState<string>(imagenes[0]);

  return (
    <div className="bg-[#f2f9f7] h-168 flex">
      <section className="w-1/2 h-168 flex justify-center pt-15 gap-1">
        <article className="w-15 h-100 rounded-lg flex flex-col gap-1">
          {imagenes.map((imagen, idx) => (
            <img
              key={idx}
              src={imagen}
              className="rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(imagen)}
            />
          ))}
        </article>

        <article className="w-100 ">
          <img src={selectedImage} alt="selected" className="rounded-lg" />
        </article>
      </section>
      <section className="w-1/2 h-168 pt-8 flex flex-col ">
        <p className="font-bold md:text-2xl pb-9 ">Camiseta esencial unisex</p>

        <article className="w-75 h-32  flex flex-wrap gap-1">
          {colores.map((color, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: color }}
              className="w-7 h-7 rounded cursor-pointer border"
            />
          ))}
        </article>
        <div className="w-71 h-10 flex flex-wrap gap-4 items-center">
          {tallas.map((talla, idx) => (
            <div key={idx} className="w-7 h-7 rounded cursor-pointer border flex items-center justify-center">
              {talla}
            </div>
          ))}

        </div>
        <article>
        </article>
      </section>
    </div>
  );
};
