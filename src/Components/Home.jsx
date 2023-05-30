import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchArticles } from "../../utils"
import ArticleCard from "./ArticleCard"


function Home () {

     const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles().then(({articles}) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading ...</p>
 
    return (
        <>
        <h1 className="home-title">Gossip Girl Here ...</h1>
        <p className="home-intro">Welcome to Gossip Girl, where secrets, scandals, and seduction intertwine. Our website is your gateway to captivating articles to read, comment on, and vote for. From steamy affairs to fashion faux pas, we've got the scoop. Join us in this tantalizing world of gossip. xoxo Gossip Girl.</p>
         <main>
          <ArticleCard articles={articles}/>
        </main>
        
        </>
    )
}
export default Home;