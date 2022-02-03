import { useParams } from "react-router";
import { data } from "../components/Product/data";

export default function SingleProduct() {
  const productId = useParams();
  const productDetail = data.filter((item) => item.id == productId.id);
  const product = productDetail[0];

  return (
    <div className="product-container">
      <div className="img-box">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="infos-content">
        <h2 className="underline">{product.title}</h2>
        <h3>{product.price} €</h3>
        <p>{product.desc}</p>
        <button className="btn">Ajouter au panier</button>
      </div>
    </div>
  );
}
