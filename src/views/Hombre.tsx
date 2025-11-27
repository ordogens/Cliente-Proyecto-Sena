import { useNavigate } from "react-router-dom";
import { opciones1 } from "../data/hombre/imagenesOpcionesPrendas";
import { useTheme } from "../contexts/ThemeContext";

export const Hombre = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-171 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#f2f9f7]'
    }`}>
      <h1
        className={`text-4xl font-bold pt-6 text-center transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Ropa de <span className="text-green-500">hombre</span>
      </h1>
      <div className="flex justify-center mt-6 gap-6 flex-wrap">
        {opciones1.map((img) => (
          <div key={img.id} className="group flex mb-6 justify-center">
            <div
              onClick={() => navigate(`/catalogo/hombre/${img.tipo}`)}
              className={`flex border-1 flex-col w-40 h-75 transition-all duration-300 group-hover:transform hover:scale-110 rounded-lg cursor-pointer shadow-2xl hover:shadow-2xl ${
                isDarkMode ? "bg-[#232d4a] border-gray-700" : "bg-[#f1f5f9] border-gray-300"
              }`}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={img.imagen}
                  alt={`Camisa ${img.id}`}
                  className="w-40 h-60 object-center rounded-t-lg group-hover:transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p
                className={`font-bold text-center group-hover:text-green-400 break-words mt-3 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {img.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
