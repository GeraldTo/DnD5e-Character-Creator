/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Table } from 'react-bootstrap';


export default function Features(props) {
    const head = ["Feature", "Description"]
    return (
        <div>
            <h4>Features:</h4>
            <Table striped>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>
                    {props.feats.map((current, i) =>
                        <tr key={i}>
                            <td>{current.name}</td>
                            <td>{current.desc}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
