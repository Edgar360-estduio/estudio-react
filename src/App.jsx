import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderHome from "./components/HeaderHome";
import HeaderServicios from "./components/HeaderServicios";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página Home */}
        <Route 
          path="/" 
          element={
            <>
              <HeaderHome />
              <Home />
            </>
          } 
        />

        {/* Página Servicios */}
        <Route 
          path="/servicios" 
          element={
            <>
              <HeaderServicios />
              <Servicios />
            </>
          } 
        />

      </Routes>
      <Footer />
   </BrowserRouter>
  );
}
