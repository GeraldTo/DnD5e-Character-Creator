/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    ListGroup,
    Button,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import axios from "axios";
import styles from "./AbilityScore.module.css";

export default function Dragon(props) {
    const [list, setList] = useState([]);
    const [current, setCurrent] = useState(null)
    const url = process.env.REACT_APP_BASE;
    useEffect(() => {
        axios
            .get(url + "/api/races/dragonborn")
            .then((response) => {
                setList(response.data.trait_options.from)

            });
    }, []);

    useEffect(() => {
        if (current) {
            let newObj = { ...current }
            newObj.dmg = props.level >= 16 ? '5d6' : props.level >= 11 ? '4d6' : props.level >= 6 ? '3d6' : '2d6'
            newObj.dc = 8 + props.totalScore[2].mod + (1 + Math.ceil(props.level / 4))
            props.setInfo((prev) => ({ ...prev, dragon: newObj }))
            // setCurrent(newObj)
        }
    }, [props.totalScore[2].mod, current, props.level])

    function breath() {
        function handleSelect(event) {
            const currInd = list[list.map((e) => e.name).indexOf(event)];
            axios.get(url + currInd.url)
                .then((res) => {
                    setCurrent(Object.assign(res.data, currInd));
                });

        }
        const weaponList = list.map((e, j) => (
            <Dropdown.Item key={j} eventKey={e.name}>
                {e.name}
            </Dropdown.Item>
        ));
        return (
            <DropdownButton
                onSelect={(e) => handleSelect(e)}
                drop="up"
                title={"Ancestry"}
                variant="secondary"
            >
                {weaponList}
            </DropdownButton>
        );
    }

    const handleRemove = () => {
        let newObj = { ...props.info }
        delete newObj.dragon
        props.setInfo(newObj)
        setCurrent(null)
    }

    return (
        <div>
            <h3>Choose Dragon Ancestry:</h3>
            <div className={styles.Description}>
                {breath()}
                {current &&
                    <ListGroup className={styles.Lists}>
                        <ListGroup.Item>
                            <h3>{current.name.substring(15, current.name.length - 1)} Dragon</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            DC: {8 + props.totalScore[2].mod + (1 + Math.ceil(props.level / 4))}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Damage: {props.level >= 16 ? '5d6' : props.level >= 11 ? '4d6' : props.level >= 6 ? '3d6' : '2d6'}{' '}
                            (half on success)
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Breath Weapon/Resistance:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Range:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Saving Throw:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="outline-danger" onClick={handleRemove}>Remove</Button>
                        </ListGroup.Item>
                    </ListGroup>}
            </div>

        </div>
    )
}
