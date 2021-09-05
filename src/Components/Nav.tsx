import "./Nav.scss";

const Nav = ({ toggleCart }: any): JSX.Element => {
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
