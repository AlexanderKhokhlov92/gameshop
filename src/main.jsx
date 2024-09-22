import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GameProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameProvider>
  </Provider>
);
