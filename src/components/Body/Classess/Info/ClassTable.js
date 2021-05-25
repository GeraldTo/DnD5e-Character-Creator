/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Table, ListGroup } from 'react-bootstrap';
import axios from 'axios'
import styles from '../Class.module.css'


// level classType setClassLevels classLevels 
export default function ClassTable(props) {
    const currentClass = props.classType
    const currentLevels = props.classLevels
    const url = process.env.REACT_APP_BASE
    useEffect(() => {
        function handleChange(response) {
            let currentFeatObjs = response.filter((e) => e.level <= props.level).filter(e => !e.hasOwnProperty('subclass'))
            const featurls = currentFeatObjs.map(e => (e.feature_choices.map(f => { return url + f.url })).concat(e.features.map(f => { return url + f.url }))).flat()
            let promiseArray = featurls.map(url => axios.get(url));
            Promise.all(promiseArray)
                .then(
                    results => {
                        props.setClassLevels({ current: currentFeatObjs[currentFeatObjs.length - 1], feats: results.map(el => el.data) })
                    })
                .catch(console.log)
        }
        axios.get(url + currentClass.url + '/levels/')
            .then(response => {
                handleChange(response.data)
            })
    }, [currentClass, props.level])
    let saving = currentClass ? currentClass.saving_throws.map(e => (e.name)) : []

    const classSpec = currentLevels ? Object.keys(currentLevels.current.class_specific) : []
    const head = ["Selected Class", "Hit Die", "Saving Throws", "Features", "Class Specific"]
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
                    <td><ListGroup variant="flush">
                        {currentLevels && currentLevels.feats.map((e, i) => <ListGroup.Item key={i}>{e.name}</ListGroup.Item>)}
                    </ListGroup> </td>
                    <td>
                        {currentLevels &&
                            <ListGroup variant="flush">
                                {classSpec.map((e, i) => {
                                    const key = e.split('_').join(' ')
                                    let value
                                    const currKey = currentLevels.current.class_specific[e]
                                    if (typeof currKey === 'object') {
                                        const subKeys = Object.keys(currKey)
                                        if (e === "creating_spell_slots" && currKey.length > 0) {
                                            value = subKeys.map((f, i) => {
                                                const subsubKeys = Object.keys(currKey[f])
                                                return <div key={i}>{subsubKeys.map(g => (g.split('_').join(' ') + ': ' + currKey[f][g])).join(', ')}</div>
                                            })
                                        } else {
                                            value = subKeys.map(f => (currKey[f])).join('d')
                                        }
                                    }
                                    else {
                                        value = currKey ? currKey : ''
                                        value = value === true ? 'true' : value
                                    }
                                    return value ?
                                        <ListGroup.Item key={i}> {key + ': '}{value} </ListGroup.Item> :
                                        <></>
                                })}
                            </ListGroup>}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}
