import camiseta1 from "../assets/product-page-01-related-product-01.jpg";
import camiseta2 from "../assets/product-page-01-related-product-02.jpg";
import camiseta3 from "../assets/product-page-01-related-product-03.jpg";
import camiseta4 from "../assets/product-page-01-related-product-04.jpg";
import camisa1 from "../assets/CME_1110R_V1_A_SML.jpg";
import camisa2 from "../assets/descarga (11).jpeg";
import camisa3 from "../assets/descarga (12).jpeg";
import camisa4 from "../assets/descarga (13).jpeg";
import camibuso1 from "../assets/090200delbeige.jpg";
import camibuso2 from "../assets/090208DELNEGRO.jpg";
import camibuso3 from "../assets/camibuso-tipo-polo-h.jpg";
import camibuso4 from "../assets/images (1).jpeg";

export const Hombre = () => {
  const imagenes = [
    {
      id: 1,
      imagen: camiseta1,
      titulo: "Camiseta simple",
      descripcion: "Camiseta negra"
    },
    {
      id: 2,
      imagen: camiseta2,
      titulo: "Camiseta simple",
      descripcion: "Camiseta blanca"
    },
    {
      id: 3,
      imagen: camiseta3,
      titulo: "Camiseta simple",
      descripcion: "Camiseta gris"
    },
    {
      id: 4,
      imagen: camiseta4,
      titulo: "Camiseta con estampado",
      descripcion: "Camiseta rosa claro con puntos blancos, morados y cafes"
    },
    {
      id: 5,
      imagen: camisa1,
      titulo: "Camisa simple",
      descripcion: ""
    },
    {
      id: 6,
      imagen: camisa2,
      titulo: "Camisa simple",
      descripcion: ""
    },
    {
      id: 7,
      imagen: camisa3,
      titulo: "Camisa simple",
      descripcion: ""
    },
    {
      id: 8,
      imagen: camisa4,
      titulo: "Camisa simple",
      descripcion: ""
    },
    {
      id: 9,
      imagen: camibuso1,
      titulo: "Camibuso simple",
      descripcion: ""
    },
    {
      id: 10,
      imagen: camibuso2,
      titulo: "Camibuso simple",
      descripcion: ""
    },
    {
      id: 11,
      imagen: camibuso3,
      titulo: "Camibuso simple",
      descripcion: ""
    },
    {
      id: 12,
      imagen: camibuso4,
      titulo: "Camibuso simple",
      descripcion: ""
    }
  ];

  return (
    <div className="bg-white h-171">
      <h1 className="font-mono text-[30px] text-center">Ropa de hombre</h1>

      <div className="flex flex-wrap justify-center mt-6">
        {imagenes.map((img) => (
          <div key={img.id} className="flex m-4">
            <img
              src={img.imagen}
              alt={`Camisa ${img.id}`}
              className="w-60 h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
