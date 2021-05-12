import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap';

export default function Rolls() {
    function randRoll() {
        return [...Array(6)].map((e, i) => {
            return [...Array(4)].map(e => (Math.floor(Math.random() * 6) + 1))
        })
    }
    const [randomRolls, setrandomRolls] = useState(randRoll())
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Button variant="secondary" onClick={() => setrandomRolls(randRoll)}>Roll Random</Button>
            </ListGroup.Item>
            <ListGroup.Item>
                4d6 & drop lowest:{' '}
                {randomRolls.map((currentRoll, i) => {
                    let score = 0
                    let lowest = currentRoll[0]
                    for (let j = 0; j < 4; j++) {
                        if (currentRoll[j] <= lowest) {
                            lowest = currentRoll[j]
                        }
                        score += currentRoll[j]
                    }
                    score -= lowest
                    return score
                }).join(', ')}</ListGroup.Item>
            <ListGroup.Item> Or use default: 15, 14, 13, 12, 10, 8</ListGroup.Item>
        </ListGroup>
    )
}
