// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import AbilityItem from "./AbilityItem";
import Rolls from "./Rolls";
import Saving from './Saving'
import Hitdie from './Hitdie'
import Skills from './Skills'
import './AbilityScore.css'

export default function AbilityScore(props) {    
    const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    const [score, setScore] = useState([0,0,0,0,0,0])
    function abilityList() {
        let list = []
        for(let i=0;i<6;i++){
            list.push(<AbilityItem ability={abilities[i]} 
                                    key={i}
                                    bonus = {props.raceBonus[i]} 
                                    abilityMod={props.abilityMod} 
                                    score={score}
                                    setScore={setScore}
                                    index={i}/>)
        }
        return list
    }
    useEffect(() => {
        let newMod = []
        let newScore = []
        for(let i=0;i<6;i++){
            newMod[i] =  Math.floor((score[i]+props.raceBonus[i]-10)/2) 
            newScore[i] = props.raceBonus[i]+ score[i]
        }
        props.setabilityMod(newMod)
        props.setTotalScore(newScore)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score,props.raceBonus])
    const list = abilityList()
    return (
        <div className="Ability"> 
            <h2>Ability Scores and Modifiers:</h2>
            <Rolls/>
            <h3>Allocate Rolls:</h3>
            Roll + Bonuses = Ability Score<br/>
            <h4>Suggestions:</h4> {props.classType.scores_desc}
            
            <div className="AbilityList">
                {list}
            </div>
            <Saving saving={props.saving} abilityMod={props.abilityMod}/>
            <h4>Initiative:</h4> {props.abilityMod[1]} (Dex)<br/>
            <Hitdie hitdie={props.classType? props.classType.hit_die:0} conMod={props.abilityMod[2]} level={props.level} sethp={props.sethp} hp={props.hp}/>
            <Skills />
        </div>
    )
}
