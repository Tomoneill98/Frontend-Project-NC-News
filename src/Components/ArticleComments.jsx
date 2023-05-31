import { useState, useEffect } from "react"
import { fetchCommentsByArticle } from "../../utils";
import { useParams } from "react-router";
import moment from "moment";

function ArticleComments() {

   const [articleComments, setArticleComments] = useState([])
   const {article_id} = useParams()
   

   useEffect(() => {
       fetchCommentsByArticle(article_id).then(({comments}) => {
        setArticleComments(comments)
       })
   }, [])

   return (
    <>
    <ul className = 'comments'>
    {articleComments.map(({comment_id, body, author, votes, created_at}) => {
        return (
            <li key={comment_id}>
                <h2 className = "comment-heading">{author}</h2>
                <p>{body}</p>
                <p>Posted at: {moment(`${created_at}`).format("MMMM Do YYYY")}{" "}</p>
                <p>Votes: {votes}</p>
            </li>
            
        )
    })}
    </ul>
    </>
   )
    
}

export default ArticleComments;