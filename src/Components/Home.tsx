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
    </main>
  );
};

export default Home;
