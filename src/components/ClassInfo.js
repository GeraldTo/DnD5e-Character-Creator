import React,{useEffect} from 'react'

export default function ClassInfo(props) {
    useEffect(() => {
        if(props.classType){
            let saves = [0,0,0,0,0,0]
            for (let i = 0; i < props.classType.saving_throws.length; i++) {
                props.classType.saving_throws[i].index==="str" ?  saves[0]= 1
                :props.classType.saving_throws[i].index==="dex" ? saves[1] = 1
                :props.classType.saving_throws[i].index==="con" ? saves[2] = 1
                :props.classType.saving_throws[i].index==="int" ? saves[3] = 1
                :props.classType.saving_throws[i].index==="wis" ? saves[4] = 1
                :props.classType.saving_throws[i].index==="cha" ? saves[5] = 1
                : saves[5] =  saves[5]*1 /* needs a return statement in turnary*/ 
            }
            props.setsaving(saves)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.classType])

    if (props.classType) {
        let proficiencies = []
        for (let i = 0; i < props.classType.proficiencies.length; i++) {
            proficiencies.push(props.classType.proficiencies[i].name)
        }
        let saving = []
        for (let i = 0; i < props.classType.saving_throws.length; i++) {
            saving.push(props.classType.saving_throws[i].name)
        }
        
        return (
            <div className="description">
                <h3>{props.classType.name}</h3> <br/>
                <h3>Hit Dice:</h3> 1d{props.classType.hit_die}<br />
                <h3>Saving Throws:</h3> {saving.join(', ')}<br/>
                <label>Proficiencies:</label> {proficiencies.join(', ')}<br />
            </div>
        )
    }
    else { return (<div> </div>) }
}
