import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./container/Home";
import About from "./container/About";
import Products from "./container/Products";
import Contact from "./container/Contact";
import SingleProduct from "./container/SingleProduct";
import Cart from "./container/Cart";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
