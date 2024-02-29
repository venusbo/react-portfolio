import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Portfolio">Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section id="Contact">Contact</section>
    </div>;


}

export default App
