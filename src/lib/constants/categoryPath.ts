import hombre from "../../assets/ropaHombre.png";
import mujer from "../../assets/ropaMujer.png";
import gorros from "../../assets/gorros.png";

export const categorias = [
  {
    id: 1,
    nombre: "Ropa de Hombre",
    descripcion: "Camisas, pantalones y más prendas masculinas.",
    imagen: hombre,
    path: "/catalogo/hombre",
  },
  {
    id: 2,
    nombre: "Ropa de Mujer",
    descripcion: "Vestidos, blusas y accesorios fehombreinos.",
    imagen: mujer,
    path: "/catalogo/mujer",
  },
  {
    id: 3,
    nombre: "Gorros en General",
    descripcion: "Encuentra gorras de todos los estilos y colores.",
    imagen: gorros,
    path: "/catalogo/gorros",
  },
];
