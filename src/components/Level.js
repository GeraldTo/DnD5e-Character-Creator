import React,{useEffect} from 'react'

export default function Level(props) {
    useEffect(() => {
        const bon = 1+Math.ceil(props.level/4)
        bon>6 ? props.setProfBonus(6):props.setProfBonus(bon)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.level])
    return (
        <div>
            <h2>Set Starting Level:</h2>
            <button className="IncDec" onClick={() => props.setlevel(prev => prev>1 ? prev - 1: prev)}> - </button>
                {props.level}
            <button className="IncDec" onClick={ () => props.setlevel(prev => prev + 1)}> + </button> 
        </div>
    )
}
