import React from 'react'
import { Button } from 'react-bootstrap';
import styles from '../../Body.module.css'


export default function AbilityItem(props) {
    function mod(input) {
        return input < 0 ? input : '+' + input
    }

    function handleChange(isDec) {
        props.setFirst(true)
        props.setScore(props.score.map(function (e, i) {
            return i === props.index ? (isDec ? (e > 0 ? e - 1 : e) : ((e + props.bonus[props.index]) < 20 ? e + 1 : e)) : e
        }))
    }
    return (
        <div className="AbilityItem">
            <div className="AbilityNames">
                {props.totalScore[props.index].fullName}
            </div>
            <div>
                <Button variant="secondary" className={styles.IncDec} onClick={() => handleChange(true)}> - </Button>
                <h4 style={{ "display": "inline" }}> {props.score[props.index]} </h4>
                <Button variant="secondary" className={styles.IncDec} onClick={() => handleChange(false)}> + </Button>
            </div>
            <div>
                +{props.bonus[props.index]} (Bonus)
            </div>
            <div className="Score">
                {props.totalScore[props.index].total}
            </div>
            <div>
                {mod(props.totalScore[props.index].mod)} (Mod)
            </div>
        </div>
    )
}
