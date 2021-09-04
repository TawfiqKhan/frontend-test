interface Props {
  title: string;
  image: string;
  brand: string;
  price: number;
}

const ProductListItem: React.FC<Props> = ({
  title,
  image,
  brand,
  price,
}): JSX.Element => {
  return (
    <div className="product">
      <img className="product-img" src={image} alt="" />
      <div className="product-desc">
        <div>
          <h3>{title.toLowerCase()}</h3>
          <span>{brand}</span>
        </div>
        <div>
          <button>+Add to Cart</button>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
