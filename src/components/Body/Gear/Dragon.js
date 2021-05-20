/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Button,
    ListGroup,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import axios from "axios";
import styles from "./Gear.module.css";

export default function Dragon(props) {
    const [list, setList] = useState([]);
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        axios
            .get(props.url + "/api/races/dragonborn")
            .then((response) => {
                setList(response.data.trait_options.from)

            });
    }, []);

    useEffect(() => {
        if (current) {
            let newObj = { ...current }
            newObj.dmg = props.level >= 16 ? '5d6' : props.level >= 11 ? '4d6' : props.level >= 6 ? '3d6' : '2d6'
            newObj.dc = 8 + props.totalScore[2].mod + (1 + Math.ceil(props.level / 4))
            // setCurrent(newObj)
        }
    }, [props.totalScore[2].mod, current, props.level])

    function breath() {
        function handleSelect(event) {
            const currInd = list[list.map((e) => e.name).indexOf(event)];
            axios.get(props.url + currInd.url)
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
                title={"Breath Weapons"}
                variant="secondary"
            >
                {weaponList}
            </DropdownButton>
        );
    }

    return (
        <div>
            <h3>Choose Dragon Type:</h3>
            <div className={styles.Description}>
                {breath()}
                {current &&
                    <ListGroup className={styles.Lists}>
                        <ListGroup.Item>
                            <h3>{current.name.substring(15, current.name.length - 1)}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {current.desc[0].split('.')[0]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            DC: {8 + props.totalScore[2].mod + (1 + Math.ceil(props.level / 4))}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Damage: {props.level >= 16 ? '5d6' : props.level >= 11 ? '4d6' : props.level >= 6 ? '3d6' : '2d6'}{' '}
                            (half on success)
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {current.desc[1]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {current.desc[2]}
                        </ListGroup.Item>
                    </ListGroup>}
            </div>

        </div>
    )
}
