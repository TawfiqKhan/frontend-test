type Props = {
  name: string;
};

const ProductListItem = ({ name }: Props): JSX.Element => {
  return (
    <div className="product">
      <h4>{name}</h4>
    </div>
  );
};

export default ProductListItem;
