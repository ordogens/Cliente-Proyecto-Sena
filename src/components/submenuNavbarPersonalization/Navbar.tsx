// components/submenuNavbarPersonalization/Navbar.tsx
import { Shirt, Upload, Type, Smile, WandSparkles } from "lucide-react";
import type { PersonalizationOption } from "../../pages/konva/ViewType";

interface NavbarProps {
  activeOption: PersonalizationOption;
  onChangeOption: (option: PersonalizationOption) => void;
  onUploadFile: (file: File) => void;
}

export const Navbar = ({
  activeOption,
  onChangeOption,
  onUploadFile,
}: NavbarProps) => {
  const iconClass = (option: PersonalizationOption) =>
    `cursor-pointer ${
      activeOption === option ? "text-green-600" : "text-black"
    }`;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUploadFile(file);
  };

  return (
    <nav className="w-full flex justify-between items-center">
    {/* Personalización de prenda */}
      <Shirt
        size={28}
        className={iconClass("shirt")}
        onClick={() => onChangeOption("shirt")}
      />

    {/* Subir una imagen */}
      <label className="cursor-pointer">
        <Upload size={28} className={iconClass("upload")} />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </label>
{/* Tipo de letra */}
      <Type
        size={28}
        className={iconClass("text")}
        onClick={() => onChangeOption("text")}
      />
{/* Sticker precargados que ya tenemos como png o jpg */}
      <Smile
        size={28}
        className={iconClass("emoji")}
        onClick={() => onChangeOption("emoji")}
      />
{/* Selección de colores */}
      <WandSparkles
        size={28}
        className={iconClass("effects")}
        onClick={() => onChangeOption("effects")}
      />
    </nav>
  );
};
