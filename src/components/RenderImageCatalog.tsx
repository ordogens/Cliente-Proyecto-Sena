interface Image {
    id: number;
    imagen: string;
    titulo: string;
    precio: string;
    descripcion: string;
}

export const RenderImageCatalog = ({ ropa  }: { ropa: Image[] }) => {
  return (
    <>
      <div className="grid grid-cols-4 mt-6 gap-4 bg-[#f2f9f7]">
        {ropa.map((img: Image) => (
          <div key={img.id} className="flex mb-6 justify-center">
            <div className="flex flex-col w-60 h-[380px] shadow-2xl bg-[#f2f9f7] rounded-lg">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={img.imagen}
                  alt={`Camisa ${img.id}`}
                  className="w-60 h-80 object-cover rounded-t-lg shadow-md transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex justify-around">
                <p className="font-medium text-gray-800">{img.titulo}</p>
                <p className="font-medium text-green-800">{img.precio}</p>
              </div>
              <p className="font-bold text-lg text-gray-800 flex justify-start pl-4 break-words">
                {img.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
