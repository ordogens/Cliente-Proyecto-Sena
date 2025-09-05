import { useParams, } from "react-router-dom";
import { Products } from "../components/Products";

export const ProductsPage = () => {
  const { sexo, tipo } = useParams();

  return (
    <div className="h-171 bg-[#f2f9f7]">
      <h1 className="font-bold text-[30px] text-center">
        Productos de <span className="text-green-500">{sexo}</span> - {tipo}
      </h1>
      <Products seleccion={tipo || ""} />
    </div>
  );
};
