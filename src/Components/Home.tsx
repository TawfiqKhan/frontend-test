import bg from "../images/bg-main.png";
import Nav from "./Nav";
import "./Home.scss";

const Home = (): JSX.Element => {
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
    </main>
  );
};

export default Home;
