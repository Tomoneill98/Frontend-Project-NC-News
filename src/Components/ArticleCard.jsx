function ArticleCard ({articles}) {
return (
    <ul className = 'article-card'>
        {articles.map(({article_id, title, article_img_url} ) => {
             return <li key = {article_id}>
                <img src={article_img_url} style={{ width: 170, height: 170 }}/>
                <h2>{title}</h2>
             </li>
        })}
    </ul>
)
}

export default ArticleCard