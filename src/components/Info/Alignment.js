import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function Alignment(props) {
    const [api, setapi] = useState(null)
    const buttons = []
    useEffect(() => {
        axios.get(props.url)
            .then(response=>{
                setapi(response.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(api){
        for(let i = 0; i < api.count;i++){
            let current = api.results[i]
            
            buttons.push(
                <button 
                    className="buttonItem" 
                    key={i} 
                    onClick={() => axios.get(props.url+current.index)
                                    .then(response=>{
                                        props.setAlignment(response.data)})
                            }> 
                    {current.name}
                </button>)
        }
    }
    return (
        <div>
            <h3>Choose Allignment</h3>
            <div>{buttons}</div>
            {props.alignment &&
            <div>
                <h4> {props.alignment.name}</h4><br/>
                <h4>Description:</h4>  <label>{props.alignment.desc}</label> 
            </div>}
        </div>
    )
}
