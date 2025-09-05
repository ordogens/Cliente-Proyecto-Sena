import { useParams } from "react-router-dom";
import { Hombre } from "../../views/Hombre"; 
import { Mujer } from "../../views/Mujer";

export const Categoria = () => {
  const { sexo } = useParams();

  return (
    <>
      {sexo === "hombre" && <Hombre />}
      {sexo === "mujer" && <Mujer />}
    </>
  );
};
