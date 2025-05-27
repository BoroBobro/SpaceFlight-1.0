

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
    onClick={() => onRead(article.id)}/>
    <h5 className="mt-2">{article.title}</h5>
    </div>
);

export default ArticleCard;
