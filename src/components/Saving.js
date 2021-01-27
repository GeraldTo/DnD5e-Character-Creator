import React,{useState,useEffect} from 'react'

export default function Saving(props) {
    const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"]
    const [total, setTotal] = useState(null)
    // function total() {
    //     let totalSaving = []
    //     for (let i = 0; i < props.saving.length; i++) {
    //         totalSaving.push( <b>{abilities[i]}</b>)
    //     }
    //     return totalSaving
    // }
    useEffect(() => {
        let totalSaving = []
        for (let i = 0; i < props.saving.length; i++) {
            totalSaving.push( <>{props.saving[i] ? <label> {props.abilityMod[i]<0? <>{props.abilityMod[i]+'_'} </>: <>{'+'+props.abilityMod[i]}</>} </label>: <>____</>} {abilities[i]}<br/></>)
        }
        setTotal(totalSaving)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.saving,props.abilityMod])
    if(total){
        return (
            <div>
                <h3>Saving Throws:</h3><br/>
                {total}
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>Saving Throws:</h3>
                Need to select class
            </div>
        )
    }
    
}
