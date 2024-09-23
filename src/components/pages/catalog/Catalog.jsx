import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GameList from "../../gamelist/GameList";
import SearchInput from "../../ui/searchInput/SearchInput";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [headerTitle, setHeaderTitle] = useState("Каталог игр");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputFocus = () => {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.toString()) {
      navigate("/catalog");
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (location.search === "" && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter");

    if (filter) {
      switch (filter) {
        case "discount":
          setHeaderTitle("Игры со скидкой");
          break;
        case "twoPlayers":
          setHeaderTitle("Игры для двоих");
          break;
        case "eaSubscription":
          setHeaderTitle("Игры с EA Subscription");
          break;
        case "ps5Subscription":
          setHeaderTitle("Игры с PS5 Subscription");
          break;
        default:
          setHeaderTitle("Каталог игр");
      }
    } else {
      setHeaderTitle("Каталог игр");
    }
  }, [location.search]);

  return (
    <div className={styles.catalog}>
      <h1 className={styles.catalog__title}>{headerTitle}</h1>{" "}
      <SearchInput
        ref={searchInputRef}
        onSearch={handleSearch}
        onFocus={handleInputFocus}
      />
      <GameList searchTerm={searchTerm} />
    </div>
  );
};

export default Catalog;
