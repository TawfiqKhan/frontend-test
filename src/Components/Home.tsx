import { useEffect, useState } from "react";
import "./Home.scss";
import bg from "../images/bg-main.png";
import Nav from "./Nav";
import ProductList from "./Products/ProductList";
import axios from "axios";

const Home = (): JSX.Element => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://main-api.fulhaus.com/fulhaus-tech-test/get-products"
    );
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <header className="header">
        <Nav />
        <img src={bg} className="main-img" alt="" />
      </header>
      <section className="intro-container">
        <div>
          <h2>Patio furniture</h2>
          <button className="button">SHOP</button>
        </div>
      </section>
      <section>
        {products.length ? <ProductList allProducts={products} /> : null}
      </section>
    </main>
  );
};

export default Home;
