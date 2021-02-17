import React from 'react'
import axios from 'axios'

export default function ClassPick(props) {
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
                                        props.setClassType(response.data)})
                            } > 
                    {current.name}
                </button>)
        }
    }
    return (
        <div className="buttonClass">
            <h3>Choose Class: </h3>
            {buttons}
        </div>
    )
}
