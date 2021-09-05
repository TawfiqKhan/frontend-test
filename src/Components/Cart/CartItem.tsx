interface Props {
  id: string;
  title: string;
  image: string;
  brand: string;
  price: number;
}

const CartItem = ({ id, title, image, brand, price }: Props): JSX.Element => {
  return (
    <div className="cart-product-container">
      <div className="cart-product-image">
        <img src={image} alt="" />
      </div>
      <div className="cart-product-summary">
        <div>
          <span>{title}</span>
          <span>{brand}</span>
        </div>
        <span>${price}</span>
      </div>
      <hr />
      <button>X</button>
    </div>
  );
};

export default CartItem;
