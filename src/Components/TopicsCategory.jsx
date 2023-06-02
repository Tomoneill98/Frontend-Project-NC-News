import { useState, useEffect } from "react"
import { fetchArticles } from "../../utils"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ScrollTop from "./ScrollTop"


function TopicsCategory() {

const [isLoading, setIsLoading] = useState(true)
const [articles, setArticles] = useState([])
const { topic } = useParams()

useEffect(() => {
    fetchArticles(topic).then(({articles}) => {
        setArticles(articles)
         setIsLoading(false)
    })
}, [topic])

if (isLoading) return <p>Loading ...</p>

return (
    <>
        <main>
           <h1>Articles for {`${topic}`}</h1>
            <ul className="topic-articles">{articles.map((article) => {
                {
                    return <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                            <img src={article.article_img_url} />
                        <h3 className="article-card-title">{article.title}</h3>
                         </Link> 
                    </li>
                }
            })}</ul>
        <ScrollTop />
        </main>
    </>
)
}

export default TopicsCategory