import { useSelector } from "react-redux";

export default function Checkout() {
  const state = useSelector((state) => state.addItem);

  let total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li key={item.id}>
        <h6>{item.title}</h6>
        <span>{item.price} €</span>
      </li>
    );
  };
  return (
    <div className="checkout-container">
      <h2 className="underline">
        Votre panier <span className="badge">{state.length}</span>
      </h2>
      <h3>Liste des produits :</h3>
      <ul>
        {state.map(itemList)}
        <li>
          <h6>Total</h6>
          <span>{total} €</span>
        </li>
      </ul>
    </div>
  );
}
