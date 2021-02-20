import React,{useEffect} from 'react'

export default function RaceInfo(props) {
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
            props.setraceBonus(bonus)
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.race])
    if (props.race) {
        let bonusDesc = []
        for (let i = 0; i < props.race.ability_bonuses.length; i++) {
            bonusDesc.push('+'+props.race.ability_bonuses[i].bonus+' '+props.race.ability_bonuses[i].ability_score.name)
        }
        return (
            <div className="description">
                <h3>{props.race.name}</h3> 
                <h4>Description:</h4> {props.race.size_description}<br />
                <h4>Speed:</h4> {props.race.speed}ft<br />
                <h4>Race Bonus on Ability Score:</h4> {bonusDesc.join(', ')} <br />
                <h4>Size:</h4> {props.race.size}<br />
                <h4>Default Languages:</h4> {props.race.language_desc.split('. ')[0]}<br />
                <h4>Usual Alignment:</h4> {props.race.alignment.split('. ')[0]}<br />
            </div>
        )
    }
    else { return (<div> </div>) }
}