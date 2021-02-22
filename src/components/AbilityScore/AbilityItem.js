import React,{useState,useEffect} from 'react'

export default function AbilityItem(props) {
    const [val, setVal] = useState(10)
    const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
    function mod(input) {
        return input < 0 ?  input :  '+' + input
    }
    useEffect(() => {
        let newArr = [...props.score]
        newArr[props.index] = val
        props.setScore(newArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val])
    
    return (
        <div className="AbilityItem">
            <div className="AbilityNames">{abilities[props.index]}</div>
            <div><button className="IncDec" onClick={() => setVal(prev => prev>0 ? prev - 1: prev)}> - </button>
                {val}
            <button className="IncDec" onClick={() => setVal(prev => (prev+props.bonus)<20 ? prev + 1:prev)}> + </button> </div>
            <div>+ {props.bonus} (Bonus) </div>
            <div className="Score">{val+props.bonus}</div>
            <div>{mod(props.abilityMod[props.index])} (Mod)</div>
        </div>
    )
}
