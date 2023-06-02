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
        })
    }, [])

    if (isLoading) return <p>Loading ...</p>

   return (
  <>
  <div className="topics-container">
    <ul className="topics">
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>
            <h2 className="topic-slug">{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>
);

}

export default Topics