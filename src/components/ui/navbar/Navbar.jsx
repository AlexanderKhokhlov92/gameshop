import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/catalog">Каталог</Link>
        </li>
        <li>
          <Link to="/cart">Корзина</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
