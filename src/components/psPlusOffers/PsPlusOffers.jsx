import Tabs from "../ui/tabs/Tabs";
import styles from "./PsPlusOffers.module.scss";

const PsPlusOffers = () => {
  return (
    <div className={styles.psOffers}>
      <h2 className={styles.psOffers__title}>Подписки PS Plus</h2>
      <Tabs />
    </div>
  );
};

export default PsPlusOffers;
