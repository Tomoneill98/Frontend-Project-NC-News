import { useState, useEffect } from "react"
import { fetchArticles } from "../../utils"
import { useParams } from "react-router-dom"


function TopicsCategory() {

const [articles, setArticles] = useState([])
const { topic } = useParams()
console.log(topic)

useEffect(() => {
    fetchArticles(topic).then(({articles}) => {
        console.log(articles)
        setArticles(articles)
    })
}, [topic])

return (
    <>
        <main>
            <ul>{articles.map((article) => {
                {
                    return <li key={article.article_id}>
                            <img src={article.article_img_url} />
                        <h2>{article.title}</h2>
                    </li>
                }
            })}</ul>
        </main>
    </>
)
}

export default TopicsCategory