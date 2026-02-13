import { useState, useEffect } from "react";
import { RenderImageCatalog } from "./RenderImageCatalog";
import { obtenerProductosConDetalles } from "../services/catalogoService";
import type { ProductoCard } from "../services/catalogoService";
import { useTheme } from "../contexts/ThemeContext";

// Mapeo de tipos de ropa a IDs de categoría en el backend
// IMPORTANTE: Actualiza estos IDs según los que tengas en tu base de datos
const CATEGORIA_IDS: Record<string, number> = {
  Superior: 1, // Camisetas, camisas
  Sudadera: 2, // Sudaderas, sacos
  Inferior: 3, // Jeans, pantalones
  Bermuda: 4, // Bermudas, shorts
};

// ID de la tienda de hombre (actualiza según tu BD)
const TIENDA_HOMBRE_ID = 1;

type ProductsProps = {
  seleccion: string;
  tiendaId?: number;
};

export const Products = ({
  seleccion,
  tiendaId = TIENDA_HOMBRE_ID,
}: ProductsProps) => {
  const [productos, setProductos] = useState<ProductoCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchProductos = async () => {
      const categoryId = CATEGORIA_IDS[seleccion];

      if (!categoryId) {
        setError(`Categoría "${seleccion}" no encontrada`);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await obtenerProductosConDetalles(tiendaId, categoryId);
        setProductos(data);
      } catch (err) {
        setError("Error al cargar los productos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [seleccion, tiendaId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className={isDarkMode ? "text-white" : "text-black"}>
            Cargando productos...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="flex justify-center items-center h-60">
        <p
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          No hay productos disponibles en esta categoría
        </p>
      </div>
    );
  }

  return <RenderImageCatalog ropa={productos} />;
};
