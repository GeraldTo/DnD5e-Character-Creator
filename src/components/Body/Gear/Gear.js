import React, { useState } from 'react'
import Inventory from './Inventory'
import Armor from './Armor'
import Weapons from './Weapons'
import styles from './Gear.module.css'
import { ListGroup } from 'react-bootstrap';


export default function Gear(props) {
    const [inventory, setInventory] = useState({ weapons: [], armor: [] })
    const [ac, setAc] = useState(props.totalScore[1].mod)
    const url = process.env.REACT_APP_BASE

    return (
        <ListGroup.Item >
            <h2>Pick Gear</h2>

            <div className={styles.Description}>
                <h3>Proficiencies: {props.classType.proficiencies.map((e, i) => e.name).join(', ')}</h3>
                (Choose from your proficiencies or you'll have disadvantages)
                <Weapons inventory={inventory} setInventory={setInventory} url={url} totalScore={props.totalScore} level={props.level} />
                <Armor inventory={inventory} setInventory={setInventory} url={url} totalScore={props.totalScore} setAc={setAc} ac={ac} />
                <Inventory />
            </div>
        </ListGroup.Item>
    )
}
