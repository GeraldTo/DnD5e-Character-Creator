import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap';

export default function Rolls() {
    const [randomRolls, setrandomRolls] = useState('')
    function randRoll() {
        return [...Array(6)].map((e, i) => {
            return [...Array(4)].map(e => (Math.floor(Math.random() * 6) + 1))
        })
    }
    return (
        <div>
            <Button variant="secondary" onClick={() => setrandomRolls(randRoll)}>Roll Random</Button> <br />
            4d6 and drop lowest:
            <ListGroup horizontal> {randomRolls && randomRolls.map((currentRoll, i) => {
                let score = 0
                let lowest = currentRoll[0]
                for (let j = 0; j < 4; j++) {
                    if (currentRoll[j] <= lowest) {
                        lowest = currentRoll[j]
                    }
                    score += currentRoll[j]
                }
                score -= lowest
                return <ListGroup.Item key={i}>{score} ({currentRoll.join(',')})</ListGroup.Item>
            })}
            </ListGroup>
            Or Default: 15, 14, 13, 12, 10, 8
        </div>
    )
}
