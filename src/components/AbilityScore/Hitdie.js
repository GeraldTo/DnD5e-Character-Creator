/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react"
import React from 'react'

export default function Hitdie(props) {
    const [click, setClick] = useState(false)
    const [hpArr, sethpArr] = useState([])
    useEffect(() => {
        sethpArr(randHP())
    }, [props.hitdie])
    useEffect(() => {
        let totalHP = [...hpArr]
        hpArr.length>props.level ? totalHP.pop() : totalHP.push(Math.floor(Math.random() * props.hitdie) + 1)
        sethpArr(totalHP)
    }, [props.level])
    function randHP() {
        let totalHP = []
        for(let i =0; i<props.level;i++){
            totalHP.push(Math.floor(Math.random() * props.hitdie) + 1)
        }
        return totalHP
    }
    function handleClick() {
        sethpArr(randHP()) 
        setClick(true)
    }
    if(props.hitdie){
        return (
            <div>
                <h3>Roll Hit Points:</h3> 
                <button onClick={() => handleClick()}>
                    Roll HP</button><br/>
                {click && hpArr.reduce((a,b)=>{return a+b},0)+(hpArr.length*props.conMod)+' ('+hpArr.join(', ')+')'}<br/>
                <h4>Description: </h4> HP = (Hit Die: 1d{props.hitdie} + Consitution Modifier: {props.conMod}) per level <br/>
                <div><button className="IncDec" onClick={() => props.sethp(prev => prev>0 ? prev - 1: prev)}> - </button>
                    {props.hp}
                <button className="IncDec" onClick={() => props.sethp(prev => prev + 1)}> + </button> </div>
            </div>
        )
    }
    else{return(<div> </div>)}
}
