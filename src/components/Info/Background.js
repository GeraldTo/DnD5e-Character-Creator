import React from 'react'

export default function Background(props) {
    return (
        <div>
            <h3>Choose Background</h3>
            <h4>Race Suggestion:</h4> {props.classType.background}
        </div>
    )
}
