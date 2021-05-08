import React from 'react'
import { Button } from 'react-bootstrap';
import styles from './Body.module.css'

export default function Level(props) {

    return (
        <div>
            <h2>Character Level:</h2>
            <Button variant="secondary" className={styles.IncDec} onClick={() => props.setlevel(prev => prev > 1 ? prev - 1 : prev)}> - </Button>
            {" "}<h2 style={{ "display": "inline" }}>{props.level}</h2>{" "}
            <Button variant="secondary" className={styles.IncDec} onClick={() => props.setlevel(prev => prev < 20 ? prev + 1 : prev)}> + </Button>
        </div>
    )
}
