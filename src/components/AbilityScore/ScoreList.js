import React, { useState, useEffect } from 'react'
import AbilityItem from "./AbilityItem";

export default function ScoreList(props) {
    const [score, setScore] = useState([10, 10, 10, 10, 10, 10])
    const [raceBonus, setraceBonus] = useState([0,0,0,0,0,0])
    function abilityList() {
        let list = []
        for (let i = 0; i < 6; i++) {
            list.push(<AbilityItem  key={i} bonus={raceBonus[i]} abilityMod={props.abilityMod} score={score} setScore={setScore} index={i} />)
        }
        return list
    }
    useEffect(() => {
        let newMod = []
        let newScore = []
        for (let i = 0; i < 6; i++) {
            newMod[i] = Math.floor((score[i] + raceBonus[i] - 10) / 2)
            newScore[i] = raceBonus[i] + score[i]
        }
        props.setabilityMod(newMod)
        props.setTotalScore(newScore)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, raceBonus])
    useEffect(() => {
        if(props.race){
            const {ability_bonuses} = props.race
            // eslint-disable-next-line react-hooks/exhaustive-deps
            let bonus = [0,0,0,0,0,0]
            for (let i = 0; i < props.race.ability_bonuses.length; i++) {
                ability_bonuses[i].ability_score.index==="str" ?  bonus[0]=ability_bonuses[i].bonus
                :ability_bonuses[i].ability_score.index==="dex" ? bonus[1] = ability_bonuses[i].bonus
                :ability_bonuses[i].ability_score.index==="con" ? bonus[2] = ability_bonuses[i].bonus
                :ability_bonuses[i].ability_score.index==="int" ? bonus[3] = ability_bonuses[i].bonus
                :ability_bonuses[i].ability_score.index==="wis" ? bonus[4] = ability_bonuses[i].bonus
                :ability_bonuses[i].ability_score.index==="cha" ? bonus[5] = ability_bonuses[i].bonus
                : bonus[5] =  bonus[5]*1 /* needs a return statement in turnary*/ 
            }
            setraceBonus(bonus)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.race])
    const list = abilityList()
    return (
        <div>
            <h3>Allocate Rolls:</h3>
            Roll + Bonuses = Ability Score<br />
            <h4>Suggestions:</h4> {props.classType.scores_desc}<br />
            <h4>Can Distribute {(props.feats.filter(e=> e.index.split('-')[1]==='ability')).length} Points to any Score(s)</h4>  (Can't increse past 20)
            <div className="AbilityList">{list}</div>
        </div>
    )
}
