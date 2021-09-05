import "./ProductList.scss";
import ProductListItem from "./ProductListItem";
import { Product } from "../../interface/Product";

type Props = {
  allProducts: Array<Product>;
  addItem(item: any): void;
};

const ProductList = ({ allProducts, addItem }: Props): JSX.Element => {
  const productsTodisplay = allProducts.map((product) => (
    <ProductListItem
      key={product._id}
      id={product._id}
      title={product.itemName}
      image={product.itemLink}
      brand={product.vendorName}
      price={product.MSRP}
      addItem={addItem}
    />
  ));
  return <section className="productsContainer">{productsTodisplay}</section>;
};

export default ProductList;
