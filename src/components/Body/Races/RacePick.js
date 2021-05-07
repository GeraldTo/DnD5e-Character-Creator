import React from 'react'
import axios from 'axios'
import { Button, ButtonGroup } from 'react-bootstrap';


export default function RacePick(props) {
    const buttons = props.api ? props.api.results.map((current, i) => (
        <Button
            className="buttonItem"
            variant="outline-dark"
            key={i}
            onClick={() => axios.get(props.url + current.index)
                .then(response => {
                    props.setRace(response.data)
                })
            } >
            {current.name}
        </Button>
    )) : []
    return (
        <div className="buttonRace">
            <h3>Choose Race: </h3>
            <ButtonGroup
                size="lg"
            >
                {buttons}
            </ButtonGroup>

        </div>
    )
}
