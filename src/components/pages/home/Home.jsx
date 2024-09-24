import { Link } from "react-router-dom";
import MainSlider from "../../ui/sliders/MainSlider/MainSlider";
import styles from "./Home.module.scss";
import Navbar from "../../ui/navbar/Navbar";
import BestSellers from "../../bestSellers/BestSellers";
import PsPlusOffers from "../../psPlusOffers/PsPlusOffers";
import NewGames from "../../newGames/NewGames";
import PreOrders from "../../preOrders/PreOrders";
import { useSelector } from "react-redux";

const Home = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Получаем количество товаров в корзине

  return (
    <div className={styles.home}>
      <Navbar />
      <MainSlider />
      <h2 className={styles.home__title}>Лидеры продаж</h2>
      <BestSellers />
      <PsPlusOffers />
      <NewGames />
      <PreOrders />

      {totalQuantity > 0 && (
        <div className={styles.home__orderWrapper}>
          <Link className={styles.home__cartLink} to="/cart">
            Перейти в корзину
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
