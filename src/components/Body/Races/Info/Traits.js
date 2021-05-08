/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';


export default function Traits(props) {
    const url = process.env.REACT_APP_BASE
    const currentTraits = props.traits
    useEffect(() => {
        const urls = (props.race.traits).map(e => url + e.url)
        let promiseArray = urls.map(e => axios.get(e));
        Promise.all(promiseArray)
            .then(
                results => {
                    props.setTraits(results.map(el => el.data))
                })
            .catch(console.log)
    }, [props.race])
    const head = ["Feature", "Description"]
    return (
        <div >
            <h4>Traits:</h4>
            {currentTraits.length ?
                <Table>
                    <thead>
                        <tr>
                            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                        </tr>
                    </thead>
                    <tbody>
                        {currentTraits.map((current, i) =>
                            <tr key={i}>
                                <td>{current.name}</td>
                                <td>{current.desc}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                : ' None'}
        </div>
    )
}
