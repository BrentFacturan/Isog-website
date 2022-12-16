import Footer from "../componentsforindex/Footer";
import About from "../componentsforindex/About";
import Contact from "../componentsforindex/Contact";
import Home from "../componentsforindex/Home";
import Navigation from "../componentsforindex/Navigation";
import Product from "../componentsforindex/Product";
import Aboutext from "../componentsforindex/Aboutext";

export default function Indexpage() {
  return (
  <div>
    <Navigation />
    <Home />
    <Product />
    <About />
    <Aboutext />
    <Contact />
    <Footer />
    

  </div>
  );
}
