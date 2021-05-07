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
    const [prof, setProf] = useState([])
    // [str,dex,con,int,wis,cha]
    const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
    const [totalScore, setTotalScore] = useState(null)
    const [skills, setSkills] = useState([])
    const [hp, sethp] = useState(0)
    const [name, setName] = useState('')
    const [alignment, setAlignment] = useState(null)
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
                setLang={setLang}
            />
            {race &&
                <Classes
                    classType={classType}
                    setClassType={setClassType}
                    prof={prof}
                    setProf={setProf}
                    level={level}
                    feats={feats}
                    setFeats={setFeats}
                />}
            <Information
                setName={setName}
                classType={classType}
                race={race}
                alignment={alignment}
                setLang={setLang}
                lang={lang}
                setAlignment={setAlignment}
                background={background}
                setBackground={setBackground} />
            {/*<Ability
                classType={classType}
                race={race}
                alignment={alignment}
                url={url}
                totalScore={totalScore}
                setTotalScore={setTotalScore}
                level={level}
                feats={feats}
                skills={skills}
                setSkills={setSkills}
                hp={hp}
                sethp={sethp}
            /> */}

            {/* {alignment && <Gear />} */}
            {/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}
        </div>
    )
}

