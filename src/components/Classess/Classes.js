import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ClassInfo from "./ClassInfo"
import ClassPick from './ClassPick'

export default function Classes(props) {
    const [api, setapi] = useState(null)
    useEffect(() => {
        axios.get(props.url)
            .then(response=>{
                setapi(response.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h2>Class </h2>
            <ClassPick api={api} url={props.url} setClassType={props.setClassType}/>
            <ClassInfo classType={props.classType} profBonus={props.profBonus} setProf={props.setProf} prof={props.prof} setsaving={props.setsaving}/>
        </div>
    )

        
}
