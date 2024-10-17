import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ArticleComponent } from "./components/Articles/articleComponent.jsx";
import dataArticles from "./article.json";

const elements = document.querySelectorAll(".generateComponentBtnPage");

elements.forEach((element) => {
  const root = createRoot(element);
  root.render(<App />);
});

const articles = createRoot(document.querySelector(".bx-articles"));
articles.render(
  <>
    {dataArticles.cards.map((items, index) => (
      <ArticleComponent
        key={index}
        imageArticles={items.image}
        byName={items.author}
        titleArticle={items.title}
        descriptionArticle={items.description}
      />
    ))}
  </>
);
