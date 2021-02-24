import React from 'react'
import Name from './Name'
import Alignment from './Alignment'
import Languages from './Languages'
import Background from './Background'

export default function Information(props) {
    if (props.classType) {
        return (
            <div className="Information">
                <h2>Choose Information</h2>
                <Name setName={props.setName} />
                <Background classType={props.classType} />
                <Languages url={props.url + 'languages/'} race={props.race} setLang={props.setLang} lang={props.lang} />
                <Alignment race={props.race} url={props.url + 'alignments/'} alignment={props.alignment} setAlignment={props.setAlignment} />
            </div>
        )
    }
    else return <div></div>
}
