import { Link, useLocation } from "react-router-dom";
import Game from "../game/Game";
import styles from "./GameList.module.scss";
import { useGames } from "../../contexts/GameContext";
import { useEffect, useState } from "react";

const GameList = ({ searchTerm }) => {
  const games = useGames();
  const location = useLocation();
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter");

    // Фильтрация игр на основе параметров и текста поиска
    const filtered = games.filter((game) => {
      const matchesFilter =
        filter === "discount"
          ? game.discount > 0
          : filter === "twoPlayers"
          ? game.twoPlayers
          : filter === "eaSubscription"
          ? game.eaSubscription
          : filter === "ps5Subscription"
          ? game.ps5Subscription
          : filter === "someOneFilter"
          ? game.someOneFilter
          : true;

      const matchesSearchTerm = game.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearchTerm;
    });

    setFilteredGames(filtered);
  }, [games, location.search, searchTerm]); // Обновляем фильтрацию при изменении игр, параметров или текста поиска

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
