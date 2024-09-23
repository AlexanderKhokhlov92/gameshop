import SmallSlider from "../ui/sliders/SmallSlider/SmallSlider";
import { useGames } from "../../contexts/GameContext";

const BestSellers = () => {
  const games = useGames();

  const bestSellers = games.filter((game) => game.discount > 5);

  return (
    <div>
      <SmallSlider to="game" slides={bestSellers} />
    </div>
  );
};

export default BestSellers;
