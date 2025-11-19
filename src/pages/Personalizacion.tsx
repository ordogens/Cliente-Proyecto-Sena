import { Shirt, Upload, Type, Smile, WandSparkles } from "lucide-react";

export const Personalizacion = () => {
  return (
    <article className="h-[675px] bg-[#f2f9f7] flex">
      <section className="w-[30%] h-full  border-1 border-black flex flex-col">

        <section className="border-1 border-black w-full h-[3rem] flex justify-between items-center p-2">
          <Shirt color="black"  size={30}/>
          <Upload color="black" size={30}/>
          <Type color="black"   size={30}/>
          <Smile color="black"  size={30}/>
          <WandSparkles color="black" size={30}/>
        </section>

      </section>
      <section className="w-[70%] h-full  border-1 border-black">

      </section>
    </article>
  );
};
