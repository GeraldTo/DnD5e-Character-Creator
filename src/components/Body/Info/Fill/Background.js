import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import styles from '../../Body.module.css'

export default function Background(props) {
    const [rolls, setRolls] = useState(null)
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    function handleRoll() {
        setRolls(<div>
            Personality: {Math.floor(Math.random() * 8) + 1} (1d8),
            Ideals: {Math.floor(Math.random() * 6) + 1} (1d6),
            Bonds: {Math.floor(Math.random() * 6) + 1} (1d6),
            Flaws: {Math.floor(Math.random() * 6) + 1} (1d6)
        </div>)
    }
    function handleProf(event, i) {
        let prevProf = [...props.background.proficiencies]
        prevProf[i] = event.target.value
        props.setBackground(prev => ({ ...prev, proficiencies: prevProf }))
    }

    return (
        <div className={styles.Description}>
            <Button variant="link" onClick={() => openInNewTab('https://d-n-d5e.fandom.com/wiki/Backgrounds')}>More Backgrounds</Button><br />
            <h4>Race Suggestion:</h4> {props.classType.background}<br />
            <h4>Background:</h4> <input type="text" onChange={event => props.setBackground(prev => ({ ...prev, name: event.target.value }))} /><br />
            <h4>Proficiencies:</h4> <input value={props.background.proficiencies[0]} onChange={(e) => handleProf(e, 0)} /> <input value={props.background.proficiencies[1]} onChange={(e) => handleProf(e, 1)} /><br />
            <h4>Number of Languages:</h4> <input type="number" min="0" value={props.background.langNum} onFocus={e => e.target.select()} onChange={event =>
                props.setBackground(prev => ({ ...prev, langNum: event.target.value ? Math.abs(parseInt(event.target.value)) : '' }))} /> (usually 0-3) <br />
            <button onClick={() => handleRoll()}>Roll Characteristics</button><br />
            {rolls}
            <h4>Personality:</h4> <input type="text" value={props.background.personalities} onChange={event => props.setBackground(prev => ({ ...prev, personalities: event.target.value }))} /><br />
            <h4>Ideals:</h4> <input type="text" value={props.background.ideals} onChange={event => props.setBackground(prev => ({ ...prev, ideals: event.target.value }))} /><br />
            <h4>Bonds:</h4> <input type="text" value={props.background.bonds} onChange={event => props.setBackground(prev => ({ ...prev, bonds: event.target.value }))} /><br />
            <h4>Flaws:</h4> <input type="text" value={props.background.flaws} onChange={event => props.setBackground(prev => ({ ...prev, flaws: event.target.value }))} /><br />
        </div>
    )
}
