import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleCard from "./ArticoloT";

type Article = {
  id: number;
  title: string;
  summary: string;
  image_url: string;
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

  const rows: Article[][] = [];
  for(let i = 0; i < articles.length; i += 2){
    rows.push(articles.slice(i, i + 2));
  }

  return (
    <Container className="mt-4">
        <h1>Articoli Spaziali</h1>
        {rows.map((row,idx)=>(
            <Row key={idx} className="mb-3">
                {row.map((art)=>(
                    <Col md={2} key={art.id}>
                        <ArticleCard article={art} onRead={handleClick} />
                    </Col>
                ))}
            </Row>
        ))}
    </Container>
  );
};

export default PaginaArticoli;