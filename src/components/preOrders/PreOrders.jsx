import styles from "./preOrders.module.scss";
import { useGames } from "../../contexts/GameContext";
import SmallSlider from "../ui/sliders/SmallSlider/SmallSlider";

const PreOrders = () => {
  const games = useGames();

  return (
    <div className={styles.preOrders}>
      <h2 className={styles.preOrders__title}>Предзаказы</h2>
      <SmallSlider to="game" slides={games} />
    </div>
  );
};

export default PreOrders;
