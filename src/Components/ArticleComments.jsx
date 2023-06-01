import { useState, useEffect } from "react"
import { fetchCommentsByArticle } from "../../utils";
import { useParams } from "react-router";
import moment from "moment";

function ArticleComments({articleComments, setArticleComments, fetchedComments}) {

    const [isLoading, setIsLoading] = useState(true)
   const {article_id} = useParams()
   
   useEffect(() => {
       fetchCommentsByArticle(article_id).then(({comments}) => {
        setArticleComments(comments)
        setIsLoading(false)
       })
   }, [fetchedComments])

   if (isLoading) return <p>Loading ...</p>
   if (!isLoading && articleComments.length === 0) return <p>No comments</p>

else {
    return (
     <ul>
     {articleComments.map(({comment_id, body, author, votes, created_at}, index) => {
         return (
             <li key={index}>
                 <h2 className = "comment-heading">{author}</h2>
                 <p>{body}</p>
                 <p>Posted at: {moment(`${created_at}`).format("Do MMMM YYYY")}{" "}</p>
                 <p>Votes: {votes}</p>
             </li>
             
         )
     })}
     </ul>
    )

}
    
}

export default ArticleComments;