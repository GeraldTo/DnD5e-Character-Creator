/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react"
import React from 'react'

export default function Hitdie(props) {
    const [hp, sethp] = useState([0])
    const [hpsum, sethpsum] = useState(0)
    const [reroll, setreroll] = useState('')

    useEffect(() => {
        sethp(randHP())
    }, [props.hitdie])
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

    function randHP() {
        let totalHP = []
        for(let i =0; i<props.level;i++){
            totalHP.push(Math.floor(Math.random() * props.hitdie) + 1)
        }
        return totalHP
    }

    if(props.hitdie){
        return (
            <div>
                <h3>Roll Hit Points:</h3> 
                <button onClick={() => sethp(randHP)}>Roll HP</button><br/>
                <b>{hpsum}</b> ({hp.join(', ')}) <br/>
                <h4>Description: </h4> HP = (Hit Die: 1d{props.hitdie} + Consitution Modifier: {props.conMod}) per level <br/>
                <div><button className="IncDec" onClick={() => sethp(prev => prev>0 ? prev - 1: prev)}> - </button>
                    {hpsum}
                <button className="IncDec" onClick={() => sethpsum(prev => prev + 1)}> + </button> </div>
            </div>
        )
    }
    else{return(<div> </div>)}
}
