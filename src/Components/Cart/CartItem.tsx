interface Props {
  id: string;
  title: string;
  image: string;
  brand: string;
  price: number;
  removeItem(id: string): void;
}

const CartItem = ({
  id,
  title,
  image,
  brand,
  price,
  removeItem,
}: Props): JSX.Element => {
  const handeClick = (): void => {
    removeItem(id);
  };
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
      <button onClick={handeClick}>X</button>
    </div>
  );
};

export default CartItem;
