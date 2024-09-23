import MainSlider from "../../ui/sliders/MainSlider/MainSlider";
import SmallSlider from "../../ui/sliders/SmallSlider/SmallSlider";
import BigSlider from "../../ui/sliders/BigSlider/BigSlider";
import styles from "./Home.module.scss";
import Navbar from "../../ui/navbar/Navbar";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <MainSlider />
      <SmallSlider />
      <BigSlider />
    </div>
  );
};

export default Home;
