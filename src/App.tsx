import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Header} from './Header'
import {Home} from './home/Home'
import {Hombre} from './Hombre/Hombre'
import {Mujer} from './Mujer/Mujer'

export const App = () =>{
  return (
    <div className="bg-gray-400 h-screen">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hombre" element={<Hombre />} />
        <Route path="/Mujer" element={<Mujer />} />
      </Routes>
      </BrowserRouter>     
    </div>
  );
}


