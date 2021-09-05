import { useEffect, useState } from "react";
import "./Cart.scss";
import CartItem from "./CartItem";
import { Product } from "../../interface/Product";

type Props = {
  allItems: Array<Product>;
  toggleCart: () => void;
  removeItem(id: string): void;
  clearCart: () => void;
};

const Cart = ({
  allItems,
  toggleCart,
  removeItem,
  clearCart,
}: Props): JSX.Element => {
  const [totalPrice, setTotalPrice] = useState<Number>(0);

  useEffect(() => {
    if (allItems.length) {
      let count = 0;
      for (let item of allItems) {
        count += item.MSRP;
      }
      setTotalPrice(count);
    }
  }, [allItems]);

  const allCartItems = allItems.map((item) => (
    <CartItem
      key={item._id}
      id={item._id}
      title={item.itemName}
      image={item.itemLink}
      brand={item.vendorName}
      price={item.MSRP}
      removeItem={removeItem}
    />
  ));
  return (
    <div className="cart-container">
      <div className="box">
        {allItems.length ? (
          allCartItems
        ) : (
          <div className="message">
            <h2>Nothing on Cart Add Item</h2>
            <button onClick={toggleCart}>Add Item</button>
          </div>
        )}
      </div>
      {allItems.length ? (
        <div className="checkout">
          <div>
            <span>Total:</span> <span>${totalPrice}</span>
          </div>
          <button onClick={clearCart}>Check Out</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
