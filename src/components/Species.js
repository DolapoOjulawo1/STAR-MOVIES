import React from 'react'
import { useEffect, useState } from 'react';

const Species = ({url}) => {
    const [loading, setLoading] = useState(false);
    const [species, setSpecies] = useState(null);
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
            setSpecies(data)
            setError(null)
          })
          .catch((error) => {
            setError(error)
            setSpecies(null)
          })
          .finally(() => setLoading(false))
        }, [])
 return (
    <div>
        <li>
            {error && `Unable to fetch Species! - ${error}`}
            {species && species.name}
            {loading}
      </li>
    </div>
  )
}

export default Species;