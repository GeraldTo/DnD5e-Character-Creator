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
    return (
        <div >
            <input type="checkbox" onChange={() => handleCheck()} />
            <div className="saveNum">
                {props.skills[props.index].total < 0 ? props.skills[props.index].total : '+' + props.skills[props.index].total}
            </div> {props.skills[props.index].data.name} ({props.skills[props.index].data.ability_score.name}) {props.skills[props.index].prof && <>Expert<input type="checkbox" onChange={() => setExpert(prev => !prev)} /></>}
            {props.display && <div><h4>Description:</h4> {props.skills[props.index].data.desc}</div>}
        </div>
    )
}
