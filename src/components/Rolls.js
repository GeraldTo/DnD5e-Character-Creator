import React, { useState, useEffect } from 'react'

export default function Rolls() {
    const [randomRolls, setrandomRolls] = useState('')
    function randRoll() {
        let totalRolls = []
        for (let i = 0; i < 6; i++) {
            let roll = []
            for (let i = 0; i < 4; i++) {
                roll.push(Math.floor(Math.random() * 6) + 1)
            }
            let score = 0
            let lowest = roll[0]
            for (let i = 0; i < 4; i++) {
                if (roll[i] <= lowest) {
                    lowest = roll[i]
                }
                score += roll[i]
            }
            score -= lowest
            totalRolls.push(<div>{score + ' (' + roll.join(' ') + ')'}</div>)
        }
        return totalRolls
    }
    useEffect(() => {setrandomRolls(randRoll)}, [])
    return (
        <div>
            <button onClick={() => setrandomRolls(randRoll)}>Roll Random</button> <br />
            Drop the lowest roll: <br />
            {randomRolls}
            Or Use Default: 15, 14, 13, 12, 10, 8
        </div>
    )
}
