import React, { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  summary: string;
  image_url:string;
};

const PaginaArticoli: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selected, setSelected] = useState<Article | null>(null);
 
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  function handleClick(id: number) {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setSelected(data));
  }

  if (selected) {
    return (
      <div>
        <button onClick={() => setSelected(null)}>Indietro</button>
        <h2>{selected.title}</h2>
        <img
                src={selected.image_url}
                alt={selected.title}
                style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
              />
        <p>{selected.summary}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Articoli SpaceFlight News</h1>
      <ul>
        {articles.map((art) => (
          <li key={art.id}>
            <h2><img
                src={art.image_url}
                alt={art.title}
                style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
              /></h2>
             
            <button onClick={() => handleClick(art.id)}>{art.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginaArticoli;