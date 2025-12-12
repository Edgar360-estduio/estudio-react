import logo from "../assets/Imagenes/LOGO_360_transparente.png";
import "../styles/global.css";


export default function HeaderHome() {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <img src={logo} alt="Logo 360" className="logo" />
        </div>

        <nav className="header__navegacion">
          <a href="#">Home</a>
          <a href="/Servicios">Servicios</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}