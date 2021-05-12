import React from 'react'
import Inventory from './Inventory'
import Armor from './Armor'
import Weapons from './Weapons'
import styles from './Gear.module.css'
import { ListGroup } from 'react-bootstrap';



export default function Gear(props) {
    return (
        <ListGroup.Item >
            <h2>Pick Gear</h2>
            <div className={styles.Description}>
                <Weapons />
                <Armor />
                <Inventory />
            </div>
        </ListGroup.Item>
    )
}
