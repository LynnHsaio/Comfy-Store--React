import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function CartIcon() {
  return (
    <NavLink to="/cart">
      <BsCart3 />
    </NavLink>
  );
}
