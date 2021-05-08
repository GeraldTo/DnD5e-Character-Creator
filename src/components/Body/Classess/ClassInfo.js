import React, { useEffect, useState } from 'react'
import styles from '../Body.module.css'
import { Table, Button } from 'react-bootstrap';

export default function ClassInfo(props) {
    const currentClass = props.classType
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        if (currentClass) {
            props.setProf(currentClass.proficiencies.map(e => (e.index)))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentClass])

    let saving = currentClass ? currentClass.saving_throws.map(e => (e.name)) : []

    const head = ["Selected Class", "Hit Die", "Saving Throws", "Proficiencies"]
    const classTable =
        <Table>
            <thead>
                <tr>
                    {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><h3>{currentClass.name}</h3></td>
                    <td>1d{currentClass.hit_die}</td>
                    <td>{saving.join(', ')} (Uses Modifiers)</td>
                    <td>{props.prof.join(', ')}</td>
                </tr>
            </tbody>
        </Table>

    const extra =
        <div>
            <h4>Suggested Ability Scores:</h4> {currentClass.scores}<br />
            <h4>Usual Background:</h4> {currentClass.background} <br />
        </div>
    return (
        <div className={styles.Description}>
            {classTable}
            <Button variant="secondary" onClick={() => setToggle(prev => !prev)}>More Info</Button>
            {toggle && extra}
        </div>
    )

}
