import { Container } from "react-bootstrap";
import type { Article } from "./ArticoloT";

interface DetaglioArtP{
    article: Article;
}

const DetaglioArt: React.FC<DetaglioArtP> = ({article,}) =>(
    <Container className="mt-4">
    <h2 className="mt-3">
        {article.title}
    </h2>
     <img
      src={article.image_url}
      alt={article.title}
      style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
    />
    <p className="mt-3">{article.summary}</p>
    </Container>
);
export default DetaglioArt