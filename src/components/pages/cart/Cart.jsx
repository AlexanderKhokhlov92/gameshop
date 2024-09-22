import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../../../redux/cartSlice";
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmit = () => {
    cartItems.forEach((item) => {
      console.log(`ID: ${item.id}, Название: ${item.name}, Количество: 1`); // Здесь 'Количество' фиксировано, если необходимо, добавьте логику для подсчета
    });
  };

  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__title}>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className={styles.cart__items}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cart__item}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.cart__itemImage}
              />
              <div className={styles.cart__itemDetails}>
                <h3>{item.name}</h3>
                <p>{item.price} ₽</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className={styles.cart__removeButton}
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className={styles.cart__totalPrice}>Итого: ${totalPrice}</h3>
      <button onClick={handleClearCart} className={styles.cart__clearButton}>
        Очистить корзину
      </button>
      <button onClick={handleSubmit}>Оформить заказ</button>
    </div>
  );
};

export default Cart;
