import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'

export default function Details({ friendId, close}) {

    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}${friendId}`)
        .then(res => {
            setDetails(res.data)
            console.log(res.data)
        })
        .catch(err => {
            debugger
        })
    }, [friendId])

    return (
        <div className='details-container'>
            <h2>Details</h2>
            {
                details && 
                <>
                <p>{details.name} is a {details.species}</p>
                <p>CHARACTERISTICS</p>
                <ul>
                <li>Origin: {details.origin.name}</li>
                <li>Location: {details.location.name}</li>
                <li>Gender: {details.gender}</li>
                </ul>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}