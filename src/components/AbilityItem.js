import React,{useState,useEffect} from 'react'

export default function AbilityItem(props) {
    const [val, setVal] = useState(0)
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
        <div>
            {props.ability}
            <button onClick={() => setVal(prev => prev>0 ? prev - 1: prev)}> - </button>
                {val}
            <button onClick={() => setVal(prev => prev + 1)}> + </button> + 
            {props.bonus} (Bonus)  = 
            <div className="Scores"><label>{'_'+(val+props.bonus)+'_'}</label> , {mod(props.abilityMod[props.index])} (Mod)</div>
        </div>
    )
}
