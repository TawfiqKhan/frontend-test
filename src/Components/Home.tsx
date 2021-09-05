import { useEffect, useState } from "react";
import "./Home.scss";
import bg from "../images/bg-main.png";
import Nav from "./Nav";
import Cart from "./Cart/Cart";
import ProductList from "./Products/ProductList";
import { Product } from "../interface/Product";
import axios from "axios";

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

  const addItem = (id: any): void => {
    const productToAdd = products.filter((product) => product._id === id)[0];
    const updatedItems = [...cart, productToAdd];
    setCart(updatedItems);
  };

  const removeItem = (id: string): void => {
    const updatedCart = cart.filter((product) => product._id !== id);
    setCart(updatedCart);
  };

  const clearCart = (): void => {
    setCart([]);
    setShowCart(false);
  };

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
          <Cart
            allItems={cart}
            toggleCart={toggleCart}
            removeItem={removeItem}
            clearCart={clearCart}
          />
        </section>
      </header>
      <section className="products-parent-container">
        {products.length ? (
          <ProductList allProducts={products} addItem={addItem} />
        ) : null}
      </section>
    </main>
  );
};

export default Home;
