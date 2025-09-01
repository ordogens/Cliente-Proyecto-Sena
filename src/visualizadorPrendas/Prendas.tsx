import { useState } from "react";
import camisa from "../assets/camisa.png";
import atras from "../assets/atras.png";
import adelante from "../assets/camisann.png";

const imagenes: string[] = [  camisa, atras, adelante];

export const Prendas = () => {
     const [selectedImage, setSelectedImage] = useState<string>(imagenes[0]);
    
  
  return (
    <div className="bg-[#f2f9f7] h-168 flex">
        
      <section className="w-1/2 h-168 flex justify-center pt-15 gap-1">
        <article className="w-15 h-100 rounded-lg flex flex-col gap-1">
         {imagenes.map((imagen,idx) => (
           <img key={idx}
           src={imagen}
           className="rounded-lg cursor-pointer"
           onClick={() => setSelectedImage(imagen)}/>
         ))}
        </article>

        <article className="w-100 ">
          <img src={selectedImage} 
          alt="selected" 
          className="rounded-lg"/>
        </article>
      </section>
      <section className="w-1/2 h-168">

      </section>
    </div>
  );
};
