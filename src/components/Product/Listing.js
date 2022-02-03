import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../Product/data";

export default function Listing() {
  const card = (item) => {
    return (
      <div className="card" key={item.id}>
        <img src={item.img} alt="Produit" />
        <div className="card-body">
          <h4 className="title">{item.title}</h4>
          <p className="price">{item.price} €</p>
          <NavLink to={`/products/${item.id}`} className="btn-buy">
            Plus d'info
          </NavLink>
        </div>
      </div>
    );
  };

  return <div className="listing-products">{data.map(card)}</div>;
}
