import PropTypes from "prop-types";
import styles from "./Game.module.scss";

const Game = (props) => {
  return (
    <div className={styles.game}>
      <h3 className={styles.game__title}>{props.title}</h3>
      <div className={styles.game__imageWarpper}>
        <img
          src={props.image}
          alt={props.title}
          className={styles.game__image}
        />
      </div>
      <div className={styles.game__priceWrapper}>
        <p className={styles.game__price}>{props.price} ₽</p>
        <p className={styles.game__discount}>-{props.discount}%</p>
      </div>
    </div>
  );
};

// Валидация пропсов
Game.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  twoPlayers: PropTypes.bool.isRequired,
  eaSubscription: PropTypes.bool.isRequired,
  ps5Subscription: PropTypes.bool.isRequired,
};

export default Game;
