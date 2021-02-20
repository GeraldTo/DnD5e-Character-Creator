import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RaceInfo from './RaceInfo'
import RacePick from './RacePick'

export default function Races(props) {
    const [api, setapi] = useState(null)
    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setapi(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Races">
            <h2>Race </h2>
            <RacePick api={api} url={props.url} setRace={props.setRace} />
            <RaceInfo race={props.race} setraceBonus={props.setraceBonus} />
        </div>
    )
}
