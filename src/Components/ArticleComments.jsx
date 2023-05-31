import { useState, useEffect } from "react"
import { fetchCommentsByArticle } from "../../utils";
import { useParams } from "react-router";
import moment from "moment";

function ArticleComments() {

    const [isLoading, setIsLoading] = useState(true)
   const [articleComments, setArticleComments] = useState([])
   const {article_id} = useParams()
   

   useEffect(() => {
       fetchCommentsByArticle(article_id).then(({comments}) => {
        setArticleComments(comments)
        setIsLoading(false)
       })
   }, [])

   if (isLoading) return <p>Loading ...</p>
   if (!isLoading && articleComments.length === 0) 
   {return <p>No comments</p>}

else {
    return (
     <>
     <ul className = 'comments'>
     {articleComments.map(({comment_id, body, author, votes, created_at}) => {
         return (
             <li key={comment_id}>
                 <h2 className = "comment-heading">{author}</h2>
                 <p>{body}</p>
                 <p className="comment-date">Posted on {moment(`${created_at}`).format("Do MMMM YYYY")}{" "}</p>
                 <p>Votes: {votes}</p>
             </li>
             
         )
     })}
     </ul>
     </>
    )

}
    
}

export default ArticleComments;