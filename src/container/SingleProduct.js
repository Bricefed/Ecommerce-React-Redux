import { useState } from "react";
import { useParams } from "react-router";
import { data } from "../components/Product/data";

export default function SingleProduct() {
  const [cartBtn, setCartBtn] = useState("Ajouter au panier");

  const productId = useParams();
  const productDetail = data.filter((item) => item.id == productId.id);
  const product = productDetail[0];

  const handleCart = (product) => {
    if (cartBtn == "Ajouter au panier") setCartBtn("Retirer du panier");
    else setCartBtn("Ajouter au panier");
  };

  return (
    <div className="product-container">
      <div className="img-box">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="infos-content">
        <h2 className="underline">{product.title}</h2>
        <h3>{product.price} €</h3>
        <p>{product.desc}</p>
        <button className="btn" onClick={() => handleCart(product)}>
          {cartBtn}
        </button>
      </div>
    </div>
  );
}
