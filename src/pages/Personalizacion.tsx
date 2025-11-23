import { useState } from "react";
import { Shirt, Upload, Type, Smile, WandSparkles } from "lucide-react";
import { ShirtDesigner } from "./konva/ShirtDesigner";
import { COLORS } from "./konva/ViewType";
import "./konva/personalizacion.css";

export const Personalizacion = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff");


  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <article className="h-[675px] bg-[#f2f9f7] flex">
      <section className="w-[30%] h-full border-1 border-black flex flex-col bg-amber-500">
        <section className="border-1 border-black w-full h-[3rem] flex justify-between items-center p-2 bg-white">
          <Shirt color="black" size={30} className="cursor-pointer" />

          <label>
            <Upload color="black" size={30} className="cursor-pointer" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={uploadFile}
            />
          </label>

          <Type color="black" size={30} className="cursor-pointer" />
          <Smile color="black" size={30} className="cursor-pointer" />
          <WandSparkles color="black" size={30} className="cursor-pointer" />
        </section>
        
        {/* contenedor de los colores */}
          {/* ============================================================================================= */}
        <div className="w-full h-[30%] bg-amber-400 gr">
          {COLORS.map((color) => (
            <button key={color}
             className="border-1 border-black rounded-sm cursor-pointer" 
             style={{background: color}}
             onClick={() => setSelectedColor(color)}>
            </button>
          ))}
        </div>

      </section>

      <section className="w-[70%] h-full border-1 border-black flex flex-col items-center gap-5">
        <section className="w-full h-[7%] flex justify-center gap-4 items-center">
          <p className="text-black font-bold cursor-pointer text-sm">
            Impresión frontal
          </p>
          <p className="text-black font-bold cursor-pointer text-sm">
            Impresión trasera
          </p>
          <p className="text-black font-bold cursor-pointer text-sm">
            Manga izquierda
          </p>
          <p className="text-black font-bold cursor-pointer text-sm">
            Manga derecha
          </p>
        </section>

          {/* ============================================================================================= */}

        <section className="border-1 border-black w-[90%] h-[80%] rounded-sm">
          {/* ENVIAMOS EL ARCHIVO */}
          <ShirtDesigner file={file} view="front" color={selectedColor} />
        </section>

          {/* ============================================================================================= */}

        <section className="w-full h-[7%] flex pl-3 justify-between">
          <button className="cursor-pointer text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5">
            Guardar diseño
          </button>

          <section className="flex pr-3">
            <button className="text-black cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5">
              Añadir al carrito
            </button>

            <div className="w-[6rem] h-[2.5rem] rounded-sm bg-[#cccc] border-1 flex justify-center items-center">
              <p className="text-black font-bold">$12.00</p>
            </div>
          </section>
        </section>
      </section>
    </article>
  );
};
