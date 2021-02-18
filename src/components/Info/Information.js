import React from 'react'
import Name from './Name'
import Alignment from './Alignment'

export default function Information(props) {
    return (
        <div className="Information">
            <h2>Choose Information</h2>
            <Name setName={props.setName}/>
            <Alignment url={props.url+'alignments/'} alignment={props.alignment} setAlignment={props.setAlignment} />
        </div>
    )
}
