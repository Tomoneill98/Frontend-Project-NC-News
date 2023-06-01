import { postComment } from "../../utils";
import { useState } from "react";

function CommentAdder() {

const [newComment, setNewComment] = useState("")

function handleSubmit(event) {
    event.preventDefault()
    postComment(newComment).then((newCommentFromApi) => {
        setNewComment("")
        setComments((currComments) => {
            return [newCommentFromApi, ...currComments]
        })
    })
}
return (
    <>
    <form onSubmit={handleSubmit}>
    <input placeholder="Write a comment..." value={newComment} onChange={(event) => {
        console.log(event.target.value)
        setNewComment(event.target.value)
    }}></input>
    <button type="submit">➣</button>
    </form>
    </>
)
}

export default CommentAdder;