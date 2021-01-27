import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ClassInfo from "./ClassInfo"

export default function Classes(props) {
    const url = 'https://www.dnd5eapi.co/api/classes/'
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
                    props.setClassType(response.data)
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])
    const buttons = []
    if(api){
        for(let i = 0; i < api.count;i++){
            buttons.push(<button className="buttonItem" onClick={()=>setname(api.results[i].index)}>{api.results[i].name}</button>)
        }
    }
    return (
        <div>
            <h3 className="Classes">Choose Class: </h3>
            <div className="buttonClass">
                {buttons}
            </div>
            <ClassInfo classType={props.classType} setsaving={props.setsaving}/>
        </div>
    )

        
}
