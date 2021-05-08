import React from 'react'
import Traits from './Traits'

export default function RaceExtra(props) {
    const currentRace = props.race
    return (
        <div>
            <h4>Alignment:</h4> {currentRace.alignment.split('. ')[0]}<br />
            <h4>Age:</h4> {currentRace.age.split('. ')[currentRace.age.split('. ').length - 1]}<br />
            <h4>Size:</h4> {currentRace.size_description.split('. ')[0]}<br />
            <h4>Langauge:</h4> {currentRace.language_desc.split('. ')[0]}<br />
            <Traits race={currentRace} traits={props.traits} setTraits={props.setTraits} />
        </div>
    )
}
