import React from 'react'
import Name from './Name'

export default function Information(props) {
    return (
        <div className="Information">
            <h2>Choose Information</h2>
            <Name setName={props.setName}/>
        </div>
    )
}
