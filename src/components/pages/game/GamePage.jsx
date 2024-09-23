import { useParams, Link } from "react-router-dom";
import { useGames } from "../../../contexts/GameContext";
import { useDispatch, useSelector } from "react-redux"; // Импортируем useSelector
import { addItemToCart } from "../../../redux/cartSlice";
import styles from "./GamePage.module.scss";

const GamePage = () => {
  const { id } = useParams(); // Используем id из useParams
  const games = useGames();
  const game = games.find((game) => game.id === parseInt(id));
  const dispatch = useDispatch(); // Инициализируем dispatch

  // Получаем состояние корзины
  const cartItems = useSelector((state) => state.cart.items);

  // Проверяем, есть ли игра уже в корзине
  const isGameInCart = cartItems.some((item) => item.id === game?.id);

  if (!game) {
    return <div>Игра не найдена</div>;
  }

  // Функция для добавления игры в корзину
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: game.id,
        name: game.title,
        price: game.price,
        image: game.image,
      })
    );
  };

  return (
    <div className={styles.game}>
      <div className={styles.game__imageWarpper}>
        <img src={game.image} alt={game.title} className={styles.game__image} />
      </div>
      <div className={styles.game__info}>
        <h1 className={styles.game__title}>{game.title}</h1>
        <div className={styles.game__priceWrapper}>
          <p className={styles.game__price}>{game.price} ₽</p>
          <p className={styles.game__discount}>-{game.discount}%</p>
        </div>
        <div className={styles.game__discountTime}>Скидка действует до</div>
      </div>
      <div className={styles.game__descriptionWrapper}>
        <h3 className={styles.game__descriptionTitle}>Описание игры</h3>
        <p className={styles.game__description}>{game.description}</p>
      </div>
      <div className={styles.game__parametrs}>
        <p className={styles.game__parametrsTitle}>Платформа</p>
        <p className={styles.game__parametrsValue}>ps</p>
        <p className={styles.game__parametrsTitle}>Язык</p>
        <p className={styles.game__parametrsValue}>en</p>
        <p className={styles.game__parametrsTitle}>Дата релиза</p>
        <p className={styles.game__parametrsValue}>3.2557</p>
      </div>
      <div className={styles.game__orderWrapper}>
        {isGameInCart ? (
          <Link to="/cart" className={styles.cartLink}>
            Перейти в корзину
          </Link>
        ) : (
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default GamePage;
