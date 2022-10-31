import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "easy-peasy";

import "./index.css";

import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
