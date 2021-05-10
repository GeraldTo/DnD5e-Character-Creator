import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Looks from './Looks'


export default function Name(props) {
    const [toggle, setToggle] = useState(false)
    const handleChange = (event) => {
        props.setFirst(true)
        props.setInfo(prev => ({ ...prev, name: event.target.value }))
    }
    return (<div>
        <InputGroup size="lg">
            <InputGroup.Prepend >
                <InputGroup.Text ><h4>Character Name</h4></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Enter Name"
                value={props.info.name}
                onFocus={e => e.target.select()}
                onChange={handleChange} />
            <InputGroup.Append>
                <Button size="lg" variant="secondary" onClick={() => setToggle(prev => !prev)}>Change Looks (Optional) {toggle ? '^' : 'v'}</Button>
            </InputGroup.Append>
        </InputGroup>
        {toggle && <Looks race={props.race} setInfo={props.setInfo} info={props.info} />}
    </div>

    )
}
