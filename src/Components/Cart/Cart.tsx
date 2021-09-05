import "./Cart.scss";
import CartItem from "./CartItem";

const Cart = (): JSX.Element => {
  return (
    <div className="cart-container">
      <div className="box">
        <CartItem />
        <CartItem />
      </div>
      <div className="checkout">
        <div>
          <span>Total:</span> <span>$1800</span>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
