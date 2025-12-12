import logo from "../assets/Imagenes/LOGO_360.png";

export default function HeaderServicios() {
  return (
<header className="header">

        <div className="header__logo">
            <img src={logo} alt="Logo 360" className="logo" />
        </div>

       
        <div className="header__navigation ">
            <nav role="navigation" aria-label="Menú principal">
                <a href="Home.html">Home</a>
                <a href="#servicios">Servicios</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
        <div className="header__actions"> //-- Icono Carrito (Usa Map en JS) --

            <button className="action-btn" id="btn-cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge hidden" id="badge-cart">0</span>
            </button>
        </div>
    </header>
    );
}