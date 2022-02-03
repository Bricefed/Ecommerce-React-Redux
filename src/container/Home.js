import React from "react";
import Slider from "../components/Slider/Slider";
import Products from "./Products";

export default function Home() {
  return (
    <div className="home-container">
      <Slider />
      <Products />
    </div>
  );
}
