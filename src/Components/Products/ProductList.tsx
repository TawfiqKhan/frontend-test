import "./ProductList.scss";
import ProductListItem from "./ProductListItem";

interface Product {
  _id: string;
  itemName: string;
  itemLink: string;
  vendorName: string;
  MSRP: number;
}
type Props = {
  allProducts: Array<Product>;
};

const ProductList = ({ allProducts }: Props): JSX.Element => {
  console.log(allProducts);
  const productsTodisplay = allProducts.map((product) => (
    <ProductListItem
      key={product._id}
      title={product.itemName}
      image={product.itemLink}
      brand={product.vendorName}
      price={product.MSRP}
    />
  ));
  return <section className="productsContainer">{productsTodisplay}</section>;
};

export default ProductList;
