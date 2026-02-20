import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./views/Home";
import { Catalogo } from "./components/catalogo/Catalogo";
import { Prendas } from "./visualizadorPrendas/Prendas";
import { ProductsPage } from "./pages/ProductsPage";
import { Categoria } from "./lib/helpers/Category";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Personalizacion } from "./pages/Personalizacion";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { VerificarEmail } from "./pages/VerificarEmail";
import { RestablecerContrasena } from "./pages/RestablecerContrasena";
import { AIChatBubble } from "./components/AIChatBubble";

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="h-screen bg-[#f2f9f7]">
          <BrowserRouter>
            <Header />
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/verificar-email" element={<VerificarEmail />} />
              <Route path="/restablecer-contrasena" element={<RestablecerContrasena />} />
              
              {/* Rutas protegidas */}
              <Route path="/personalizacion" element={
                <ProtectedRoute>
                  <Personalizacion />
                </ProtectedRoute>
              } />
              <Route path="/catalogo" element={
                <ProtectedRoute>
                  <Catalogo />
                </ProtectedRoute>
              } />
              <Route path="/prendas" element={
                <ProtectedRoute>
                  <Prendas />
                </ProtectedRoute>
              } />
              <Route path="/catalogo/:sexo" element={
                <ProtectedRoute>
                  <Categoria />
                </ProtectedRoute>
              } />
              <Route path="/catalogo/:sexo/:tipo" element={
                <ProtectedRoute>
                  <ProductsPage />
                </ProtectedRoute>
              } />
            </Routes>
            <AIChatBubble />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};
