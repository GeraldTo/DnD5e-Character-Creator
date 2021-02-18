import React from 'react'
import Name from './Name'
import Alignment from './Alignment'
import Languages from './Languages'
import Age from './Age'
import Background from './Background'

export default function Information(props) {
    return (
        <div className="Information">
            <h2>Choose Information</h2>
            <Name setName={props.setName}/>
            <Alignment race={props.race} url={props.url+'alignments/'} alignment={props.alignment} setAlignment={props.setAlignment} />
            <Languages race={props.race} setLang={props.setLang} lang={props.lang} />
            <Background classType={props.classType}/>
        </div>
    )
}
