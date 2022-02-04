import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from "../redux/actions";

export default function Cart() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="list-product" key={cartItem.id}>
        <img src={cartItem.img} alt={cartItem.title} />
        <div className="infos-content">
          <h3>{cartItem.title}</h3>
          <p>{cartItem.price} €</p>
        </div>
        <button onClick={() => handleRemoveCart(cartItem)}>X</button>
      </div>
    );
  };

  const emptyCart = () => <h3 className="empty-cart">Votre panier est vide</h3>;

  const payment = () => {
    return (
      <div className="payment-container">
        <NavLink to="/checkout" className="btn">
          Valider la commande
        </NavLink>
      </div>
    );
  };

  return (
    <div className="cart-container">
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && payment()}
    </div>
  );
}
