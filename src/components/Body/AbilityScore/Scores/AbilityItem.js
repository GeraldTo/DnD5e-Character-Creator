import React from 'react'

export default function AbilityItem(props) {
    function mod(input) {
        return input < 0 ? input : '+' + input
    }

    function handleChange(isDec) {
        props.setFirst(true)
        props.setScore(props.score.map(function (e, i) {
            return i === props.index ? (isDec ? (e > 0 ? e - 1 : e) : ((e + props.bonus[props.index]) < 20 ? e + 1 : e)) : e
        }))
    }
    return (
        <div className="AbilityItem">
            <div className="AbilityNames">{props.totalScore[props.index].fullName}</div>
            <div><button className="IncDec" onClick={() => handleChange(true)}> - </button>
                {props.score[props.index]}
                <button className="IncDec" onClick={() => handleChange(false)}> + </button> </div>
            <div>+ {props.bonus[props.index]} (Bonus) </div>
            <div className="Score">{props.totalScore[props.index].total}</div>
            <div>{mod(props.totalScore[props.index].mod)} (Mod)</div>
        </div>
    )
}
