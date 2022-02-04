import { useSelector } from "react-redux";

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
      <a href="#!" className="cart">
        Panier ({state.length})
      </a>
    </div>
  );
}
