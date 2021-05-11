import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RaceInfo from './Info/RaceInfo'
import RacePick from './RacePick'


export default function Races(props) {
    const urlBase = process.env.REACT_APP_API
    const raceUrl = process.env.REACT_APP_RACE
    const [api, setapi] = useState(null)

    useEffect(() => {
        axios.get(urlBase + raceUrl)
            .then(response => {
                setapi(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Races">
            <h2>Race </h2>
            <RacePick api={api} url={urlBase + raceUrl} setRace={props.setRace} />
            {props.race &&
                <RaceInfo race={props.race} />
            }

        </div>
    )
}
