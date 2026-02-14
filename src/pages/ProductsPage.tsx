import { useParams, } from "react-router-dom";
import { Products } from "../components/Products";
import { useTheme } from "../contexts/ThemeContext";

export const ProductsPage = () => {
  const { sexo, tipo } = useParams();
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-171 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#f2f9f7]'
    }`}>
      <h1 className={`font-bold text-[30px] text-center pt-6 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>
        Productos de <span className="text-green-500">{sexo}</span> - {tipo}
      </h1>
      <Products seleccion={tipo || ""} />
    </div>
  );
};
