import React, { useState } from 'react'

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
    return (
        <div>
            <h3>Choose Background</h3>
            <button onClick={() => openInNewTab('https://d-n-d5e.fandom.com/wiki/Backgrounds')}>Click Here For Background Info</button><br />
            <h4>Race Suggestion:</h4> {props.classType.background}<br />
            <h4>Background:</h4> <input type="text" onChange={event => props.setBackground(prev => ({ ...prev, name: event.target.value }))} /><br />
            <h4>Proficiencies:</h4> <input /> <input /><br />
            <h4>Number of Languages:</h4> <input type="number" max="3" min="0" onChange={event =>
                props.setBackground(prev => ({ ...prev, langNum: parseInt(Math.abs(event.target.value < 4 ? event.target.value : 0)) }))} /> (only 0-3 valid) <br />
            <button onClick={() => handleRoll()}>Roll Characteristics</button><br />
            {rolls}
            <h4>Personality:</h4> <input type="text" value={props.background.personalities} onChange={event => props.setBackground(prev => ({ ...prev, personalities: event.target.value }))} /><br />
            <h4>Ideals:</h4> <input type="text" value={props.background.ideals} onChange={event => props.setBackground(prev => ({ ...prev, ideals: event.target.value }))} /><br />
            <h4>Bonds:</h4> <input type="text" value={props.background.bonds} onChange={event => props.setBackground(prev => ({ ...prev, bonds: event.target.value }))} /><br />
            <h4>Flaws:</h4> <input type="text" value={props.background.flaws} onChange={event => props.setBackground(prev => ({ ...prev, flaws: event.target.value }))} /><br />
        </div>
    )
}
