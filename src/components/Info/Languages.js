import React from 'react'

export default function Languages(props) {
    return (
        <div>
            
            <h4>Current Languages:</h4> {props.lang.join(', ')}
        </div>
    )
}
