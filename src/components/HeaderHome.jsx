import { Link } from "react-router-dom";
import logo from "../assets/Imagenes/LOGO_360_tranaparente.png";

export default function HeaderHome() {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <img src={logo} alt="Logo 360" className="logo" />
        </div>

        <nav className="header__navegacion">
          <Link to="/">Home</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portafolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}