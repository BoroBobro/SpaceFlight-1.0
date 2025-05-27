import { Button } from "react-bootstrap";

export interface Article{
     id: number;
  title: string;
  summary: string;
  image_url: string;
}

interface ArticleCardP{
    article: Article;
    onRead: (id:number) => void;
};

const ArticleCard:React.FC<ArticleCardP> = ({article, onRead}) => (
    <div className="border rounded p-3 h-100 text-center" >
 <img
      src={article.image_url}
      alt={article.title}
      style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
    />
    <h5 className="mt-2">{article.title}</h5>
    <Button variant="primary" onClick={() => onRead(article.id)}>
      Leggi
    </Button>
    </div>
);

export default ArticleCard;
