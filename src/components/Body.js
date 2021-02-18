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
    const [level, setlevel] = useState(1)
    const [race, setRace] = useState(null)
    const [raceBonus, setraceBonus] = useState([0,0,0,0,0,0]) 
    const [classType,setClassType] = useState(null)
    const [saving, setsaving] = useState([0,0,0,0,0,0])
    // [str,dex,con,int,wis,cha]
    // const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    const [totalScore, setTotalScore] = useState([0,0,0,0,0,0])
    const [abilityMod, setabilityMod] = useState([-5,-5,-5,-5,-5,-5])
    const [hp, sethp] = useState(0)
    const [name, setName] = useState('')
    const [alignment, setAlignment] = useState(null)
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log(classType)
    }, [classType])
    return (
        <div className="bodyMain">
            <Level level={level} setlevel={setlevel}/>
            <Races race={race} setRace={setRace} setraceBonus={setraceBonus} url={url+'races/'}/>
            {race && <Classes classType={classType} 
                        setClassType={setClassType} 
                        setsaving={setsaving} 
                        url={url+'classes/'}/>}
            {classType && <Ability raceBonus={raceBonus} 
                            abilityMod={abilityMod} 
                            setabilityMod={setabilityMod} 
                            saving={saving} 
                            setTotalScore={setTotalScore} 
                            classType={classType} 
                            level={level}
                            sethp={sethp}
                            hp={hp}/>}
            {hp? <Information setName={setName} url={url} alignment={alignment} setAlignment={setAlignment}/>:null}
            {alignment && <Gear />}
            {/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}
            
        </div>
    )
}

