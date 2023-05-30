import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchArticles } from "../../utils"

function Articles () {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then(({articles}) => {
            setArticles(articles)
        })
    })

    return (
        <main>
            <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                <img src={article.article_img_url} className="article-icon" style={{ width: 200, height: 200 }}/>
                <h2 className="article-title">{article.title}</h2>
                </li>
            })}
            </ul>
        </main>
    )
}

export default Articles