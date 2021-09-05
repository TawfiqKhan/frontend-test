const CartItem = (): JSX.Element => {
  return (
    <div className="cart-product-container">
      <div className="cart-product-image">
        <img
          src="https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/ac/24/f0/5c/5cf024acea56bd0469a3e7f6/AD-1031-26.jpg"
          alt=""
        />
      </div>
      <div className="cart-product-summary">
        <div>
          <span>Ivey Outdoor Dining Table Medium</span>
          <span>MOE'S HOME COLLECTION CAN</span>
        </div>
        <span>$1383</span>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
