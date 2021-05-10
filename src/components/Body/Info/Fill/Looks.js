import React from 'react'
import { InputGroup, FormControl, ListGroup } from 'react-bootstrap';


export default function Looks(props) {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><h4>Age:</h4> {props.race.age.split('. ')[props.race.age.split('. ').length - 1]} </ListGroup.Item>
            <ListGroup.Item><h4>Size:</h4> {props.race.size_description.split('. ')[0]} </ListGroup.Item>
            <ListGroup.Item>
                <InputGroup size="lg">
                    <InputGroup.Prepend >
                        <InputGroup.Text ><h4>Age  </h4></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Age"
                        value={props.info.age}
                        onFocus={e => e.target.select()}
                        type="number"
                        onChange={event => props.setInfo(prev => ({ ...prev, age: event.target.value ? parseInt(event.target.value) : '' }))}
                    />
                </InputGroup>
                <InputGroup size="lg">
                    <InputGroup.Prepend >
                        <InputGroup.Text ><h4>Height  </h4></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Height"
                        value={props.info.height}
                        onFocus={e => e.target.select()}
                        onChange={event => props.setInfo(prev => ({ ...prev, height: event.target.value }))}
                    />
                </InputGroup>
                <InputGroup size="lg">
                    <InputGroup.Prepend >
                        <InputGroup.Text ><h4>Weight  </h4></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Weight"
                        value={props.info.weight}
                        onFocus={e => e.target.select()}
                        onChange={event => props.setInfo(prev => ({ ...prev, weight: event.target.value }))}
                    />
                </InputGroup>
                <InputGroup size="lg">
                    <InputGroup.Prepend >
                        <InputGroup.Text ><h4>Eyes  </h4></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Eyes"
                        value={props.info.eyes}
                        onFocus={e => e.target.select()}
                        onChange={event => props.setInfo(prev => ({ ...prev, eyes: event.target.value }))}
                    />
                </InputGroup>
                <InputGroup size="lg">
                    <InputGroup.Prepend >
                        <InputGroup.Text ><h4>Skin  </h4></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Skin"
                        value={props.info.skin}
                        onFocus={e => e.target.select()}
                        onChange={event => props.setInfo(prev => ({ ...prev, skin: event.target.value }))}
                    />
                </InputGroup>
                <InputGroup size="lg">
                    <InputGroup.Prepend >
                        <InputGroup.Text ><h4>Hair  </h4></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Hair"
                        value={props.info.hair}
                        onFocus={e => e.target.select()}
                        onChange={event => props.setInfo(prev => ({ ...prev, hair: event.target.value }))}
                    />
                </InputGroup>
            </ListGroup.Item>
        </ListGroup>

    )
}
