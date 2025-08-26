import { NavLink } from "react-router-dom";
import Gallery from "../../ui/Gallery";

export default function Hero() {
  return (
    <div>
      <div>
        <h1>We are changing the way people shop</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div>
          <NavLink to="/products">Our Products</NavLink>
        </div>
      </div>
      <div style={{ width: "50%", height: "20rem" }}>
        <Gallery />
      </div>
    </div>
  );
}
