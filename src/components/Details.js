import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'
import styled from 'styled-components'

const StyledDetails = styled.div`
    background-color: lightgrey;
    font-size: 2.5em;
    border: 2px solid black;
    border-radius: 10%;
`



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
        <StyledDetails className='details-container'>
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
        </StyledDetails>
    )
}