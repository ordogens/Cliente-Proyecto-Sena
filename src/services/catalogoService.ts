import axios from 'axios';

const API_URL = 'http://localhost:1010/api/catalogo';

// Tipos para la respuesta del API
export interface ProductoAPI {
  id: number;
  producto: string;
  descripcion: string;
  imagen: string;
  category_id: number;
  tienda_id: number;
  categoria: string;
  tienda: string;
  variante_id: number | null;
  talla: string | null;
  color: string | null;
  stock: number | null;
  precio: number | null;
  created_at: string;
  updated_at: string;
}

// Tipo adaptado para el componente RenderImageCatalog
export interface ProductoCard {
  id: number;
  imagen: string;
  titulo: string;
  precio: string;
  descripcion: string;
  variantes?: {
    id: number;
    talla: string;
    color: string;
    stock: number;
    precio: number;
  }[];
}

export interface Categoria {
  id: number;
  name: string;
  tienda_id: number;
}

export interface Tienda {
  id: number;
  nombre: string;
}

// Obtener productos con detalles (incluye categoría, tienda y variantes)
export const obtenerProductosConDetalles = async (
  tiendaId: number,
  categoryId: number
): Promise<ProductoCard[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/productos/obtenerProductosConDetalles/${tiendaId}/${categoryId}`
    );

    const productosAPI: ProductoAPI[] = response.data.data;

    // Agrupar variantes por producto
    const productosAgrupados = productosAPI.reduce((acc, item) => {
      const existente = acc.find((p) => p.id === item.id);

      if (existente) {
        // Si el producto ya existe, agregar la variante
        if (item.variante_id) {
          existente.variantes?.push({
            id: item.variante_id,
            talla: item.talla || '',
            color: item.color || '',
            stock: item.stock || 0,
            precio: item.precio || 0,
          });
        }
      } else {
        // Si es un producto nuevo, crearlo
        const nuevoProducto: ProductoCard = {
          id: item.id,
          imagen: item.imagen,
          titulo: item.producto,
          descripcion: item.descripcion,
          precio: item.precio ? `$${item.precio.toLocaleString()}` : 'Sin precio',
          variantes: item.variante_id
            ? [
                {
                  id: item.variante_id,
                  talla: item.talla || '',
                  color: item.color || '',
                  stock: item.stock || 0,
                  precio: item.precio || 0,
                },
              ]
            : [],
        };
        acc.push(nuevoProducto);
      }

      return acc;
    }, [] as ProductoCard[]);

    return productosAgrupados;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

// Obtener todos los productos de una tienda
export const obtenerProductosPorTienda = async (
  tiendaId: number
): Promise<ProductoCard[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/productos/obtenerProductosPorTienda/${tiendaId}`
    );

    const productosAPI: ProductoAPI[] = response.data.data;

    return productosAPI.map((item) => ({
      id: item.id,
      imagen: item.imagen,
      titulo: item.producto,
      descripcion: item.descripcion,
      precio: item.precio ? `$${item.precio.toLocaleString()}` : 'Sin precio',
    }));
  } catch (error) {
    console.error('Error al obtener productos por tienda:', error);
    throw error;
  }
};

// Obtener todas las categorías
export const obtenerCategorias = async (): Promise<Categoria[]> => {
  try {
    const response = await axios.get(`${API_URL}/catalogo/obtenerCategorias`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
};

// Obtener todas las tiendas
export const obtenerTiendas = async (): Promise<Tienda[]> => {
  try {
    const response = await axios.get(`${API_URL}/tienda/obtenerTiendas`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener tiendas:', error);
    throw error;
  }
};

// Obtener todo (tiendas, categorías, productos) en paralelo
export const obtenerTodoCatalogo = async () => {
  try {
    const [tiendas, categorias] = await Promise.all([
      obtenerTiendas(),
      obtenerCategorias(),
    ]);

    return { tiendas, categorias };
  } catch (error) {
    console.error('Error al obtener catálogo completo:', error);
    throw error;
  }
};
