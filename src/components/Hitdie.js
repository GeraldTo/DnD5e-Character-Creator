/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react"
import React from 'react'

export default function Hitdie(props) {
    const [hp, sethp] = useState([0])
    const [hpsum, sethpsum] = useState(0)
    const [reroll, setreroll] = useState(true)

    useEffect(() => {
        let totalHP = []
        for(let i =0; i<props.level;i++){
            totalHP.push(Math.floor(Math.random() * props.hitdie) + 1)
        }
        sethp(totalHP)
    }, [props.hitdie,reroll])
    useEffect(() => {
        sethpsum(hp.reduce((a,b)=>{return a+b})+(hp.length*props.conMod))
        }, [hp,props.conMod])
    
    useEffect(() => {
        let totalHP = [...hp]
        if(hp.length<props.level){
            for(let i=hp.length; i<props.level;i++){
                totalHP.push(Math.floor(Math.random() * props.hitdie) + 1)
            }
            sethp(totalHP)
        }
        else{
            for(let i=props.level ; i<hp.length;i++){
                totalHP.pop()
            }
            sethp(totalHP)
        }
    }, [props.level])

    if(props.hitdie){
        return (
            <div>
                <h3>Hit Points:</h3>  <b>{hpsum}</b> ({hp.join(', ')}) <br/>
                <h4>Description: </h4> HP = (Hit Die: 1d{props.hitdie} + Consitution Modifier: {props.conMod}) per level <br/>
                {/* Note: Uses maximum of {(props.hitdie/2)+1} or Hit Die after 1st level <br/> */}
                <button onClick={() => setreroll(prev=>!prev)}>Reroll HP</button><br/>
            </div>
        )
    }
    else{return(<div> </div>)}
}
