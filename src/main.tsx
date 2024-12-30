import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Banner from "./components/banner/Banner.tsx";
import { Provider } from "react-redux";
import store from './store/store.js';
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Banner />
      <App />
    </Provider>
  </StrictMode>
);
