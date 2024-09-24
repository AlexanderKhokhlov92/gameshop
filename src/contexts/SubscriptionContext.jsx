import { createContext, useContext, useEffect, useState } from "react";

// Создаем контекст
const SubscriptionContext = createContext();

// Хук для использования контекста
export const useSubscriptions = () => {
  return useContext(SubscriptionContext);
};

// Провайдер контекста для предоставления данных
export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch("/subscriptions.json"); // Если JSON в public, то путь будет /subscriptions.json
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSubscriptions(data); // Сохраняем данные в стейт
      } catch (error) {
        console.error("Ошибка загрузки подписок:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <SubscriptionContext.Provider value={subscriptions}>
      {children}
    </SubscriptionContext.Provider>
  );
};
