import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Banner from "./components/Banner.jsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Banner />
    <App />
  </StrictMode>
);
