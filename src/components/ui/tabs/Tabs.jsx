import { useState } from "react";
import styles from "./Tabs.module.scss";
import { useSubscriptions } from "../../../contexts/SubscriptionContext";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Начальное состояние - первая вкладка
  const subscriptions = useSubscriptions();
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); // Меняем активную вкладку по клику
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabButtons}>
        <button
          className={activeTab === 1 ? `${styles.active}` : ""}
          onClick={() => handleTabClick(1)}
        >
          1 месяц
        </button>
        <button
          className={activeTab === 2 ? `${styles.active}` : ""}
          onClick={() => handleTabClick(2)}
        >
          3 месяца
        </button>
        <button
          className={activeTab === 3 ? `${styles.active}` : ""}
          onClick={() => handleTabClick(3)}
        >
          12 месяцев
        </button>
      </div>

      <div className={styles.tabContent}>
        <ul className={styles.list}>
          {subscriptions.map((subscription) => (
            <li className={styles.listItem} key={subscription.id}>
              <div className={styles.imageWrapper}>
                <img
                  src={subscription.images.small}
                  alt={`${subscription.version} small`}
                  className={styles.smallImage}
                />
              </div>
              <p className={styles.subName}>{subscription.version}</p>
              <p className={styles.subPrice}>
                {subscription.durations[activeTab - 1].price} ₽
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
