import React from 'react'
import Name from './Name'
import Alignment from './Alignment'
import Languages from './Languages'
import Background from './Background'

export default function Information(props) {
    const url = process.env.REACT_APP_API
    if (props.classType) {
        return (
            <div className="Information">
                <h2>Choose Information</h2>
                <Name setName={props.setName} />
                <Background classType={props.classType} background={props.background} setBackground={props.setBackground} />
                <Languages url={url + 'languages/'} race={props.race} langNum={props.background.langNum} setLang={props.setLang} lang={props.lang} />
                <Alignment race={props.race} url={url + 'alignments/'} alignment={props.alignment} setAlignment={props.setAlignment} />
            </div>
        )
    }
    else return <div></div>
}
