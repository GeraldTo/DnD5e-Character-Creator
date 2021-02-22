import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RaceInfo from './RaceInfo'
import RacePick from './RacePick'
import Traits from './Traits'

export default function Races(props) {
    const [api, setapi] = useState(null)
    const [traits, setTraits] = useState([])
    useEffect(() => {
        axios.get(props.url + 'races/')
            .then(response => {
                setapi(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Races">
            <h2>Race </h2>
            <RacePick api={api} url={props.url + 'races/'} setRace={props.setRace} />
            <RaceInfo race={props.race}/>
            {props.race && <Traits url={props.url} race={props.race} traits={traits} setTraits={setTraits}/>}
        </div>
    )
}
