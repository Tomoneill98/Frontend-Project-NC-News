import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchSingleArticle} from "../../utils";
import moment from 'moment'
import ArticleComments from "./ArticleComments";
import Votes from "./Votes";


function SingleArticle() {
const [votes, setVotes] = useState(0)
const [article, setArticle] = useState([])
const {article_id} = useParams()

useEffect(() => {
    fetchSingleArticle(article_id).then(({article}) =>
    setArticle(article))
}, [])


return (
    <main>
        <div key={article.article_id}>
        <h1 className="article-title">{article.title}</h1>
        <h3>Written by {article.author} on {moment(`${article.created_at}`).format("Do MMMM YYYY")}{" "} </h3>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        <Votes article={article} setArticle={setArticle} article_id={article_id}/>
        <h3>Comments</h3>
        <ArticleComments />
        </div>


    </main>
)
}

export default SingleArticle;