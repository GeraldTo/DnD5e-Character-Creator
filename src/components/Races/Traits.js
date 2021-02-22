/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Traits(props) {
    const [display, setDisplay] = useState(false)
    function handleChange(response) {
        const urls = (response.data.results).map(e=>props.url + 'traits/'+ e.index)
        let promiseArray = urls.map( url=> axios.get(url));
        Promise.all( promiseArray )
        .then(
          results => {
            props.setTraits( results.map( el => el.data ) )
          })
        .catch(console.log)
    }
    useEffect(() => {
        if(props.race){
            axios.get(props.url + 'races/'+ props.race.index + '/traits/')
                .then(response=>{
                    handleChange(response)
                })
        }
    }, [props.race])

    return (
        <div>
            <h3>Traits</h3>
            <h4>Current Traits:</h4> {display? 
                props.traits.map((e,i)=><div key={i}> <h4>{e.name}:
                </h4> {e.desc}</div>) : <label>{props.traits.map((e,i)=>e.name).join(', ')}<br/> </label> } 
            <button  onClick={() =>setDisplay(prev=>!prev)}>{display? 'Hide Details':'Display Details'}</button>
        </div>
    )
}
