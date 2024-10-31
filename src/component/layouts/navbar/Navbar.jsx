import CartWidget from "../../common/cartWidget/cartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navCont">
      <img
        className="logo"
        src="https://res.cloudinary.com/dqdo89dpj/image/upload/v1729982385/ia2_wzlocu.png"
        alt=""
      />

      <ul>
        <li>hombre</li>
        <li>mujer</li>
        <li>niño</li>
        <li>OFERTA</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
