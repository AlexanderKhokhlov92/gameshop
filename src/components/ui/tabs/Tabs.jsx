import { useState } from "react";
import styles from "./Tabs.module.scss"; // Импорт SCSS модуля

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Начальное состояние - первая вкладка

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
        {activeTab === 1 && <div>Content of Tab 1</div>}
        {activeTab === 2 && <div>Content of Tab 2</div>}
        {activeTab === 3 && <div>Content of Tab 3</div>}
      </div>
    </div>
  );
};

export default Tabs;
