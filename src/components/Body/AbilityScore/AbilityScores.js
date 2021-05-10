// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import Rolls from "./Rolls";
import Saving from './Saving'
import Hitdie from './Hitdie'
import Skills from './Skills'
import ScoreList from './ScoreList'
import './AbilityScore.css'

export default function AbilityScore(props) {
    const url = process.env.REACT_APP_API
    useEffect(() => {
        const abilities = ["str", "dex", "con", "int", "wis", "cha"];
        const fullName = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
        props.setTotalScore([...Array(6)].map(function (_, i) { return { index: abilities[i], fullName: fullName[i], total: 10, mod: 0, saving: false } }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (props.info.alignment) {
        return (
            <div className="Ability">
                <h2>Ability Scores and Modifiers:</h2>
                <Rolls />
                <ScoreList race={props.race} classType={props.classType} feats={props.feats} totalScore={props.totalScore} setTotalScore={props.setTotalScore} />
                <Saving totalScore={props.totalScore} setTotalScore={props.setTotalScore} classType={props.classType} />
                <h4>Initiative:</h4> {props.totalScore[1].mod < 0 ? props.totalScore[1].mod : '+' + props.totalScore[1].mod} (Dex Mod)<br />
                <Hitdie hitdie={props.classType.hit_die} conMod={props.totalScore[2].mod} level={props.level} sethp={props.sethp} hp={props.hp} />
                <Skills url={url} classType={props.classType} totalScore={props.totalScore} level={props.level} skills={props.skills} setSkills={props.setSkills} />
            </div>
        )
    }
    else {
        return <div></div>
    }

}
