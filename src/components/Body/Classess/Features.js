/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Features(props) {
    const [display, setDisplay] = useState(false)
    function handleChange(response) {
        let currentFeatObjs = response.data.filter((e, i) => i < props.level)
        const featurls = currentFeatObjs.map(e => (e.feature_choices.map(f => { return props.url + 'features/' + f.index })).concat(e.features.map(f => { return props.url + 'features/' + f.index }))).flat()
        let promiseArray = featurls.map(url => axios.get(url));
        Promise.all(promiseArray)
            .then(
                results => {
                    props.setFeats(results.map(el => el.data))
                })
            .catch(console.log)
    }
    useEffect(() => {
        if (props.classType) {
            axios.get(props.url + 'classes/' + props.classType.index + '/levels/')
                .then(response => {
                    handleChange(response)
                })
        }
    }, [props.classType, props.level])

    return (
        <div>
            <h3>Features</h3>
            <h4>Currently at level:</h4> {props.level}<br />
            <h4>Proficiency Bonus:</h4> +{1 + Math.ceil(props.level / 4)}<br />
            <h4>Current Features: </h4> {display ?
                props.feats.map((e, i) => <div key={i}> <h4>{e.name}:
                    </h4> {e.desc}</div>) : <label>{props.feats.map((e, i) => e.name).join(', ')}<br /> </label>}
            <button onClick={() => setDisplay(prev => !prev)}>{display ? 'Hide Details' : 'Display Details'}</button>
        </div>
    )
}
