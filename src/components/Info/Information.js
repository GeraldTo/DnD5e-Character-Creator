import React from 'react'
import Name from './Name'

export default function Information(props) {
    return (
        <div className="Information">
            <Name setName={props.setName}/>
        </div>
    )
}
