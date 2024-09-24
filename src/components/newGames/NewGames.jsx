import styles from "./NewGames.module.scss";
import BigSlider from "../ui/sliders/BigSlider/BigSlider";
import { useGames } from "../../contexts/GameContext";

const NewGames = () => {
  const games = useGames();
  return (
    <div className={styles.newGames}>
      <div className={styles.newGames__titleWrapper}>
        <p className={styles.newGames__titleNew}></p>
        <h2 className={styles.newGames__title}>Новинки</h2>
      </div>

      <BigSlider to="game" slides={games} />
    </div>
  );
};

export default NewGames;
