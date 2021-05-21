import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import styles from './AbilityScore.module.css'


export default function Saving(props) {
    useEffect(() => {
        if (props.classType) {
            let saves = [false, false, false, false, false, false]
            for (let i = 0; i < props.classType.saving_throws.length; i++) {
                const index = (props.totalScore.map(e => e.index)).indexOf(props.classType.saving_throws[i].index)
                saves[index] = true
            }
            props.setTotalScore(props.totalScore.map(function (e, i) {
                e.saving = saves[i]
                return e
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.classType])
    const totalSaving = props.totalScore.map((e, i) => {
        const score = e.mod + (e.saving ? props.bonus : 0)
        return <tr key={i}>
            <td><input type="checkbox" checked={e.saving} readOnly /></td>
            <td >{score < 0 ? score : '+' + score}</td>
            <td>{e.fullName}</td>
        </tr>
    })
    const head = ["Proficient", "Score", "Type"]
    return (
        <div>
            <h3>Saving Throws:</h3>
            <Table size="sm" className={styles.Saves}>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>
                    {totalSaving}
                </tbody>
            </Table>

        </div>
    )


}
