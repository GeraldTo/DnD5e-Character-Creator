/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import Races from "./Races/Races";
import Classes from './Classess/Classes'
import Ability from './AbilityScore/AbilityScores'
import {ExportCSV} from './ExportCSV';
import Gear from './Gear/Gear'
import Information from './Info/Information'
import Level from './Level'


export default function Body() {
    const url = 'https://www.dnd5eapi.co/api/'
    const [race, setRace] = useState(null)
    const [classType,setClassType] = useState(null)
    // [str,dex,con,int,wis,cha]
    const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    const [raceBonus, setraceBonus] = useState([0,0,0,0,0,0]) 
    const [abilityMod, setabilityMod] = useState([-5,-5,-5,-5,-5,-5])
    const [saving, setsaving] = useState([0,0,0,0,0,0])
    const [level, setlevel] = useState(1)
    const [name, setName] = useState('')
    const [totalScore, setTotalScore] = useState([0,0,0,0,0,0])
    const [data, setData] = useState(0)
    return (
        <div className="bodyMain">
            <Level level={level} setlevel={setlevel}/>
            <Races race={race} setRace={setRace} setraceBonus={setraceBonus} url={url+'races/'}/>
            <Classes classType={classType} setClassType={setClassType} setsaving={setsaving} url={url+'classes/'}/>
            <Ability raceBonus={raceBonus} 
                        abilityMod={abilityMod} 
                        setabilityMod={setabilityMod} 
                        saving={saving} 
                        setTotalScore={setTotalScore} 
                        classType={classType} 
                        level={level}
                        setlevel={setlevel}/>
            <h2>Choose Information</h2>
            <Information setName={setName}/>
            <h2>Pick Gear</h2>
            <Gear />
            <ExportCSV csvData={data} fileName={name? name:'Character'} />
        </div>
    )
}

