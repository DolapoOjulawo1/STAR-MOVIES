import React from 'react'
import { useEffect, useState } from 'react';


const Vehicles = ({url}) => {
    const [loading, setLoading] = useState(false);
    const [vehicles, setVehicles] = useState(null);
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
            setVehicles(data)
            setError(null)
          })
          .catch((error) => {
            setError(error)
            setVehicles(null)
          })
          .finally(() => setLoading(false))
        }, [])
 return (
    <div>
        <li>
            {error && `Unable to fetch Vehicles! - ${error}`}
            {vehicles && vehicles.name}
            {loading}
      </li>
    </div>
  )
}

export default Vehicles;