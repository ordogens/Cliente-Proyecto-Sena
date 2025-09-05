import { useParams } from "react-router-dom";
import { Hombre } from "../../home/Hombre"; 
import { Mujer } from "../../home/Mujer";

export const Categoria = () => {
  const { sexo } = useParams();

  return (
    <>
      {sexo === "hombre" && <Hombre />}
      {sexo === "mujer" && <Mujer />}
    </>
  );
};
