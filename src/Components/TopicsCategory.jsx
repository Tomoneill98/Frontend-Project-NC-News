import { useState, useEffect } from "react"
import { fetchArticles } from "../../utils"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function TopicsCategory() {

const [articles, setArticles] = useState([])
const { topic } = useParams()

useEffect(() => {
    fetchArticles(topic).then(({articles}) => {
        setArticles(articles)
    })
}, [topic])

return (
    <>
        <main>
            <ul className="topic-articles">{articles.map((article) => {
                {
                    return <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                            <img src={article.article_img_url} />
                        <h3>{article.title}</h3>
                         </Link> 
                    </li>
                }
            })}</ul>
        </main>
    </>
)
}

export default TopicsCategory