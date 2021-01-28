import React from 'react'

export default function Level(props) {
    return (
        <div>
            <button className="IncDec" onClick={() => props.setlevel(prev => prev>1 ? prev - 1: prev)}> - </button>
                {props.level}
            <button className="IncDec" onClick={ () => props.setlevel(prev => prev + 1)}> + </button> 
        </div>
    )
}
