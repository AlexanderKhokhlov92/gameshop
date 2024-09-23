import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <Link className={styles.navbar__searchLink} to="/catalog">
            <FiSearch className={styles.navbar__searchLinkIcon} />
            <p className={styles.navbar__searchLinkDescription}>
              Поиск игры в каталоге
            </p>
          </Link>
        </li>
        <li>
          <Link className={styles.navbar__cartLink} to="/cart">
            <FiShoppingCart className={styles.navbar__cartLinkIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
