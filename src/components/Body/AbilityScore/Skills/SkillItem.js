/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export default function SkillItem(props) {
    const currentSkill = props.skills[props.index]
    const ability = (props.totalScore.map(e => e.index)).indexOf(currentSkill.data.ability_score.index)
    const [expert, setExpert] = useState(false)
    function handleCheck() {
        let skillNum = [...props.skills]
        skillNum[props.index].prof =
            props.proficiencies.indexOf(currentSkill.data.index) > -1 ?
                true : !skillNum[props.index].prof
        props.setSkills(skillNum)
    }
    useEffect(() => {
        let skillNum = [...props.skills]
        skillNum[props.index].prof = checked() ? true : false
        props.setSkills(skillNum)
    }, [])
    useEffect(() => {
        let skillNum = [...props.skills]
        skillNum[props.index].total = skillNum[props.index].prof ? props.totalScore[ability].mod + (expert ? 2 * props.profBonus : props.profBonus) : props.totalScore[ability].mod
        props.setSkills(skillNum)
        !skillNum[props.index].prof && setExpert(false)
    }, [props.totalScore[ability].mod, props.profBonus, currentSkill.prof, expert])

    function checked() {
        return currentSkill.prof
            || props.proficiencies.indexOf(currentSkill.data.index) > -1
    }
    return (
        <tr >
            <td  >
                <input
                    style={{ marginLeft: "1rem" }}
                    type="checkbox"
                    checked={checked()}
                    // disabled={props.proficiencies.indexOf(currentSkill.data.index) > -1}
                    onChange={() => handleCheck()} />
            </td>
            <td >
                {currentSkill.total < 0 ? currentSkill.total : '+' + currentSkill.total}
            </td>
            <td >
                {currentSkill.data.name}
            </td>
            <td>
                ({currentSkill.data.ability_score.name})
            </td>
            <td style={{ width: "3rem" }}>
                {checked() && <input
                    style={{ marginLeft: "1rem" }}
                    type="checkbox"
                    onChange={() => setExpert(prev => !prev)} />}
            </td>
            {props.display && <td>{currentSkill.data.desc}</td>}
        </tr>
    )
}
