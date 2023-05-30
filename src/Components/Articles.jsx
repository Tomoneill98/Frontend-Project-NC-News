import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchArticles } from "../../utils"
import ArticleCard from "./ArticleCard"

function Articles () {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles().then(({articles}) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading ...</p>
    return (
        <main>
          <ArticleCard articles={articles}/>
        </main>
    )
}

export default Articles


//   <ul>
//             {articles.map((article) => {
//                 return <li key={article.article_id}>
//                 <img src={article.article_img_url} className="article-icon" style={{ width: 200, height: 200 }}/>
//                 <h2 className="article-title">{article.title}</h2>
//                 </li>
//             })}
//             </ul>