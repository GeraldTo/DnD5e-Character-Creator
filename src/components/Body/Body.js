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

    const [level, setlevel] = useState(1)
    const [race, setRace] = useState(null)
    const [lang, setLang] = useState([])
    const [classType, setClassType] = useState(null)
    const [feats, setFeats] = useState([])
    // const [prof, setProf] = useState([])
    const [info, setInfo] = useState(null)
    // [str,dex,con,int,wis,cha]
    const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
    const [totalScore, setTotalScore] = useState(null)
    const [skills, setSkills] = useState([])
    const [hp, sethp] = useState(0)
    const [background, setBackground] = useState({ name: "", prof: [], langNum: 0, personalities: "", ideals: "", bonds: "", flaws: "" })
    const [data, setData] = useState(0)
    // useEffect(() => {
    //     console.log(url)
    // }, [url])
    return (
        <div >
            <Level level={level} setlevel={setlevel} />
            <Races
                race={race}
                setRace={setRace}
            />
            {race &&
                <Classes
                    classType={classType}
                    setClassType={setClassType}
                    level={level}
                    feats={feats}
                    setFeats={setFeats}
                />}
            {classType &&
                <Information
                    classType={classType}
                    race={race}
                    info={info}
                    setInfo={setInfo}
                    lang={lang}
                    setLang={setLang}
                    background={background}
                    setBackground={setBackground}
                />}
            {info &&
                <Ability
                    classType={classType}
                    race={race}
                    feats={feats}
                    info={info}
                    totalScore={totalScore}
                    setTotalScore={setTotalScore}
                    level={level}
                    skills={skills}
                    setSkills={setSkills}
                    hp={hp}
                    sethp={sethp}
                />}

            {/* {alignment && <Gear />} */}
            {/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}
        </div>
    )
}

