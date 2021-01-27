import React,{useState, useEffect} from 'react'
import Ability from './AbilityScores'
import Classes from './Classes'
import Races from "./Races";
import {ExportCSV} from './ExportCSV';
import Gear from './Gear'
import Information from './Information'
import Level from './Level'


export default function Body() {
    
    const [race, setRace] = useState(null)
    const [classType,setClassType] = useState(null)
    // [str,dex,con,int,wis,cha]
    const types = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    const [raceBonus, setraceBonus] = useState([0,0,0,0,0,0]) 
    const [abilityMod, setabilityMod] = useState([-5,-5,-5,-5,-5,-5])
    const [saving, setsaving] = useState([0,0,0,0,0,0])
    const [level, setlevel] = useState(1)
    const [name, setName] = useState('')
    const [totalScore, setTotalScore] = useState([0,0,0,0,0,0])
    // eslint-disable-next-line no-unused-vars
    const test = [
        {
            Type: 'Scores',
        },
        {
            Type: 'Modifiers',
        }
        ] 
    const [data, setData] = useState([{error:"set class and race"}])
    useEffect(() => {
        
        if(race && classType){
            setData([
                Object.assign({}, types),
                Object.assign({}, totalScore),
                Object.assign({}, abilityMod),
                Object.assign({}, saving),
            ])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [race,classType,totalScore])
    return (
        <div className="bodyMain">
            <h2>Set Starting Level:</h2><br/>
            <Level level={level} setlevel={setlevel}/>
            <h2>Race </h2>
            <Races path='races/' race={race} setRace={setRace} setraceBonus={setraceBonus} />
            <h2>Class </h2>
            <Classes path = 'classes/' classType={classType} setClassType={setClassType} setsaving={setsaving} />
            <h2>Ability Scores and Modifiers:</h2>
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

