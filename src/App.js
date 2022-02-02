import Navigation from "./components/Navigation/Navigation";
// import Footer from "./components/Footer";
import Home from "./container/Home";
import About from "./container/About";
import Product from "./container/Product";
import Contact from "./container/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
