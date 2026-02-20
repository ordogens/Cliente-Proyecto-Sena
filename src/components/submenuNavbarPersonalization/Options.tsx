// components/submenuNavbarPersonalization/Options.tsx
// import { ShirtDesigner } from "../../pages/konva/ShirtDesigner";
import type { ViewType } from "../../pages/konva/ViewType";
import {stikers} from "../../lib/constants/stikers";
import "./options.css"

// interface BaseProps {
//   file: File | null;
//   view: ViewType;
//   color: string;
// }

interface EffectsOptionProps {
  colors: string[];
  onSelectColor: (color: string) => void;
}

export const EffectsOption = ({
  colors,
  onSelectColor,
}: EffectsOptionProps) => {
  return (
    <div className=" gap-2 p-2 gr ">
      {colors.map((color) => (
        <button
          key={color}
          className="w-8 h-8 rounded-sm cursor-pointer border-1 border-black"
          style={{ background: color }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};

export const ShirtOption = () => {
  return (
    <div className="bg-white p-4 text-red-500">
      <p>Camiseta</p>
    </div>
  );
};

export const UploadOption = () => {
  return (
    <div className="flex justify-center items-center h-full text-gray-500">
      Sube una imagen desde el ícono superior
    </div>
  );
};

export const TextOption = () => {
  return <div className="p-4 bg-blue-700">Aquí irá el editor de texto</div>;
};

export const EmojiOption = () => {
  return <div className="p-4 bg-gray-200 h-[39rem] ggr">
    {stikers.map((stiker) => (
      <img key={stiker.id} src={stiker.src} className="w-[3rem] h-[4rem] cursor-pointer" />
    ))}
  
  </div>;
};

