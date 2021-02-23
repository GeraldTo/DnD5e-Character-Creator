/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Languages(props) {
    const [api, setapi] = useState(null)
    const [raceLang, setRaceLang] = useState([])
    const [langCounter, setLangCounter] = useState([])

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setapi(response.data)
            })
    }, [])
    useEffect(() => {
        let known = []
        for (let i = 0; i < props.race.languages.length; i++) {
            known.push(props.race.languages[i].index)
        }
        setRaceLang(known)
        props.setLang(known)
        let langCount = 0
        if (props.race) {
            langCount = props.race.language_options ? props.race.language_options.choose : 0
        }
        let selectedLang = []
        selectedLang.length = langCount
        setLangCounter(selectedLang)
    }, [props.race])

    function handleAdd(e, i) {
        let all = [...langCounter]
        all[i] = e.currentTarget.value ? e.currentTarget.value : null
        setLangCounter(all)
        props.setLang(raceLang.concat(all.filter(function (el) { return el; })))
    }
    function multiLang() {
        let langs = []
        if (api) {

            for (let i = 0; i < langCounter.length; i++) {
                let langList = []
                langList.push(<option key={-1} value="">{langCounter[i] ? langCounter[i] : '--Select Lang--'}</option>)
                langCounter[i] && langList.push(<option key={api.count} value="">--Select Lang--</option>)
                for (let j = 0; j < api.count; j++) {
                    props.lang.indexOf(api.results[j].index) < 0 && langList.push(
                        <option key={j}> {api.results[j].index}</option>)
                }
                langs.push(<select key={i} onChange={e => handleAdd(e, i)} >{langList}</select>)
            }
        }
        return langs
    }

    return (
        <div>
            <h3>Langauges</h3>
            <h4>Race Languages:</h4> {props.race.language_desc}<br />
            <h4>Total Languages:</h4> {props.lang.join(', ')}<br />
            {multiLang()}
        </div>
    )
}
