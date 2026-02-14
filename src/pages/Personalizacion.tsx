import { useState } from "react";
import { Shirt, Upload, Type, Smile, WandSparkles } from "lucide-react";
import { ShirtDesigner } from "./konva/ShirtDesigner";
import { COLORS } from "./konva/ViewType";
import "./konva/personalizacion.css";
import type { ViewType } from "./konva/ViewType";
import { Navbar } from "../components/submenuNavbarPersonalization/Navbar";
import { RenderOptions } from "../components/submenuNavbarPersonalization/RenderOptions";
import type { PersonalizationOption } from "./konva/ViewType";

export const Personalizacion = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff");
  const [currentView, setCurrentView] = useState<ViewType>("front"); // 👈 nuevo
  const [activeOption, setActiveOption] =
    useState<PersonalizationOption>("shirt");

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <article className="h-[675px] bg-[#f2f9f7] flex">
      <section className="w-[30%] h-full border-1 border-black flex flex-col bg-amber-500">
        <section className="border-1 border-black w-full h-[3rem] flex items-center p-2 bg-white">
          <Navbar
            activeOption={activeOption}
            onChangeOption={setActiveOption}
            onUploadFile={(file) => setFile(file)}
          />
        </section>

        {/* contenedor de los colores */}
        {/* ============================================================================================= */}
        <div className="w-full h-[35%] border-b-black border-1 bg-white justify-center items-center bg-gr">
          <section className="border-1 border-black w-[100%] h-[100%] rounded-sm bg-amber-700">
            <RenderOptions
              option={activeOption}
              file={file}
              view={currentView}
              color={selectedColor}
              colors={COLORS}
              onSelectColor={setSelectedColor}
            />
          </section>
        </div>
      </section>

      <section className="w-[70%] h-full border-1 border-black flex flex-col items-center gap-5">
        <section className="w-full h-[7%] flex justify-center gap-4 items-center">
          <p
            className="text-black font-bold cursor-pointer text-sm"
            onClick={() => setCurrentView("front")}
          >
            Impresión frontal
          </p>
          <p
            className="text-black font-bold cursor-pointer text-sm"
            onClick={() => setCurrentView("back")}
          >
            Impresión trasera
          </p>
          <p
            className="text-black font-bold cursor-pointer text-sm"
            onClick={() => setCurrentView("left")}
          >
            Manga izquierda
          </p>
          <p
            className="text-black font-bold cursor-pointer text-sm"
            onClick={() => setCurrentView("right")}
          >
            Manga derecha
          </p>
        </section>

        {/* ============================================================================================= */}

        <section className="border-1 border-black w-[90%] h-[80%] rounded-sm bg">
          {/* ENVIAMOS EL ARCHIVO */}
          <ShirtDesigner file={file} view={currentView} color={selectedColor} />
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
