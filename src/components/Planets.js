import React from 'react'
import { useEffect, useState } from 'react';


const Planets = ({url}) => {
    const [loading, setLoading] = useState(false);
    const [planet, setPlanet] = useState(null);
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
            setPlanet(data)
            setError(null)
          })
          .catch((error) => {
            setError(error)
            setPlanet(null)
          })
          .finally(() => setLoading(false))
        }, [])
 return (
    <div>
        <li>
            {error && `Unable to fetch Planets! - ${error}`}
            {planet && planet.name}
            {loading}
      </li>
    </div>
  )
}

export default Planets;