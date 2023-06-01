import { postComment } from "../../utils";
import { useState } from "react";
import { useParams } from "react-router";

function CommentAdder({setArticleComments, currentUser, setFetchedComments}) {

    const [isLoading, setIsLoading] = useState(true)
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
         setIsLoading(false)
        setArticleComments((currComments) => {
            return [newCommentFromApi, ...currComments]
        })
    })

    if (isLoading) return <p>Loading ...</p>
}
return (
    <>
    <form onSubmit={handleSubmit}>
    <input placeholder="Write a comment..." multiline="true" value={newComment} onChange={(event) => {
        setNewComment(event.target.value)
    }}></input>
    <button type="submit" disabled={!newComment}>➣</button>
    <p className="comment-success-message">{commentMessage}</p>
    <br></br>
    </form>
    </>
)
}

export default CommentAdder;