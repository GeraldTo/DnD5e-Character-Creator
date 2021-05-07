import React from 'react'

export default function RaceInfo(props) {
    const bonusDesc = props.race.ability_bonuses.map(current => ('+' + current.bonus + ' ' + current.ability_score.name))
    // console.log(props.race)
    return (
        <div className="description">
            <h3>{props.race.name}</h3>
            <h4>Speed:</h4> {props.race.speed}ft<br />
            <h4>Race Bonus on Ability Score:</h4> {bonusDesc.join(', ')} <br />
            <h4>Size:</h4> {props.race.size}<br />
            <h4>Default Languages:</h4> {props.race.language_desc.split('. ')[0]}<br />
            <h4>Usual Alignment:</h4> {props.race.alignment.split('. ')[0]}<br />
        </div>
    )
}
