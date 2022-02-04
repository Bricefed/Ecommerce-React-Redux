import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Btns() {
  const state = useSelector((state) => state.addItem);

  return (
    <div className="btns-header">
      <a href="#!" className="login">
        Connexion
      </a>
      <a href="#!" className="signup">
        Inscription
      </a>
      <NavLink to="/cart" className="cart">
        Panier ({state.length})
      </NavLink>
    </div>
  );
}
