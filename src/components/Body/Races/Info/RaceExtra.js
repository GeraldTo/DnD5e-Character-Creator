import React from 'react'
import Traits from './Traits'
import { ListGroup } from 'react-bootstrap';


export default function RaceExtra(props) {
    const currentRace = props.race
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><h4>Alignment:</h4> {currentRace.alignment.split('. ')[0]} </ListGroup.Item>
            <ListGroup.Item><h4>Age:</h4> {currentRace.age.split('. ')[currentRace.age.split('. ').length - 1]} </ListGroup.Item>
            <ListGroup.Item><h4>Size:</h4> {currentRace.size_description.split('. ')[0]} </ListGroup.Item>
            <ListGroup.Item><h4>Langauge:</h4> {currentRace.language_desc.split('. ')[0]} </ListGroup.Item>
            <ListGroup.Item><h4>Starting Proficiencies:</h4>{' '}
                {currentRace.starting_proficiencies.length > 0 ?
                    currentRace.starting_proficiencies.map(e => e.name.includes('Skill') ? e.name.replace('Skill: ', '') : e.name).join(', ')
                    : 'None'}</ListGroup.Item>
            {currentRace.starting_proficiency_options && (
                <ListGroup.Item>
                    <h4>Starting Proficiency Choices:</h4>{' '}
                    Race choose {currentRace.starting_proficiency_options.choose} from:{" "}
                    {currentRace.starting_proficiency_options.from
                        .map((e) => e.name.replace("Skill: ", ""))
                        .join(", ")}{" "}
                </ListGroup.Item>
            )}
            <ListGroup.Item><Traits race={currentRace} traits={props.traits} setTraits={props.setTraits} /></ListGroup.Item>
        </ListGroup>
    )
}
