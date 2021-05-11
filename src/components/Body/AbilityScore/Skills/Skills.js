/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../Body.module.css'
import SkillItem from './SkillItem'
import { Table, Button } from 'react-bootstrap';

export default function Skills(props) {
    const [display, setDisplay] = useState(false)
    const url = process.env.REACT_APP_API
    function handleInit(response) {
        const urls = (response.results).map(e => url + 'skills/' + e.index)
        let promiseArray = urls.map(e => axios.get(e));
        Promise.all(promiseArray)
            .then(e => {
                props.setSkills(e.map(
                    (el, i) => ({
                        data: el.data,
                        prof: false,
                        total: 0
                    })))
            })
            .catch(console.log)
    }
    useEffect(() => {
        axios.get(url + 'skills/')
            .then(response => {
                handleInit(response.data)
            })
    }, [])

    const head = ["Bonus", "Total", "Skill", "Mod", "Expert"]
    return (
        <div>
            <h3>Choose Your Skills</h3>
            <div className={styles.Description}>
                <h4>Description: </h4> A skill represents a specific aspect of an ability score by using its modifier.<br />
                <h4>Proficiency Bonus: </h4> +{1 + Math.ceil(props.level / 4)}<br />
                <h4>Options:</h4> found in traits, features, class skills, and background<br />
                <Button variant="secondary" onClick={() => setDisplay(prev => !prev)}>{display ? 'Hide Details' : 'Display Details'}</Button>
                <Table striped size="sm">
                    <thead>
                        <tr>
                            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                            {display && <th>Description</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {props.skills.map((e, i) =>
                            <SkillItem key={i} skills={props.skills} setSkills={props.setSkills} index={i} display={display}
                                totalScore={props.totalScore} profBonus={1 + Math.ceil(props.level / 4)} />)
                        }
                    </tbody>
                </Table>
                <div>
                    <h4>Passive Wisdom:</h4>{' '}
                    {props.skills.length > 0 ? (props.skills[11].total < 0 ? props.skills[11].total : '+' + props.skills[11].total) : +0} {' '}
                    (Perception)
                </div>
            </div>

        </div>
    )
}
