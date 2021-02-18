import React from 'react'
import axios from 'axios'

export default function ClassPick(props) {
    const buttons = []
    if(props.api){
        const more_data = require('./suggestion.json');
        function setter(response,index) {
            let data = response.data
            data = Object.assign(data,more_data.results[index])
            props.setClassType(data)
        }
        for(let i = 0; i < props.api.count;i++){
            let current = props.api.results[i]
            buttons.push(
                <button 
                    className="buttonItem" 
                    key={i} 
                    onClick={() => axios.get(props.url+current.index)
                                    .then(response=>setter(response,i))
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
