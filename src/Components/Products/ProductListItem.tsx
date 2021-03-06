interface Props {
  id: string;
  title: string;
  image: string;
  brand: string;
  price: number;
  addItem(item: string): void;
}

const ProductListItem: React.FC<Props> = ({
  id,
  title,
  image,
  brand,
  price,
  addItem,
}): JSX.Element => {
  const handeClick = (): void => {
    addItem(id);
  };
  return (
    <div className="product">
      <img className="product-img" src={image} alt="" />
      <div className="product-desc">
        <div>
          <h3>{title.toLowerCase()}</h3>
          <span>{brand}</span>
        </div>
        <div>
          <button onClick={handeClick}>+Add to Cart</button>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
