import "./Nav.scss";

const Nav = (): JSX.Element => {
  return (
    <nav className="nav">
      <a href="/">Fülhaus Shop</a>
      <button className="button">CART</button>
    </nav>
  );
};

export default Nav;
