import React from 'react'

export default function Level(props) {

    return (
        <div>
            <h2>Set Starting Level:</h2>
            <button className="IncDec" onClick={() => props.setlevel(prev => prev > 1 ? prev - 1 : prev)}> - </button>
            {props.level}
            <button className="IncDec" onClick={() => props.setlevel(prev => prev < 20 ? prev + 1 : prev)}> + </button>
        </div>
    )
}
