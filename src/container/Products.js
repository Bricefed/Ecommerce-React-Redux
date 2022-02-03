import React from "react";
import Listing from "../components/Product/Listing";

export default function Product() {
  return (
    <div className="products-container">
      <h2 className="tac underline">Nos Produits</h2>
      <Listing />
    </div>
  );
}
