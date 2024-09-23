import { Link, useLocation } from "react-router-dom";
import Game from "../game/Game";
import styles from "./GameList.module.scss";
import { useGames } from "../../contexts/GameContext";
import { useEffect, useState } from "react";

// Функция транслитерации для русского текста
const transliterate = (text) => {
  const map = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ы: "y",
    э: "e",
    ю: "yu",
    я: "ya",
    " ": " ",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => map[char] || char)
    .join("");
};

const GameList = ({ searchTerm }) => {
  const games = useGames();
  const location = useLocation();
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter");

    // Обрабатываем поиск только с транслитерацией
    const normalizedSearchTerm = transliterate(searchTerm.toLowerCase());

    // Фильтрация игр на основе фильтра
    const gamesFilteredByFilter = games.filter((game) => {
      switch (filter) {
        case "discount":
          return game.discount > 0;
        case "twoPlayers":
          return game.twoPlayers;
        case "eaSubscription":
          return game.eaSubscription;
        case "ps5Subscription":
          return game.ps5Subscription;
        case "someOneFilter":
          return game.someOneFilter;
        default:
          return true;
      }
    });

    // Фильтрация игр на основе текста поиска
    const gamesFilteredBySearch = gamesFilteredByFilter.filter((game) =>
      game.title.toLowerCase().includes(normalizedSearchTerm)
    );

    setFilteredGames(gamesFilteredBySearch);
  }, [games, location.search, searchTerm]);

  if (!games || games.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.gameList}>
      {filteredGames.length > 0 ? (
        filteredGames.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <Game {...game} />
          </Link>
        ))
      ) : (
        <p>Игры не найдены</p>
      )}
    </div>
  );
};

export default GameList;
