import CartWidget from "../../common/cartWidget/cartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navCont">
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dqdo89dpj/image/upload/v1729982385/ia2_wzlocu.png"
          alt="Logo"
        />
      </Link>

      <ul>
        <Link to="/category/hombre">HOMBRE</Link>
        <Link to="/category/mujer">MUJER</Link>
        <Link to="/category/niño">NIÑO</Link>
        <Link to="/category/oferta">OFERTA</Link>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
