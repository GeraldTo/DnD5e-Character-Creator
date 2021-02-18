import React from 'react'

export default function Languages(props) {
    return (
        <div>
            <h3>Choose Langauges</h3>
            <h4>Race Languages:</h4> {props.race.language_desc}<br />
            <h4>Current Languages:</h4> {props.lang.join(', ')}
        </div>
    )
}
