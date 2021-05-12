// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import Saving from './Saving'
import Hitdie from './Hitdie'
import Skills from './Skills/Skills'
import ScoreList from './Scores/ScoreList'
import styles from '../Body.module.css'
import './AbilityScore.css'
import { ListGroup } from 'react-bootstrap';


export default function AbilityScore(props) {
    const url = process.env.REACT_APP_API
    const [firstScore, setFirstScore] = useState(false)
    const [firstHP, setFirstHP] = useState(false)
    useEffect(() => {
        const abilities = ["str", "dex", "con", "int", "wis", "cha"];
        const fullName = ["Str", "Dex", "Con", "Int", "Wis", "Cha"];
        props.setTotalScore([...Array(6)].map(function (_, i) { return { index: abilities[i], fullName: fullName[i], total: 10, mod: 0, saving: false } }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (props.info.alignment) {
        return (
            <ListGroup.Item className="Ability">
                <h2>Ability Scores and Modifiers:</h2>
                <ListGroup variant="flush" className={styles.Description}>
                    <ListGroup.Item >
                        <ScoreList
                            race={props.race}
                            classType={props.classType}
                            feats={props.feats}
                            setFirst={setFirstScore}
                            totalScore={props.totalScore}
                            setTotalScore={props.setTotalScore}
                        />
                    </ListGroup.Item>
                    {firstScore && <React.Fragment>
                        <ListGroup.Item >
                            <Saving
                                totalScore={props.totalScore}
                                setTotalScore={props.setTotalScore}
                                classType={props.classType}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <h4>Initiative:</h4> {props.totalScore[1].mod < 0 ? props.totalScore[1].mod : '+' + props.totalScore[1].mod} (Dex Mod)<br />
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Hitdie
                                hitdie={props.classType.hit_die}
                                conMod={props.totalScore[2].mod}
                                setFirst={setFirstHP}
                                level={props.level}
                                sethp={props.sethp}
                                hp={props.hp} />
                        </ListGroup.Item>
                        {firstHP && <ListGroup.Item >
                            <Skills
                                url={url}
                                proficiencies={props.background.proficiencies}
                                classType={props.classType}
                                totalScore={props.totalScore}
                                level={props.level}
                                skills={props.skills}
                                setSkills={props.setSkills}
                            />
                        </ListGroup.Item>}
                    </React.Fragment>}

                </ListGroup>
            </ListGroup.Item>
        )
    }
    else {
        return <div></div>
    }

}
