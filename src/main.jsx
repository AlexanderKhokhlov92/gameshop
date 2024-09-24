import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { SubscriptionProvider } from "./contexts/SubscriptionContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SubscriptionProvider>
      <GameProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GameProvider>
    </SubscriptionProvider>
  </Provider>
);
