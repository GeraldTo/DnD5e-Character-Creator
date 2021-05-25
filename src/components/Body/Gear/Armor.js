/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Button, ListGroup, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios'
import styles from './Gear.module.css'

//proficient if type or name or 
// to get type:
//equipment/[name] get armor_category+' '+equipment_category.index
export default function Armor(props) {
    const [light, setLight] = useState([])
    const [medium, setMedium] = useState([])
    const [heavy, setHeavy] = useState([])
    const [shield, setShield] = useState([])

    const [totalArmor, setTotalArmor] = useState([null, null])
    const [type, setType] = useState(0)

    function handleInit(response, setList) {
        const urls = (response.equipment).map(e => props.url + e.url)
        let promiseArray = urls.map(e => axios.get(e));
        Promise.all(promiseArray)
            .then(e => {
                setList(e.map(el => el.data))
            })
            .catch(console.log)
    }
    useEffect(() => {
        axios.get(props.url + '/api/equipment-categories/light-armor/')
            .then(response => {
                handleInit(response.data, setLight)
            })

        axios.get(props.url + '/api/equipment-categories/medium-armor/')
            .then(response => {
                handleInit(response.data, setMedium)
            })

        axios.get(props.url + '/api/equipment-categories/heavy-armor/')
            .then(response => {
                handleInit(response.data, setHeavy)
            })
        axios.get(props.url + '/api/equipment-categories/shields/')
            .then(response => {
                handleInit(response.data, setShield)
            })
    }, [])

    useEffect(() => {
        let newAc = 10 + props.totalScore[1].mod
        if (totalArmor.filter(e => e).length > 0) {
            newAc = (totalArmor[0] ? totalArmor[0].armor_class.base : 0)
                + (totalArmor[1] ? totalArmor[1].armor_class.base : 0)
                + (totalArmor[0] ?
                    (totalArmor[0].armor_class.dex_bonus ?
                        (totalArmor[0].armor_class.max_bonus ?
                            Math.min(props.totalScore[1].mod, 2) :
                            props.totalScore[1].mod) : 0) : props.totalScore[1].mod)
        }
        props.setAc(newAc)
        props.setInventory(prev => ({ ...prev, armor: totalArmor.filter(e => e) }))

    }, [props.totalScore[1].mod, totalArmor])
    function armors(list, type, index) {
        function handleSelect(event) {
            let curr = [...totalArmor]
            const currInd = list[list.map(e => e.index).indexOf(event)]
            curr[index] = currInd
            setTotalArmor(curr)
        }
        const armorLsit = list.map((e, j) => <Dropdown.Item key={j} eventKey={e.index}>{e.name}</Dropdown.Item>)
        return < DropdownButton
            onSelect={e => handleSelect(e)}
            drop="up"
            title={type + " Armor"}
            variant="secondary" >
            {armorLsit}
        </ DropdownButton>
    }

    function handleRemove(index) {
        let removal = [...totalArmor]
        removal[index] = null
        setTotalArmor(removal)
    }

    return (
        <div>
            <h3>Choose Armor:</h3>
            <ListGroup variant="flush" className={styles.Description}>
                <ListGroup.Item>
                    <h3>AC: {props.ac}</h3>
                </ListGroup.Item>
                <ListGroup.Item >
                    <Form>
                        <Form.Check
                            type="radio"
                            inline
                            name="group"
                            label="Light"
                            checked={type === 0}
                            onChange={() => setType(0)}
                        />
                        <Form.Check
                            type="radio"
                            inline
                            name="group"
                            label="Medium"
                            checked={type === 1}
                            onChange={() => setType(1)}
                        />
                        <Form.Check
                            type="radio"
                            inline
                            name="group"
                            label="Heavy"
                            checked={type === 2}
                            onChange={() => setType(2)}
                        />
                        {/* {type[i] ? weapons(simpleList, "Simple", i) : weapons(martialList, "Martial", i)} */}
                        {type === 0 && armors(light, "Light", 0)}
                        {type === 1 && armors(medium, "Medium", 0)}
                        {type === 2 && armors(heavy, "Heavy", 0)}
                        {totalArmor[0] && <ListGroup className={styles.Lists}>
                            <ListGroup.Item>
                                <h3>{totalArmor[0].name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Base AC: {totalArmor[0].armor_class.base}{' '}
                                (Adds Dex Mod{totalArmor[0].armor_class.max_bonus && ' max 2'})
                            </ListGroup.Item>
                            {totalArmor[0].stealth_disadvantage && <ListGroup.Item>
                                Disadvantage on Dexterity (Stealth) checks.
                            </ListGroup.Item>}
                            <ListGroup.Item>
                                Weight: {totalArmor[0].weight}lb
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="outline-danger" onClick={() => handleRemove(0)}>Remove</Button>
                            </ListGroup.Item>
                        </ListGroup>}
                    </Form>
                </ListGroup.Item>
                <ListGroup.Item >
                    <Form>
                        (Optional)
                        {armors(shield, "Shield", 1)}
                        {totalArmor[1] && <ListGroup className={styles.Lists}>
                            <ListGroup.Item>
                                <h3>{totalArmor[1].name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Base AC: {totalArmor[1].armor_class.base}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Weight: {totalArmor[1].weight}lb
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="outline-danger" onClick={() => handleRemove(1)}>Remove</Button>
                            </ListGroup.Item>
                        </ListGroup>}
                    </Form>
                </ListGroup.Item>

            </ListGroup>
        </div>
    )
}
