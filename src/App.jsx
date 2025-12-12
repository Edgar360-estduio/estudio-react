import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

import bg from "./assets/Imagenes/SESION_IMG_(38).jpg"; // ← importa tu imagen


export default function App() {
  return (
    <>
      <Header />
      <main
      style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          paddingTop: "80px",
        }}
      >
        <Hero />
      </main>

      <footer>
        <p>&copy; 2024 Actividad Educativa</p>
      </footer>
    </>
  );
}
