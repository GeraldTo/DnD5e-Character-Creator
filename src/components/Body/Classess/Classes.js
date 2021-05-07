import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClassInfo from "./ClassInfo"
import ClassPick from './ClassPick'
import Features from './Features'

export default function Classes(props) {
    const [api, setapi] = useState(null)
    useEffect(() => {
        axios.get(props.url + 'classes/')
            .then(response => {
                setapi(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (props.race) {
        return (
            <div>
                <h2>Class </h2>
                <ClassPick api={api} url={props.url + 'classes/'} setClassType={props.setClassType} />
                <ClassInfo classType={props.classType} setProf={props.setProf} prof={props.prof} setsaving={props.setsaving} />
                {props.classType && <Features url={props.url} classType={props.classType} feats={props.feats} setFeats={props.setFeats} level={props.level} />}
            </div>
        )
    } else {
        return <div></div>
    }


}
