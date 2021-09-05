import "./Nav.scss";

const Nav = (): JSX.Element => {
  const toggleCart = () => {
    console.log("clicked");
  };
  return (
    <nav className="nav">
      <a href="/">Fülhaus Shop</a>
      <button onClick={toggleCart} className="button">
        CART
      </button>
    </nav>
  );
};

export default Nav;
