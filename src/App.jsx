import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/pages/home/Home";
import GamePage from "./components/pages/game/GamePage";
import Catalog from "./components/pages/catalog/Catalog";
import Cart from "./components/pages/cart/Cart";
import SubscriptionPage from "./components/pages/subscriptionPage/SubscriptionPage";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready(); // Уведомляем Telegram, что мини-приложение готово

      // Показать кнопку "Назад" в интерфейсе Telegram Web App
      window.Telegram.WebApp.BackButton.show();

      // Обработчик нажатия кнопки "Назад"
      window.Telegram.WebApp.BackButton.onClick(() => {
        navigate(-1); // Возврат на предыдущую страницу
      });

      // Очистка при размонтировании
      return () => {
        window.Telegram.WebApp.BackButton.hide();
        window.Telegram.WebApp.BackButton.offClick();
      };
    }
  }, [navigate]);

  const closeApp = () => {
    window.Telegram.WebApp.close(); // Закрытие мини-приложения
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscription/:id" element={<SubscriptionPage />} />
      </Routes>
    </>
  );
};

export default App;
