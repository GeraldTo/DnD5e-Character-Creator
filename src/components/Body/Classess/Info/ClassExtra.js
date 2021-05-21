import React from 'react'
import Features from './Features'
import { ListGroup } from 'react-bootstrap';


// classType classLevels
export default function ClassExtra(props) {
    const currentClass = props.classType
    const skillIndex = currentClass.proficiency_choices[0].from[0].index.indexOf('skill') === 0 ? 0 : 2
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><h4>Suggested Ability Scores:</h4> {currentClass.scores}</ListGroup.Item>
            <ListGroup.Item><h4>Proficiency Bonus:</h4> +{1 + Math.ceil(props.level / 4)}</ListGroup.Item>
            <ListGroup.Item><h4>Usual Background:</h4> {currentClass.background} </ListGroup.Item>
            <ListGroup.Item><h4>Proficiencies: </h4> {currentClass.proficiencies.map((e, i) => e.name).join(', ')}</ListGroup.Item>
            <ListGroup.Item><h4>Skills:</h4> Choose {currentClass.proficiency_choices[skillIndex].choose} {" "}
            from: {currentClass.proficiency_choices[skillIndex].from.map(e => (e.name.replace('Skill: ', ''))).join(', ')}</ListGroup.Item>
            {currentClass.proficiency_choices.length > 1 &&
                <ListGroup.Item>
                    <h4>Instruments:</h4> Choose {currentClass.proficiency_choices[1].choose} {" "}
                    from: {currentClass.proficiency_choices[1].from.map(e => (e.name)).join(', ')}
                </ListGroup.Item>
            }
            {currentClass.proficiency_choices.length > 2 &&
                <ListGroup.Item>
                    <h4>Tools:</h4> Choose {currentClass.proficiency_choices[0].choose} {" "}
                    from: {currentClass.proficiency_choices[0].from.map(e => (e.name)).join(', ')}
                </ListGroup.Item>
            }
            {props.classLevels && <ListGroup.Item><Features feats={props.classLevels.feats} /></ListGroup.Item>}
        </ListGroup>
    )
}
