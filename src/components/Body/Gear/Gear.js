import React, { useState, useEffect } from 'react'
import Inventory from './Inventory'
import Armor from './Armor'
import Weapons from './Weapons'
import styles from './Gear.module.css'
import { ListGroup } from 'react-bootstrap';



export default function Gear(props) {
    const [inventory, setInventory] = useState({ weapons: [] })
    const url = process.env.REACT_APP_BASE
    return (
        <ListGroup.Item >
            <h2>Pick Gear</h2>
            <div className={styles.Description}>
                <Weapons inventory={inventory} setInventory={setInventory} url={url} totalScore={props.totalScore} level={props.level} />
                <Armor />
                <Inventory />
            </div>
        </ListGroup.Item>
    )
}
