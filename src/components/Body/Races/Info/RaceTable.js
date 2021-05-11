import React from 'react'
import { Table, ListGroup } from 'react-bootstrap';

export default function RaceTable(props) {
    const currentRace = props.race
    const bonusDesc = currentRace.ability_bonuses.map(current => ('+' + current.bonus + ' ' + current.ability_score.name))
    const head = ["Selected Race", "Speed", "Size", "Race Bonus", "Traits"]
    return (
        <Table >
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
                    <td>{currentRace.traits.length ?
                        <ListGroup variant="flush">
                            {currentRace.traits.map((e, i) => <ListGroup.Item key={i}>{e.name}</ListGroup.Item>)}
                        </ListGroup>
                        : 'None'}</td>
                </tr>
            </tbody>
        </Table>
    )
}
