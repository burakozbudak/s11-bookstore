import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";
import { ScNav } from "./scParts";

const Navigation = () => {
  const { cart } = useContext(CartContext);

  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
