import {
  camisetas,
  camisas,
  camibusos,
  sacos,
  jeans,
  sudaderas,
  joggers,
  bermudas,
} from "../data/hombre/imagenesPrendasHombre";
import { RenderImageCatalog } from "./RenderImageCatalog";

type ProductsProps = {
  seleccion: string;
};

export const Products = ({ seleccion }: ProductsProps) => {
  return (
    <>
      {seleccion === "Superior" && (
        <>
          <RenderImageCatalog ropa={camisetas} />
          <RenderImageCatalog ropa={camisas} />
        </>
      )}

      {seleccion === "Sudadera" && (
        <>
          <RenderImageCatalog ropa={camibusos} />
          <RenderImageCatalog ropa={sacos} />
          <RenderImageCatalog ropa={sudaderas} />
          <RenderImageCatalog ropa={jeans} />
          <RenderImageCatalog ropa={joggers} />
          <RenderImageCatalog ropa={bermudas} />
        </>
      )}

      {seleccion === "Inferior" && <RenderImageCatalog ropa={jeans} />}
      {seleccion === "Bermuda" && <RenderImageCatalog ropa={bermudas} />}
    </>
  );
};
