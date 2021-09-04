import "./ProductList.scss";
import ProductListItem from "./ProductListItem";

interface Product {
  category: string;
  percentage: number;
}
type Props = {
  allProducts: Array<Product>;
};

const ProductList = ({ allProducts }: Props): JSX.Element => {
  const productsTodisplay = allProducts.map((product: any) => (
    <ProductListItem key={product._id} name={product.itemName} />
  ));
  return <section className="productsContainer">{productsTodisplay}</section>;
};

export default ProductList;
