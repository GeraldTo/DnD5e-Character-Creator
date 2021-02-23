/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Races from "./Races/Races";
import Classes from './Classess/Classes'
import Ability from './AbilityScore/AbilityScores'
import { ExportCSV } from './ExportCSV';
import Gear from './Gear/Gear'
import Information from './Info/Information'
import Level from './Level'


export default function Body() {
    const url = 'https://www.dnd5eapi.co/api/'
    const [level, setlevel] = useState(1)
    const [profBonus, setProfBonus] = useState(2)
    const [race, setRace] = useState(null)
    const [lang, setLang] = useState([])
    const [classType, setClassType] = useState(null)
    const [saving, setsaving] = useState([0, 0, 0, 0, 0, 0])
    const [feats, setFeats] = useState([])
    const [prof, setProf] = useState([])
    // [str,dex,con,int,wis,cha]
    // const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
    const [totalScore, setTotalScore] = useState([10, 10, 10, 10, 10, 10])
    const [abilityMod, setabilityMod] = useState([0, 0, 0, 0, 0, 0])
    const [hp, sethp] = useState(0)
    const [name, setName] = useState('')
    const [alignment, setAlignment] = useState(null)
    const [data, setData] = useState(0)
    useEffect(() => {

    }, [classType, race])
    return (
        <div className="bodyMain">
            <Level level={level} setlevel={setlevel} setProfBonus={setProfBonus} />
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
                profBonus={profBonus}
                setProf={setProf}
                level={level}
                feats={feats}
                setFeats={setFeats}
                url={url}
            />
            <Ability
                classType={classType}
                race={race}
                abilityMod={abilityMod}
                setabilityMod={setabilityMod}
                saving={saving}
                setsaving={setsaving}
                totalScore={totalScore}
                setTotalScore={setTotalScore}
                level={level}
                feats={feats}
                hp={hp}
                sethp={sethp}
            />
            {hp ? <Information
                url={url}
                setName={setName}
                classType={classType}
                race={race}
                alignment={alignment}
                setLang={setLang}
                lang={lang}
                setAlignment={setAlignment} /> : null}
            {alignment && <Gear />}
            {/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}

        </div>
    )
}

