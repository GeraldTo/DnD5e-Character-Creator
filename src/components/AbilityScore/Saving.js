import React, { useEffect } from 'react'

export default function Saving(props) {
    useEffect(() => {
        if (props.classType) {
            let saves = [false, false, false, false, false, false]
            for (let i = 0; i < props.classType.saving_throws.length; i++) {
                const index = (props.totalScore.map(e => e.index)).indexOf(props.classType.saving_throws[i].index)
                saves[index] = true
            }
            props.setTotalScore(props.totalScore.map(function (e, i) {
                e.saving = saves[i]
                return e
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.classType])
    let totalSaving = []
    for (let i = 0; i < props.totalScore.length; i++) {
        totalSaving.push(<div key={i}>
            {props.totalScore[i].saving ?
                (props.totalScore[i].mod < 0 ?
                    <div className="saveNum">{props.totalScore[i].mod}</div>
                    : <div className="saveNum">{'+' + props.totalScore[i].mod}</div>)
                : <div className="saveNum">   </div>} {props.totalScore[i].fullName}
        </div>)
    }
    return (
        <div>
            <h4>Saving Throws:</h4>
            {totalSaving}
        </div>
    )


}
