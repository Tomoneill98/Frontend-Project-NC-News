import { Link } from "react-router-dom"

function ArticleCard ({articles}) {
return (
    <ul className = 'article-card'>
        {articles.map(({article_id, title, article_img_url} ) => {
             return (  
             <li key = {article_id}>
                 <Link to={`/articles/${article_id}`}>
                <img src={article_img_url} style={{ width: 250, height: 200 }}/>  
                <h2 className="article-card-title">{title}</h2>
             </Link> 
             </li>
            )
        })}
    </ul>
)
}

export default ArticleCard