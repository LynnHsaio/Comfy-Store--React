import CartIcon from "./CartIcon";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToogle from "./ThemeToogle";

export default function Navbar() {
  return (
    <nav>
      <Logo />

      <NavLinks />

      <span>
        <ThemeToogle />
        <CartIcon />
      </span>
    </nav>
  );
}
