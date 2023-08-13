import { postComment } from "../../utils";
import { useState } from "react";
import { useParams } from "react-router";

function CommentAdder({setArticleComments, currentUser, setFetchedComments}) {

   
const {username} = currentUser
const [newComment, setNewComment] = useState("")
const [commentMessage, setCommentMessage] = useState("")
const {article_id }= useParams()
 
function handleSubmit(event) {
    setFetchedComments(false)
    event.preventDefault()
    postComment(username, newComment, article_id).then((newCommentFromApi) => {
        setNewComment("")
        setFetchedComments(true)
        setCommentMessage("Comment posted successfully.")
        setTimeout(() => {
            setCommentMessage("")
        }, 3000)
        setArticleComments((currComments) => {
            return [newCommentFromApi, ...currComments]
        })
    })   .catch((error) => {
        setCommentMessage("Failed to post comment. Please try again later.");
        console.error(error);
      });
}
return (
    <section className="comment-adder">

        <form onSubmit={handleSubmit}>
        <textarea style={{height:80, width: 500}}placeholder="Write a comment..." multiline="true" value={newComment} onChange={(event) => {
            setNewComment(event.target.value)
        }}></textarea>
        <br></br>
        <button type="submit" disabled={!newComment}>Send comment</button>
        <p className="comment-success-message">{commentMessage}</p>
        <br></br>
    
        </form>
        
    </section>
)

// return (
//         <>
//             <h2>Comments:</h2>
//             <br></br>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="newComment" className="say">Have Your Say:</label>
//                 <br/>
//                 <textarea
//                 style={{height:100, width: 400}}
//                 placeholder="Insert comment here..."
//                 id="newComment"
//                 multiline="true"
//                 value={newComment}
//                 onChange={(event) => setNewComment(event.target.value)}
//                 ></textarea>
//                 <br/>
//                 <button disabled={!newComment}>Add Comment</button>
//                 <p>{ guestError === false ? '' : 'Cannot post a comment as guest. Please sign in!' }</p>
//             </form>
//         </>
//     )
}

export default CommentAdder;