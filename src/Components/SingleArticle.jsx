import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchSingleArticle } from "../../utils";
import moment from 'moment'


function SingleArticle() {
const [article, setArticle] = useState([])
const {article_id} = useParams()

useEffect(() => {
    fetchSingleArticle(article_id).then(({article}) =>
    setArticle(article))
}, [])
console.log(article)


return (
    <main>
        <div key={article.article_id}>
        <h2 className="article-title">{article.title}</h2>
        <h3>Written by:{article.author} on {moment(`${article.created_at}`).format("MMMM Do YYYY")}{" "} </h3>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        <p>{article.votes}</p>
        </div>


    </main>
)
}

export default SingleArticle;