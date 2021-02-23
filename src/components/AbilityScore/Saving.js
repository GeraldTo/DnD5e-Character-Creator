import React, { useEffect } from 'react'

export default function Saving(props) {
    const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    useEffect(() => {
        if (props.classType) {
            let saves = [0, 0, 0, 0, 0, 0]
            for (let i = 0; i < props.classType.saving_throws.length; i++) {
                props.classType.saving_throws[i].index === "str" ? saves[0] = 1
                    : props.classType.saving_throws[i].index === "dex" ? saves[1] = 1
                        : props.classType.saving_throws[i].index === "con" ? saves[2] = 1
                            : props.classType.saving_throws[i].index === "int" ? saves[3] = 1
                                : props.classType.saving_throws[i].index === "wis" ? saves[4] = 1
                                    : props.classType.saving_throws[i].index === "cha" ? saves[5] = 1
                                        : saves[5] = saves[5] * 1 /* needs a return statement in turnary*/
            }
            props.setsaving(saves)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.classType, props.abilityMod])
    let totalSaving = []
    for (let i = 0; i < props.saving.length; i++) {
        totalSaving.push(<div key={i}>
            {props.saving[i] ?
                props.abilityMod[i] < 0 ?
                    <div className="saveNum">{props.abilityMod[i]}</div>
                    : <div className="saveNum">{'+' + props.abilityMod[i]}</div>
                : <div className="saveNum">   </div>} {abilities[i]}
        </div>)
    }
    return (
        <div>
            <h4>Saving Throws:</h4>
            {totalSaving}
        </div>
    )


}
