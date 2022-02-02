import { NavLink } from "react-router-dom";

export default function Items() {
  return (
    <ul>
      <li>
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li>
        <NavLink to="/products">Produits</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}
