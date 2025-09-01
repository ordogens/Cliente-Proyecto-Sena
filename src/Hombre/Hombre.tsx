import { imagenes } from "./imagenesPrendasHombre";

export const Hombre = () => {
  return (
    <div className=" h-171 bg-[#f2f9f7] ">
      <h1 className="font-mono text-[30px] text-center">Ropa de hombre</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6 bg-[#f2f9f7]">
        {imagenes.map((img) => (
          <div key={img.id} className="flex m-4 justify-center">
            <div className="flex flex-col w-60">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.imagen}
                  alt={`Camisa ${img.id}`}
                  className="w-60 h-80 object-cover rounded-lg shadow-md transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex justify-between">
                <p className="text-gray-800">{img.titulo}</p>
                <p className="text-green-800">{img.precio}</p>
              </div>
              <p className="text-sm text-gray-500 break-words">
                {img.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
