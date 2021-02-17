import React from 'react'
import axios from 'axios'

export default function RacePick(props) {
    const buttons = []
    if(props.api){
        for(let i = 0; i < props.api.count;i++){
            let current = props.api.results[i]
            buttons.push(
                <button 
                    className="buttonItem" 
                    key={i} 
                    onClick={() => axios.get(props.url+current.index)
                                    .then(response=>{
                                        props.setRace(response.data)})
                            } > 
                    {current.name}
                </button>)
        }
    }
    return (
        <div className="buttonRace">
            <h3>Choose Race: </h3>
            {buttons}
        </div>
    )
}
