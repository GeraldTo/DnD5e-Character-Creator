/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import AbilityItem from "./AbilityItem";

export default function ScoreList(props) {
    const [score, setScore] = useState([10, 10, 10, 10, 10, 10])
    const [raceBonus, setraceBonus] = useState([0, 0, 0, 0, 0, 0])
    let list = Array.apply(null, Array(6))
    list = list.map(function (x, i) {
        return (<AbilityItem key={i} bonus={raceBonus} totalScore={props.totalScore} score={score} setScore={setScore} index={i} />)
    })
    useEffect(() => {
        props.setTotalScore(props.totalScore.map(function (e, i) {
            e.total = score[i] + raceBonus[i]
            e.mod = Math.floor((e.total - 10) / 2)
            return e
        }))
    }, [score, raceBonus])
    useEffect(() => {
        const { ability_bonuses } = props.race
        let bonus = [0, 0, 0, 0, 0, 0]
        for (let i = 0; i < props.race.ability_bonuses.length; i++) {
            const index = (props.totalScore.map(e => e.index)).indexOf(ability_bonuses[i].ability_score.index)
            bonus[index] = ability_bonuses[i].bonus
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
