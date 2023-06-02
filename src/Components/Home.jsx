import { useState, useEffect } from "react"
import { fetchArticles } from "../../utils"
import ArticleCard from "./ArticleCard"
import ScrollTop from "./ScrollTop"


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
        <main>
        <h1 className="Gossip-Girl">Gossip Girl</h1>
        <p>Welcome to Gossip Girl, where secrets, scandals, and seduction intertwine. Our website is your gateway to captivating articles to read, comment on, and vote for. From steamy affairs to fashion faux pas, we've got the scoop. Join us in this tantalizing world of gossip.</p>
        <p>xoxo Gossip Girl.</p>
          <ArticleCard articles={articles}/>
        <ScrollTop />
        </main>
        </>
    )
}
export default Home;