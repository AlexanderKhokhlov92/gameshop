import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import GamePage from "./components/pages/game/GamePage";
import Catalog from "./components/pages/catalog/Catalog";
import Cart from "./components/pages/cart/Cart";
import SubscriptionPage from "./components/pages/subscriptionPage/SubscriptionPage";

const App = () => {
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
