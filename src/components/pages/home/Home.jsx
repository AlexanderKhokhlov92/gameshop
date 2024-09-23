import MainSlider from "../../ui/sliders/MainSlider/MainSlider";
import BigSlider from "../../ui/sliders/BigSlider/BigSlider";
import styles from "./Home.module.scss";
import Navbar from "../../ui/navbar/Navbar";
import BestSellers from "../../bestSellers/BestSellers";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <MainSlider />
      <h2 className={styles.home__title}>Лидеры продаж</h2>
      <BestSellers />

      <BigSlider />
    </div>
  );
};

export default Home;
