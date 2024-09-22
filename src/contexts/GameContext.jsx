import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const GameContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGames = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("./games.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Ошибка загрузки игр:", error);
      }
    };

    fetchGames();
  }, []);

  return <GameContext.Provider value={games}>{children}</GameContext.Provider>;
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
