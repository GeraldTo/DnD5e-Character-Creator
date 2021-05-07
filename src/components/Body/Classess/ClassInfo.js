import React, { useEffect } from 'react'

export default function ClassInfo(props) {
    useEffect(() => {
        if (props.classType) {
            let proficiencies = []
            for (let i = 0; i < props.classType.proficiencies.length; i++) {
                proficiencies.push(props.classType.proficiencies[i].index)
            }
            props.setProf(proficiencies)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.classType])

    if (props.classType) {
        let saving = []
        for (let i = 0; i < props.classType.saving_throws.length; i++) {
            saving.push(props.classType.saving_throws[i].name)
        }
        return (
            <div className="description">
                <h3>{props.classType.name}</h3>
                <h4>Hit Dice:</h4> 1d{props.classType.hit_die}<br />
                <h4>Saving Throws:</h4> {saving.join(', ')} (Use Modifiers)<br />
                <h4>Suggested Ability Scores:</h4> {props.classType.scores}<br />
                <h4>Usual Background:</h4> {props.classType.background} <br />
                <h4>Proficiencies:</h4> {props.prof.join(', ')}
            </div>
        )
    }
    else { return (<div> </div>) }
}
