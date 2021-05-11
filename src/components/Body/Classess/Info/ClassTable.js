/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Table, ListGroup } from 'react-bootstrap';
import axios from 'axios'
import styles from '../Class.module.css'


// level classType setFeats feats
export default function ClassTable(props) {
    const currentClass = props.classType
    const url = process.env.REACT_APP_BASE
    useEffect(() => {
        function handleChange(response) {
            let currentFeatObjs = response.filter((e, i) => i < props.level)
            const featurls = currentFeatObjs.map(e => (e.feature_choices.map(f => { return url + f.url })).concat(e.features.map(f => { return url + f.url }))).flat()
            let promiseArray = featurls.map(url => axios.get(url));
            Promise.all(promiseArray)
                .then(
                    results => {
                        props.setFeats(results.map(el => el.data))
                    })
                .catch(console.log)
        }
        axios.get(url + currentClass.url + '/levels/')
            .then(response => {
                handleChange(response.data)
            })
    }, [currentClass, props.level])
    let saving = currentClass ? currentClass.saving_throws.map(e => (e.name)) : []
    const head = ["Selected Class", "Hit Die", "Saving Throws", "Proficiency Bonus", "Features"]
    return (
        <Table className={styles.Tables}>
            <thead>
                <tr>
                    {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><h3>{currentClass.name}</h3></td>
                    <td>1d{currentClass.hit_die}</td>
                    <td>{saving.join(', ')} (Uses Modifiers)</td>
                    <td>+{1 + Math.ceil(props.level / 4)}</td>
                    <td><ListGroup variant="flush">
                        {props.feats.map((e, i) => <ListGroup.Item key={i}>{e.name}</ListGroup.Item>)}
                    </ListGroup> </td>
                </tr>
            </tbody>
        </Table>
    )
}
