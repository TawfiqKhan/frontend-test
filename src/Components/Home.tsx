import { useEffect, useState } from "react";
import "./Home.scss";
import bg from "../images/bg-main.png";
import Nav from "./Nav";
import Cart from "./Cart/Cart";
import ProductList from "./Products/ProductList";
import axios from "axios";

interface Product {
  title: string;
  image: string;
  brand: string;
  price: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Array<any>>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState<Boolean>(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://main-api.fulhaus.com/fulhaus-tech-test/get-products"
    );
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (id: any): void => {
    const productToAdd = products.filter((product) => product._id === id)[0];
    const updatedItems = [...cart, productToAdd];
    setCart(updatedItems);
  };
  // style={{ marginRight: showCart ? "0" : "2%" }}
  return (
    <main>
      <Nav toggleCart={toggleCart} />
      <header className="header">
        <div className="main-img-container">
          <img src={bg} className="main-img" alt="" />
        </div>
        <div className="intro-container">
          <h2>Patio furniture</h2>
          <button className="button">SHOP</button>
        </div>
        <section className={!showCart ? "hide" : "cart-parent-container"}>
          <Cart />
        </section>
      </header>
      <section className="products-parent-container">
        {products.length ? (
          <ProductList allProducts={products} addToCart={addToCart} />
        ) : null}
      </section>
    </main>
  );
};

export default Home;
