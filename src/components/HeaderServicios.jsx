import { Link } from "react-router-dom";
import logo2 from "../assets/Imagenes/LOGO_360.jpg";

export default function HeaderServicios() {
  return (
<header className="header">

        <div className="header__logo">
            <img src={logo2} alt="Logo 360" className="logo" />
        </div>

       
        <div className="header__navigation ">
            <nav role="navigation" aria-label="Menú principal">
                <Link to="/">Home</Link>
                <Link to="/servicios">Servicios</Link>
            </nav>
        </div>
        <div className="header__actions"> {/* Icono Carrito (Usa Map en JS) --*/}

            <button className="action-btn" id="btn-cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge hidden" id="badge-cart">0</span>
            </button>
        </div>
    </header>
    );
}