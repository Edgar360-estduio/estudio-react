 
 
import { Link } from "react-router-dom";
import logo from "../assets/Imagenes/LOGO_360.jpg";
import "../styles/headerServicios.css";

export default function HeaderServicios() {
  return (
    <header className="header header--servicios">

      {/* Logo */}
      <div className="header__logo">
        <img src={logo} alt="Logo 360" className="logo" />
      </div>

      {/* Navegación */}
      <nav className="header__navigation" role="navigation" aria-label="Menú principal">
        <Link to="/">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Acciones */}
      <div className="header__actions">
        {/* Icono Carrito */}
        <button className="action-btn" id="btn-cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="badge hidden" id="badge-cart">0</span>
        </button>
      </div>

    </header>
  );
}