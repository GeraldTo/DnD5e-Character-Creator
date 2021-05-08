import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClassInfo from "./ClassInfo"
import ClassPick from './ClassPick'
import Features from './Features'

export default function Classes(props) {
    const [api, setapi] = useState(null)
    const url = process.env.REACT_APP_API

    useEffect(() => {
        axios.get(url + 'classes/')
            .then(response => {
                setapi(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h2>Class </h2>
            <ClassPick api={api} url={url + 'classes/'} setClassType={props.setClassType} />
            {props.classType &&
                <div>
                    <ClassInfo classType={props.classType} setProf={props.setProf} prof={props.prof} />
                    <Features url={url} classType={props.classType} feats={props.feats} setFeats={props.setFeats} level={props.level} />
                </div>}
        </div>
    )
}
