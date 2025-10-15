import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./views/Home";
import { Catalogo } from "./components/catalogo/Catalogo";
// import { Prendas } from "./visualizadorPrendas/Prendas";
import { ProductsPage } from "./pages/ProductsPage";
import { Categoria } from "./lib/helpers/Category";
import { ThemeProvider } from "./contexts/ThemeContext";

export const App = () => {
  return (
    <ThemeProvider>
      <div className="h-screen bg-[#f2f9f7]">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            
            <Route path="/catalogo/:sexo" element={<Categoria />} />
            <Route path="/catalogo/:sexo/:tipo" element={<ProductsPage />} />

          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};
