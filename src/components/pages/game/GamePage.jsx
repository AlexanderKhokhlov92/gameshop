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
      <h1 className={styles.gameTitle}>{game.title}</h1>
      <p className={styles.gameDescription}>{game.description}</p>
      <p className={styles.gamePrice}>Цена: ${game.price.toFixed(2)}</p>
      <p className={styles.gameDiscount}>{game.discount}% off</p>
      <p className={styles.gamePlayers}>
        {game.twoPlayers ? "Игра на двоих" : "Одиночная игра"}
      </p>
      <p className={styles.gameEA}>
        {game.eaSubscription ? "Из подписки EA" : "Не из подписки EA"}
      </p>
      <p className={styles.gamePS5}>
        {game.ps5Subscription ? "Из подписки PS5" : "Не из подписки PS5"}
      </p>

      {/* Если игра уже в корзине, показываем ссылку на корзину */}
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
  );
};

export default GamePage;
