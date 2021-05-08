import React from 'react'
import Features from './Features'

// classType feats
export default function ClassExtra(props) {
    const currentClass = props.classType
    const skillIndex = currentClass.proficiency_choices[0].from[0].index.indexOf('skill') === 0 ? 0 : 2
    return (
        <div>
            <h4>Suggested Ability Scores:</h4> {currentClass.scores}<br />
            <h4>Usual Background:</h4> {currentClass.background} <br />
            <h4>Skills:</h4> Choose {currentClass.proficiency_choices[skillIndex].choose} {" "}
            from: {currentClass.proficiency_choices[skillIndex].from.map(e => (e.name.replace('Skill: ', ''))).join(', ')}
            {currentClass.proficiency_choices.length > 1 &&
                <div>
                    <h4>Instruments:</h4> Choose {currentClass.proficiency_choices[1].choose} {" "}
                    from: {currentClass.proficiency_choices[1].from.map(e => (e.name)).join(', ')}
                </div>
            }
            {currentClass.proficiency_choices.length > 2 &&
                <div>
                    <h4>Tools:</h4> Choose {currentClass.proficiency_choices[0].choose} {" "}
                    from: {currentClass.proficiency_choices[0].from.map(e => (e.name)).join(', ')}
                </div>
            }
            <Features feats={props.feats} />
        </div>
    )
}
