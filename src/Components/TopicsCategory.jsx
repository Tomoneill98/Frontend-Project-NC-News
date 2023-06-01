import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import { fetchArticles } from "../../utils"
import { useParams } from "react-router-dom"


function TopicsCategory() {

const [articles, setArticles] = useState([])
const {slug} = useParams()
const { topic } = useParams()

useEffect(() => {
    fetchArticles(topic).then(({articles}) => {
        setArticles(articles)
    })
}, [topic])

return (
    <>
        <main>
            <ul>{articles.map((article) => {
                if (article.topic === slug) {
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