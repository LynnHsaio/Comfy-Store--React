import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <h1>We are changing the way people shop</h1>
      <NavLink to="/products">Our Products</NavLink>
    </div>
  );
}
