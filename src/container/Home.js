import React from "react";
import Slider from "../components/Slider/Slider";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home-container">
      <Slider />
      <Product />
    </div>
  );
}
