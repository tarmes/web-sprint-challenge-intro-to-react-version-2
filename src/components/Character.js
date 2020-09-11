// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const kfLR = keyframes`
    from {
        margin-left: -100%;
    }
    to {
        margin-left: 0;
    }
`
const kfRL = keyframes`
    from {
        margin-left: 100%;
    }
    to {
        margin-left: 0
    }
`

const StyledCharacter = styled.div`
    h1 {
        animation: ${kfLR} 2s ease;
    }
    button {
        animation: ${kfRL} 2s ease;
    }
`

export default function Character({ charData, action }) {
    return (
        <StyledCharacter className='character-container'>
        <h1>{charData.name}</h1>
        <button onClick={() => action(charData.id)}>
            See Details
        </button>
        </StyledCharacter>
    )
}