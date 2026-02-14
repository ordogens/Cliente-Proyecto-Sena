import { useTheme } from "../contexts/ThemeContext";

interface Image {
    id: number;
    imagen: string;
    titulo: string;
    precio: string;
    descripcion: string;
}

export const RenderImageCatalog = ({ ropa  }: { ropa: Image[] }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <div className="grid grid-cols-4 mt-6 gap-4">
        {ropa.map((img: Image) => (
          <div key={img.id} className="flex mb-6 justify-center">
            <div className={`flex flex-col w-60 h-[380px] shadow-2xl rounded-lg transition-all duration-300 ${
              isDarkMode ? 'bg-[#232d4a]' : 'bg-white'
            }`}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={img.imagen}
                  alt={`Camisa ${img.id}`}
                  className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex justify-around">
                <p className={`font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-800'
                }`}>{img.titulo}</p>
                <p className="font-medium text-green-500">{img.precio}</p>
              </div>
              <p className={`font-bold text-lg flex justify-start pl-4 break-words transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-800'
              }`}>
                {img.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
