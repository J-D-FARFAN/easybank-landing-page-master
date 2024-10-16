import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const elements = document.querySelectorAll(".generateComponentBtnPage");

elements.forEach((element) => {
  const root = createRoot(element);
  root.render(<App />);
});
