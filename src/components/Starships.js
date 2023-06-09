import React from 'react'
import { useEffect, useState } from 'react';


const Starships = ({url}) => {
    const [loading, setLoading] = useState(false);
    const [starships, setStarships] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
          })
          .then((data) => {
            setStarships(data)
            setError(null)
          })
          .catch((error) => {
            setError(error)
            setStarships(null)
          })
          .finally(() => setLoading(false))
        }, [])
 return (
    <div>
        <li>
            {error && `Unable to fetch starships! - ${error}`}
            {starships && starships.name}
            {loading}
      </li>
    </div>
  )
}

export default Starships;