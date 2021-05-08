import React, { useState } from 'react'
import styles from '../Body.module.css'
import { Table, Button } from 'react-bootstrap';
import Traits from './Traits'

export default function RaceInfo(props) {
    const [toggle, setToggle] = useState(false)
    const currentRace = props.race
    const bonusDesc = currentRace.ability_bonuses.map(current => ('+' + current.bonus + ' ' + current.ability_score.name))
    const head = ["Selected Race", "Speed", "Size", "Race Bonus", "Traits"]
    const extra =
        <div>
            <h4>Alignment:</h4> {currentRace.alignment.split('. ')[0]}<br />
            <h4>Age:</h4> {currentRace.age.split('. ')[currentRace.age.split('. ').length - 1]}<br />
            <h4>Size:</h4> {currentRace.size_description.split('. ')[0]}<br />
            <h4>Langauge:</h4> {currentRace.language_desc.split('. ')[0]}<br />
            <Traits race={props.race} traits={props.traits} setTraits={props.setTraits} />
        </div>

    const raceTable =
        <Table>
            <thead>
                <tr>
                    {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><h3>{currentRace.name}</h3></td>
                    <td>{currentRace.speed}ft</td>
                    <td>{currentRace.size}</td>
                    <td>{bonusDesc.join(', ')}</td>
                    <td>{currentRace.traits.length ? currentRace.traits.map((e) => e.name).join(', ') : 'None'}</td>
                </tr>
            </tbody>
        </Table>
    return (
        <div className={styles.Description}>
            {raceTable}
            <Button variant="secondary" onClick={() => setToggle(prev => !prev)}>More Info</Button>
            {toggle && extra}
        </div>
    )
}
