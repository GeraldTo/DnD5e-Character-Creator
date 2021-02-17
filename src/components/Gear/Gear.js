import React from 'react'
import Inventory from './Inventory'
import Armor from './Armor'
import Weapons from './Weapons'

export default function Gear(props) {
    return (
        <div className="Gear">
            <Weapons />
            <Armor />
            <Inventory />
        </div>
    )
}
