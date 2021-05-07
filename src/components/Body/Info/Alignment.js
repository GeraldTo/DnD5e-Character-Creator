import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, ButtonGroup } from 'react-bootstrap';

export default function Alignment(props) {
    const [api, setapi] = useState(null)

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setapi(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const buttons = api ? api.results.map((current, i) => (
        <Button
            variant="outline-dark"
            key={i}
            onClick={() => axios.get(props.url + current.index)
                .then(response => {
                    props.setAlignment(response.data)
                })
            } >
            {current.name}
        </Button>
    )) : []
    return (
        <div>
            <h3>Choose Allignment</h3>
            <ButtonGroup
                size="lg"
            >
                {buttons}
            </ButtonGroup>
            <h4>Alignment Suggestion:</h4> {props.race.alignment}<br />
            {props.alignment &&
                <div>
                    <h4> {props.alignment.name}</h4><br />
                    <h4>Description:</h4> <label>{props.alignment.desc}</label>
                </div>}
        </div>
    )
}
