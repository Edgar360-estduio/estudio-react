import "../styles/global.css";
import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";



export default function Home() {
  return (
    <>
      <HeaderHome />

      <section className="hero-title">
        <h1>Estudio 360</h1>
        <p>"Revive tu momento"</p>
      </section>
    </>
  );
}