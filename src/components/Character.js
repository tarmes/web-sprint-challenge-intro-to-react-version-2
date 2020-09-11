// Write your Character component here
import React from 'react'

export default function Character({ charData, action }) {
    return (
        <div className='character-container'>
        <h1>{charData.name}</h1>
        <button onClick={() => action(charData.id)}>
            See Details
        </button>
        </div>
    )
}