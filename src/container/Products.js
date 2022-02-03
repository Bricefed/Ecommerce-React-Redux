import React from "react";
import Listing from "../components/Product/Listing";

export default function Product() {
  return (
    <div className="products-container">
      <h1 className="tac underline">Nos Produits</h1>
      <Listing />
    </div>
  );
}
