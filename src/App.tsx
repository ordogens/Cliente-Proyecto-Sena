import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./home/Home";
import { Catalogo } from "./catalogo/Catalogo";
import { Hombre } from "./Hombre/Hombre";
import { Prendas } from "./visualizadorPrendas/Prendas";
import { Mujer } from "./Mujer/Mujer";

export const App = () => {
  return (
    <div className="bg-gray-400 h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/hombre" element={<Hombre />} />
          <Route path="/catalogo/mujer" element={<Mujer/>}/>
          <Route path="prendas" element={<Prendas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
