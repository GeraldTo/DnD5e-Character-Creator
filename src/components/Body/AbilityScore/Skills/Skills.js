/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SkillItem from './SkillItem'

export default function Skills(props) {
    const [display, setDisplay] = useState(false)
    const url = process.env.REACT_APP_API
    function handleInit(response) {
        const urls = (response.data.results).map(e => url + 'skills/' + e.index)
        let promiseArray = urls.map(e => axios.get(e));
        Promise.all(promiseArray)
            .then(
                results => {
                    props.setSkills(
                        results.map(
                            function (el, i) {
                                const skill = {
                                    data: el.data,
                                    prof: false,
                                    total: 0
                                }
                                return skill
                            }
                        )
                    )
                })
            .catch(console.log)
    }
    useEffect(() => {
        axios.get(url + 'skills/')
            .then(response => {
                handleInit(response)
            })
    }, [])

    return (
        <div>
            <h3>Choose Your Skills</h3>
            <h4>Description: </h4> A skill represents a specific aspect of an ability score by using its modifier.<br />
            <h4>Proficiency Bonus: </h4> +{1 + Math.ceil(props.level / 4)}<br />
            <h4>Options:</h4> found in traits, features, class skills, and background<br />
            {props.skills.map((e, i) =>
                <SkillItem key={i} skills={props.skills} setSkills={props.setSkills} index={i} display={display}
                    totalScore={props.totalScore} profBonus={1 + Math.ceil(props.level / 4)} />)
            }
            <button onClick={() => setDisplay(prev => !prev)}>{display ? 'Hide Details' : 'Display Details'}</button>
            <div><h4>Passive Wisdom:</h4> {props.skills.length > 0 ? (props.skills[11].total < 0 ? props.skills[11].total : '+' + props.skills[11].total) : +0}</div>
        </div>
    )
}
