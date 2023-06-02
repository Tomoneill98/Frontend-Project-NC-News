import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchSingleArticle} from "../../utils";
import moment from 'moment'
import ArticleComments from "./ArticleComments";
import CommentAdder from "./CommentAdder";
import Votes from "./Votes";
import ScrollTop from "./ScrollTop";

function SingleArticle({currentUser}) {


const [fetchedComments, setFetchedComments] = useState(false)
const [articleComments, setArticleComments] = useState([])
const [article, setArticle] = useState([])
const {article_id} = useParams()

useEffect(() => {
    fetchSingleArticle(article_id).then(({article}) =>
    setArticle(article))
}, [])


return (
    <main>
        <div >
        <h1 className="article-title">{article.title}</h1>
        <img src={article.article_img_url}/>
        <h3>Written by {article.author} on {moment(`${article.created_at}`).format("Do MMMM YYYY")}{" "} </h3>
        <p className="article-body">{article.body}</p>
         <Votes article={article} setArticle={setArticle} article_id={article_id}/>
        <CommentAdder setArticleComments={setArticleComments} currentUser={currentUser} setFetchedComments={setFetchedComments}/>
        <h3 className="comments-title">Comments</h3>
        <ArticleComments articleComments={articleComments} setArticleComments={setArticleComments} fetchedComments={fetchedComments}/>
        <ScrollTop />
        </div>
    </main>
)
}

export default SingleArticle;