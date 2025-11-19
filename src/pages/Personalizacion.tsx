import { Shirt, Upload, Type, Smile, WandSparkles } from "lucide-react";

export const Personalizacion = () => {
  return (
    <article className="h-[675px] bg-[#f2f9f7] flex">
      <section className="w-[30%] h-full  border-1 border-black flex flex-col">
        <section className="border-1 border-black w-full h-[3rem] flex justify-between items-center p-2">
          <Shirt color="black" size={30} className="cursor-pointer" />
          <Upload color="black" size={30} className="cursor-pointer" />
          <Type color="black" size={30} className="cursor-pointer" />
          <Smile color="black" size={30} className="cursor-pointer" />
          <WandSparkles color="black" size={30} className="cursor-pointer" />
        </section>
      </section>

      <section className="w-[70%] h-full  border-1 border-black flex flex-col items-center gap-5 ">
        <section className="  w-full h-[7%] flex justify-center gap-4 items-center">
          <p className="text-black font-bold cursor-pointer text-sm">
            Impresión frontal
          </p>
          <p className="text-black font-bold cursor-pointer text-sm">
            Impresión trasera
          </p>
          <p className="text-black font-bold cursor-pointer text-sm">
            Manga izquierda
          </p>
          <p className="text-black font-bold cursor-pointer text-sm">
            Manga derecha
          </p>
        </section>
        <section className=" border-1 border-black w-[90%] h-[80%] rounded-sm"></section>

        <section className=" w-full h-[7%] flex pl-3 justify-between">
          <button className=" cursor-pointer  text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Guardar diseño
          </button>

          <section className="flex pr-3">
          <button className="text-black cursor-pointer  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Añadir al carrito
          </button>
          <div className=" w-[6rem] h-[2.5rem] rounded-sm bg-[#cccc] border-1 justify-center flex items-center"><p className="text-black font-bold">$12.00</p></div>
          </section>
        </section>
      </section>
    </article>
  );
};
