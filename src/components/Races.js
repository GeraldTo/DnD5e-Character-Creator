import React,{useEffect,useState} from 'react'
import axios from 'axios'
import RaceInfo from './RaceInfo'
export default function Races(props) {
    const url = 'https://www.dnd5eapi.co/api/races/'
    const [api, setapi] = useState(null)
    const [name, setname] = useState('')
    useEffect(() => {
        axios.get(url)
            .then(response=>{
                setapi(response.data)
            })
    }, [])
    useEffect(() => {
        if(name){
            axios.get(url+name)
                .then(response=>{
                    props.setRace(response.data)
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])
    const buttons = []
    if(api){
        for(let i = 0; i < api.count;i++){
            buttons.push(<button className="buttonItem" onClick={() =>  setname(api.results[i].index)}>{api.results[i].name}</button>)
        }
    }
    return (
        <div className="Races">
            <h3>Choose Race: </h3><br />
            <div className="buttonRace">
                {buttons}
            </div>
            <RaceInfo race = {props.race} setraceBonus={props.setraceBonus} />
        </div>
    )

        
}
