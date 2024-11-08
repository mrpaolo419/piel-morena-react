import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Badge badgeContent={cart.length} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
