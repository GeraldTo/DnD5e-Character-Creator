// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import Rolls from "./Rolls";
import Saving from './Saving'
import Hitdie from './Hitdie'
import Skills from './Skills'
import ScoreList from './ScoreList'
import './AbilityScore.css'

export default function AbilityScore(props) {
    if (props.classType) {
        return (
            <div className="Ability">
                <h2>Ability Scores and Modifiers:</h2>
                <Rolls />
                <ScoreList race={props.race} classType={props.classType} feats={props.feats} abilityMod={props.abilityMod} setabilityMod={props.setabilityMod}
                    totalScore={props.totalScore} setTotalScore={props.setTotalScore} />
                <Saving saving={props.saving} setsaving={props.setsaving} classType={props.classType} abilityMod={props.abilityMod} />
                <h4>Initiative:</h4> {props.abilityMod[1] < 0 ? props.abilityMod[1] : '+' + props.abilityMod[1]} (Dex Mod)<br />
                <Hitdie hitdie={props.classType ? props.classType.hit_die : 0} conMod={props.abilityMod[2]} level={props.level} sethp={props.sethp} hp={props.hp} />
                <Skills url={props.url} classType={props.classType} abilityMod={props.abilityMod} level={props.level} skills={props.skills} setSkills={props.setSkills} />
            </div>
        )
    }
    else {
        return <div></div>
    }

}
