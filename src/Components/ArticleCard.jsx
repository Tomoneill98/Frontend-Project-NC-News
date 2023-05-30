function ArticleCard ({articles}) {
return (
    <ul className = 'article-card'>
        {articles.map(({article_id, title, article_img_url} ) => {
             return <li key = {article_id}>
                <img src={article_img_url} style={{ width: 250, height: 250 }}/>
                <h2 className="article-title">{title}</h2>
             </li>
        })}
    </ul>
)
}

export default ArticleCard