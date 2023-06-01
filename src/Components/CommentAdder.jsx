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
    <>
    <form onSubmit={handleSubmit}>
    <textarea placeholder="Write a comment..." multiline="true" value={newComment} onChange={(event) => {
        setNewComment(event.target.value)
    }}></textarea>
    <button type="submit" disabled={!newComment}>➣</button>
    <p className="comment-success-message">{commentMessage}</p>
    <br></br>

    </form>
    </>
)
}

export default CommentAdder;