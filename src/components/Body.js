/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Races from "./Races/Races";
import Classes from './Classess/Classes'
import Ability from './AbilityScore/AbilityScores'
import ExportCSV from './ExportCSV';
import Gear from './Gear/Gear'
import Information from './Info/Information'
import Level from './Level'


export default function Body() {
    const url = 'https://www.dnd5eapi.co/api/'
    const [level, setlevel] = useState(1)
    const [race, setRace] = useState(null)
    const [lang, setLang] = useState([])
    const [classType, setClassType] = useState(null)
    const [feats, setFeats] = useState([])
    const [prof, setProf] = useState([])
    // [str,dex,con,int,wis,cha]
    // const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    const [totalScore, setTotalScore] = useState(null)
    const [skills, setSkills] = useState([])
    const [hp, sethp] = useState(0)
    const [name, setName] = useState('')
    const [alignment, setAlignment] = useState(null)
    const [data, setData] = useState(0)

    return (
        <div className="bodyMain">
            <Level level={level} setlevel={setlevel} />
            <Races
                race={race}
                setRace={setRace}
                setLang={setLang}
                url={url}
            />
            <Classes
                classType={classType}
                setClassType={setClassType}
                race={race}
                prof={prof}
                setProf={setProf}
                level={level}
                feats={feats}
                setFeats={setFeats}
                url={url}
            />
            <Ability
                classType={classType}
                race={race}
                url={url}
                totalScore={totalScore}
                setTotalScore={setTotalScore}
                level={level}
                feats={feats}
                skills={skills}
                setSkills={setSkills}
                hp={hp}
                sethp={sethp}
            />

            {/* <Information
                url={url}
                setName={setName}
                classType={classType}
                race={race}
                alignment={alignment}
                setLang={setLang}
                lang={lang}
                setAlignment={setAlignment} /> */}
            {alignment && <Gear />}
            {/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}
        </div>
    )
}

