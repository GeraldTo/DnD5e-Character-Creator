import React from 'react'

export default function Level(props) {
    return (
        <div>
            <button onClick={() => props.setlevel(prev => prev>1 ? prev - 1: prev)}> - </button>
                {props.level}
            <button onClick={ () => props.setlevel(prev => prev + 1)}> + </button> 
        </div>
    )
}
