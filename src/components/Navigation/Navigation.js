import { useState } from "react";
import Navbar from "./Navbar";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={menu ? "navigation open" : "navigation"}>
      <Navbar />
      <div
        className={menu ? "burger-menu open" : "burger-menu"}
        onClick={handleMenu}
      >
        <span></span>
      </div>
    </header>
  );
}
