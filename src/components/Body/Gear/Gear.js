import React from 'react'
import Inventory from './Inventory'
import Armor from './Armor'
import Weapons from './Weapons'

export default function Gear(props) {
    return (
        <div className="Gear">
            <h2>Pick Gear</h2>
            <Weapons />
            <Armor />
            <Inventory />
        </div>
    )
}
