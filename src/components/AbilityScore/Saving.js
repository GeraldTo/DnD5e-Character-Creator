import React,{useState,useEffect} from 'react'

export default function Saving(props) {
    const abilities = ["Strength", "Dexterity","Constitution","Intelligence","Wisdom","Charisma"]
    const [total, setTotal] = useState(null)
    useEffect(() => {
        let totalSaving = []
        for (let i = 0; i < props.saving.length; i++) {
            totalSaving.push( <div key={i}> 
                                {props.saving[i] ?
                                    props.abilityMod[i]<0 ? 
                                        <div className="saveNum">{props.abilityMod[i]}</div>
                                        :<div className="saveNum">{'+'+props.abilityMod[i]}</div>
                                    : <div className="saveNum">   </div>} {abilities[i]}
                                </div>)
        }
        setTotal(totalSaving)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.saving,props.abilityMod])
    return (
        <div>
            <h4>Saving Throws:</h4>
            {total}
        </div>
    )

    
}
