import { useParams, Link } from "react-router-dom";
import { useSubscriptions } from "../../../contexts/SubscriptionContext";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../redux/cartSlice";
import styles from "./SubscriptionPage.module.scss";

const SubscriptionPage = () => {
  const { id } = useParams();
  const subscriptions = useSubscriptions();
  const subscription = subscriptions.find(
    (subscription) => subscription.id === parseInt(id)
  );

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isSubscriptionInCart = cartItems.some(
    (item) => item.id === subscription?.id
  );

  if (!subscription) {
    return <div>Подписка не найдена</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: subscription.id,
        version: subscription.version,
        price: subscription.durations[0].price, // Цена за 1 месяц как пример
      })
    );
  };

  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__imageWrapper}>
        <img
          src={subscription.images.large}
          className={styles.subscription__image}
          alt={subscription.version}
        />
      </div>
      <div className={styles.subscription__info}>
        <h1 className={styles.subscription__title}>{subscription.version}</h1>
        <div className={styles.subscription__priceWrapper}>
          {subscription.durations.map((duration) => (
            <div
              key={duration.duration}
              className={styles.subscription__duration}
            >
              <p className={styles.subscription__price}>
                {duration.duration}: {duration.price} ₽
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.subscription__orderWrapper}>
        {isSubscriptionInCart ? (
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

export default SubscriptionPage;
