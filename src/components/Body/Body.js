/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Races from "./Races/Races";
import Classes from './Classess/Classes'
import Ability from './AbilityScore/AbilityScores'
import ExportPDF from './ExportPDF'
import Gear from './Gear/Gear'
import Information from './Info/Information'
import Level from './Level'
import { ListGroup, Button } from 'react-bootstrap';

export default function Body() {

    const [level, setlevel] = useState(1)
    const [race, setRace] = useState(null)
    const [lang, setLang] = useState([])
    const [classType, setClassType] = useState(null)
    const [feats, setFeats] = useState([])
    // const [prof, setProf] = useState([])
    const [info, setInfo] = useState(null)
    // [str,dex,con,int,wis,cha]
    const [totalScore, setTotalScore] = useState(null)
    const [skills, setSkills] = useState([])
    const [hp, sethp] = useState(0)
    const [background, setBackground] = useState(null)
    const [data, setData] = useState({})

    // useEffect(() => {
    //     console.log(url)
    // }, [url])

    const ref = React.createRef();
    const [done, setDone] = useState(false)
    if (!done) {
        return (
            <ListGroup >
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
                    <React.Fragment>
                        <Information
                            classType={classType}
                            race={race}
                            info={info}
                            setInfo={setInfo}
                            background={background}
                            setBackground={setBackground}
                        />
                    </React.Fragment>
                }

                {
                    info &&
                    <Button variant="success" onClick={() => setDone(true)}>
                        Done (No Going Back)
                    </Button>
                }
                {/* {info &&
                <React.Fragment>
                    <Ability
                        classType={classType}
                        race={race}
                        feats={feats}
                        info={info}
                        totalScore={totalScore}
                        setTotalScore={setTotalScore}
                        level={level}
                        background={background}
                        skills={skills}
                        setSkills={setSkills}
                        hp={hp}
                        sethp={sethp}
                    />
                    {skills.map(e => e.prof).indexOf(true) > -1 &&
                        <Gear totalScore={totalScore} level={level} classType={classType} />}
                </React.Fragment>
            } */}

                {/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}
            </ListGroup>
        )
    }
    else {
        return (
            <ExportPDF
                refer={ref}
                level={level}
                race={race}
                info={info}
                background={background}
                classType={classType}
            />)
    }
}

