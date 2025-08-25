import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/cart", label: "Cart" },
  { path: "/checkout", label: "Checkout" },
  { path: "/orders", label: "Orders" },
];

export default function NavLinks() {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <NavLink to={link.path}>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  );
}
