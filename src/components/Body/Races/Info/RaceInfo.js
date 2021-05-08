import React, { useState } from 'react'
import styles from '../../Body.module.css'
import { Button } from 'react-bootstrap';
import RaceTable from './RaceTable'
import RaceExtra from './RaceExtra'

export default function RaceInfo(props) {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.Description}>
            <RaceTable race={props.race} />
            <Button variant="secondary" onClick={() => setToggle(prev => !prev)}>More Info</Button>
            {toggle && <RaceExtra race={props.race} traits={props.traits} setTraits={props.setTraits} />}
        </div>
    )
}
