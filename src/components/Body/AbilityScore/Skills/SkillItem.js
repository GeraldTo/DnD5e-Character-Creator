/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export default function SkillItem(props) {
    const ability = (props.totalScore.map(e => e.index)).indexOf(props.skills[props.index].data.ability_score.index)
    const [expert, setExpert] = useState(false)
    function handleCheck() {
        let skillNum = [...props.skills]
        skillNum[props.index].prof = !skillNum[props.index].prof
        props.setSkills(skillNum)
    }
    useEffect(() => {
        let skillNum = [...props.skills]
        skillNum[props.index].total = skillNum[props.index].prof ? props.totalScore[ability].mod + (expert ? 2 * props.profBonus : props.profBonus) : props.totalScore[ability].mod
        props.setSkills(skillNum)
        !skillNum[props.index].prof && setExpert(false)
    }, [props.totalScore[ability].mod, props.profBonus, props.skills[props.index].prof, expert])

    function checked() {
        return props.skills[props.index].prof
            || props.proficiencies.indexOf(props.skills[props.index].data.index) > -1
    }

    return (
        <tr >
            <td  >
                <input
                    style={{ marginLeft: "1rem" }}
                    type="checkbox"
                    checked={checked()}
                    disabled={props.proficiencies.indexOf(props.skills[props.index].data.index) > -1}
                    onChange={() => handleCheck()} />
            </td>
            <td >
                {props.skills[props.index].total < 0 ? props.skills[props.index].total : '+' + props.skills[props.index].total}
            </td>
            <td >
                {props.skills[props.index].data.name}
            </td>
            <td>
                ({props.skills[props.index].data.ability_score.name})
            </td>
            <td style={{ width: "3rem" }}>
                {checked() && <input
                    style={{ marginLeft: "1rem" }}
                    type="checkbox"
                    onChange={() => setExpert(prev => !prev)} />}
            </td>
            {props.display && <td>{props.skills[props.index].data.desc}</td>}
        </tr>
    )
}
