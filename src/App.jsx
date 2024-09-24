import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/pages/home/Home";
import GamePage from "./components/pages/game/GamePage";
import Catalog from "./components/pages/catalog/Catalog";
import Cart from "./components/pages/cart/Cart";
import SubscriptionPage from "./components/pages/subscriptionPage/SubscriptionPage";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    if (tg) {
      tg.ready(); // Уведомляем Telegram, что мини-приложение готово

      // Проверяем поддержку кнопки "Назад" в версии Telegram
      if (tg.version && parseFloat(tg.version) >= 6.1) {
        // Если это не главная страница, показываем кнопку "Назад"
        if (location.pathname !== "/") {
          tg.BackButton.show();
          tg.BackButton.onClick(() => {
            navigate(-1); // Возвращаемся на предыдущую страницу
          });
        } else {
          tg.BackButton.hide(); // На главной странице скрываем кнопку "Назад"
        }
      }

      // Если это главная страница, показываем кнопку "Закрыть"
      if (location.pathname === "/") {
        tg.MainButton.setText("Закрыть");
        tg.MainButton.show();
        tg.MainButton.onClick(() => {
          tg.close(); // Закрываем приложение
        });
      } else {
        tg.MainButton.hide(); // На всех остальных страницах скрываем кнопку "Закрыть"
      }
    }

    // Очистка при размонтировании
    return () => {
      if (tg) {
        tg.BackButton.hide();
        tg.BackButton.offClick();
        tg.MainButton.hide();
      }
    };
  }, [location, navigate]);

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
