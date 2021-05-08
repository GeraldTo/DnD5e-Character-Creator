import React from 'react'
import axios from 'axios'
import { Button, ButtonGroup } from 'react-bootstrap';

export default function ClassPick(props) {
    function setter(data, index) {
        const more_data = require('./suggestion.json');
        props.setClassType(Object.assign(data, more_data.results[index]))
    }
    const buttons = props.api ? props.api.results.map((current, i) => (
        <Button
            variant="outline-dark"
            key={i}
            onClick={() => axios.get(props.url + current.index)
                .then(response => {
                    setter(response.data, i)
                })
            } >
            {current.name}
        </Button>

    )) : []

    return (
        <div className="buttonClass">
            <ButtonGroup
                size="lg"
            >
                {buttons}
            </ButtonGroup>
        </div>
    )
}
