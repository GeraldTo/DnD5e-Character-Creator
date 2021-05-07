/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Traits(props) {
    const [display, setDisplay] = useState(false)
    const url = process.env.REACT_APP_BASE
    useEffect(() => {
        if (props.race) {
            const urls = (props.race.traits).map(e => url + e.url)
            let promiseArray = urls.map(e => axios.get(e));
            Promise.all(promiseArray)
                .then(
                    results => {
                        props.setTraits(results.map(el => el.data))
                    })
                .catch(console.log)
        }
    }, [props.race])

    return (
        <div>
            <h3>Traits</h3>
            <button onClick={() => setDisplay(prev => !prev)}>{display ? 'Hide Details' : 'Display Details'}</button>
            <h4>Current Traits:</h4> {display ?
                props.traits.map((e, i) => <div key={i}> <h4>{e.name}:
                </h4> {e.desc}</div>) : <label>{props.traits.map((e, i) => e.name).join(', ')}<br /> </label>}

        </div>
    )
}
