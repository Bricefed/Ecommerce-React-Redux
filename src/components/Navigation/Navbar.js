import Btns from "./Btns";
import Items from "./Items";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Items />
      <Logo />
      <Btns />
    </nav>
  );
}
