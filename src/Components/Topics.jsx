import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchTopics } from "../../utils"

function Topics () {
    const [topics, setTopics] = useState([])
       const [isLoading, setIsLoading] = useState(true)

      useEffect(() => {
        fetchTopics().then(({topics}) => {
            setTopics(topics)
                setIsLoading(false)
                setIsLoading(false)

        })
    }, [])

     if(isLoading) {
        return <h2>Loading...</h2>
    }

    

   return (
  <>
    <ul className="topics">
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link to={`/articles/${topic.slug}`}>
            <h2 className="topic-slug">{topic.slug}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

}

export default Topics