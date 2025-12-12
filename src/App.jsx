import "./styles/global.css";
import Header from "./components/HeaderHome";
import Hero from "./components/Hero";

import Home from "./pages/Home";
import Servicios from "./pages/Servicio";




export default function App() {
  return (
        <BrowserRouter>
   
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        
        
      </Routes>

      <footer>
        <p>&copy; 2024 Actividad Educativa</p>
      </footer>
   </BrowserRouter>
  );
}
