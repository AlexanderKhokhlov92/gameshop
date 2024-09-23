import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../../../redux/cartSlice";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";

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
      console.log(`ID: ${item.id}, Название: ${item.name}, Количество: 1`);
    });
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__titleWrapper}>
        <h2 className={styles.cart__title}>Корзина</h2>
        <h3 className={styles.cart__totalPrice}>{totalPrice} ₽</h3>
      </div>
      {cartItems.length === 0 ? (
        <p className={styles.empty}>В корзине пусто</p>
      ) : (
        <ul className={styles.cart__items}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cart__item}>
              <Link
                to={`/game/${item.id}`}
                className={styles.cart__imageWrapper}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cart__itemImage}
                />
              </Link>
              <div className={styles.cart__itemDetails}>
                <h3 className={styles.cart__itemName}>{item.name}</h3>
                <p className={styles.cart__itemPrice}>{item.price} ₽</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className={styles.cart__removeButton}
                >
                  <MdOutlineDeleteOutline className={styles.cart__delIcon} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length === 0 ? null : (
        <section className={styles.order}>
          <form className={styles.order__form}>
            <h3 className={styles.order__title}>Данные аккаунта</h3>
            <input
              placeholder="Введите e-mail"
              className={styles.order__input}
              type="text"
            />
            <input
              placeholder="Введите пароль"
              className={styles.order__input}
              type="text"
            />
            <div className={styles.order__checkboxWrapper}>
              <input
                className={styles.order__checkbox}
                type="checkbox"
                name=""
                id="checkbox"
              />
              <label
                className={styles.order__checkboxLabel}
                htmlFor="checkbox"
              ></label>
              <label
                htmlFor="checkbox"
                className={styles.order__checkboxDescription}
              >
                E-mail для чека такой же, как логин{" "}
              </label>
            </div>

            <input
              placeholder="Введите e-mail для чека"
              className={styles.order__input}
              type="text"
            />

            <div className={styles.order__checkboxWrapper}>
              <input
                className={styles.order__checkbox}
                type="checkbox"
                id="checkbox2"
              />
              <label
                className={styles.order__checkboxLabel}
                htmlFor="checkbox2"
              ></label>
              <label
                htmlFor="checkbox2"
                className={styles.order__checkboxDescription}
              >
                Запомнить данные для следующих заказов
              </label>
            </div>
          </form>

          <div className={styles.order__privacyWrapper}>
            <input
              className={styles.order__checkbox}
              type="checkbox"
              id="checkbox3"
              checked
              readOnly
            />
            <label
              className={styles.order__checkboxLabel}
              htmlFor="checkbox3"
            ></label>
            <p className={styles.order__checkboxDescription}>
              Согласен с условиями{" "}
              <Link className={styles.order__privacy} to={"/"}>
                Пользовательского соглашения
              </Link>{" "}
              и{" "}
              <Link className={styles.order__privacy} to={"/"}>
                Политики конфиденциальности
              </Link>
            </p>
            <div className={styles.cart__orderButtonWrapper}>
              <button
                className={styles.cart__orderButton}
                type="submit"
                onClick={handleSubmit}
              >
                Оформить заказ
              </button>
            </div>
          </div>
          <button
            onClick={handleClearCart}
            className={styles.cart__clearButton}
          >
            Очистить корзину
          </button>
        </section>
      )}
    </div>
  );
};

export default Cart;
