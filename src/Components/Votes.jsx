import { incrementVotes, decrementVotes } from "../../utils"
import { useState } from "react"

function Votes({article, setArticle, article_id}) {

    const [incDisabled, setIncDisabled] = useState(false);
    const [decDisabled, setDecDisabled] = useState(false)

    function increaseVotes() {
    setArticle((article) => {
        return {...article, votes: article.votes + 1}
    })
    setIncDisabled(true)
    incrementVotes(article_id).then(() => {
        return {...article, votes: article.votes - 1}
    }).catch((err) => {
        if (err) {
            return <p>Unable to vote right now, try again later.</p>
        }
    })
}

 function decreaseVotes() {
    if (article.votes > 0) {
        setArticle((article) => {
            return { ...article, votes: article.votes - 1 }
        })
        setDecDisabled(true)
        decrementVotes(article_id).then(() => {
            return { ...article, votes: article.votes + 1 }
        }).catch((err) => {
            if (err) {
                return <p>Unable to vote right now, try again later.</p>
            }
        })
    }
    }
  

    return (
        <div className="vote-buttons-container">
            <button disabled={incDisabled} className="vote-button" onClick={increaseVotes}>👍🏼</button>
              <button disabled={decDisabled} className="vote-button" onClick={decreaseVotes}>👎🏼</button>
            <p className="vote-count"> {article.votes} </p>
        </div>
    )
}

export default Votes;