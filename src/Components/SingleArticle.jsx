import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { decrementVotes, fetchSingleArticle, incrementVotes } from "../../utils";
import moment from 'moment'
import ArticleComments from "./ArticleComments";


function SingleArticle() {
const [votes, setVotes] = useState(0)
const [article, setArticle] = useState([])
const {article_id} = useParams()

useEffect(() => {
    fetchSingleArticle(article_id).then(({article}) =>
    setArticle(article))
}, [])

function increaseVotes() {
    setArticle((article) => {
        return {...article, votes: article.votes + 1}
    })
    incrementVotes(article_id).then(() => {
        return {...article, votes: article.votes - 1}
    }).catch((err) => {
        if (err) {
            return <p>Unable to vote right now, try again later.</p>
        }
    })
}

 function decreaseVotes() {
        setArticle((article) => {
            return { ...article, votes: article.votes - 1 }
        })
        decrementVotes(article_id).then(() => {
            return { ...article, votes: article.votes + 1 }
        }).catch((err) => {
            if (err) {
                return <p>Unable to vote right now, try again later.</p>
            }
        })
    }



return (
    <main>
        <div key={article.article_id}>
        <h2 className="article-title">{article.title}</h2>
        <h3>Written by:{article.author} on {moment(`${article.created_at}`).format("Do MMMM YYYY")}{" "} </h3>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        <p>
            <button className="vote-button" onClick={increaseVotes}>👍🏼</button>
            {article.votes}</p>
            <button className="vote-button" onClick={decreaseVotes}>👎🏼</button>
        <ArticleComments />
        </div>


    </main>
)
}

export default SingleArticle;