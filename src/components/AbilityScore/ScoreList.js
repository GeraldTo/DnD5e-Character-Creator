/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import AbilityItem from "./AbilityItem";

export default function ScoreList(props) {
    const [score, setScore] = useState([10, 10, 10, 10, 10, 10])
    const [raceBonus, setraceBonus] = useState([0, 0, 0, 0, 0, 0])
    let list = Array.apply(null, Array(6))
    list = list.map(function (x, i) {
        return (<AbilityItem key={i} bonus={raceBonus[i]} abilityMod={props.abilityMod} score={score} setScore={setScore} index={i} />)
    })
    useEffect(() => {
        props.setabilityMod(score.map((e, i) => { return Math.floor((e + raceBonus[i] - 10) / 2) }))
        props.setTotalScore(score.map((e, i) => { return e + raceBonus[i] }))
    }, [score, raceBonus])
    useEffect(() => {
        const { ability_bonuses } = props.race
        let bonus = [0, 0, 0, 0, 0, 0]
        for (let i = 0; i < props.race.ability_bonuses.length; i++) {
            const current = ability_bonuses[i]
            current.ability_score.index === "str" ? bonus[0] = current.bonus
                : current.ability_score.index === "dex" ? bonus[1] = current.bonus
                    : current.ability_score.index === "con" ? bonus[2] = current.bonus
                        : current.ability_score.index === "int" ? bonus[3] = current.bonus
                            : current.ability_score.index === "wis" ? bonus[4] = current.bonus
                                : current.ability_score.index === "cha" ? bonus[5] = current.bonus
                                    : bonus[5] = bonus[5] * 1 /* needs a return statement in turnary*/
        }
        setraceBonus(bonus)
    }, [props.race])
    return (
        <div>
            <h3>Allocate Rolls:</h3>
            Roll + Bonuses = Ability Score<br />
            <h4>Suggestions:</h4> {props.classType.scores}<br />
            <h4>Can Distribute {(props.feats.filter(e => e.index.split('-')[1] === 'ability')).length} Points to any Score(s)</h4>  (Can't increse past 20)
            <div className="AbilityList">{list}</div>
        </div>
    )
}
