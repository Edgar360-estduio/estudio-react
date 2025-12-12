import "./styles/global.css";
import Header from "./components/HeaderHome";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>

      <footer>
        <p>&copy; 2024 Actividad Educativa</p>
      </footer>
    </>
  );
}
