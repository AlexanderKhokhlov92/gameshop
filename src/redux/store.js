import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Не удалось сохранить состояние в localStorage", err);
  }
};

// Функция для загрузки состояния из localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined; // если нет сохраненного состояния, вернем undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Не удалось загрузить состояние из localStorage", err);
    return undefined;
  }
};

// Загружаем сохраненное состояние корзины из localStorage
const preloadedState = {
  cart: loadState(),
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState, // Добавляем предзагруженное состояние
});

// Подписываемся на изменения в хранилище и сохраняем состояние корзины
store.subscribe(() => {
  saveState(store.getState().cart); // сохраняем только состояние корзины
});

export default store;
