import React, { useState } from 'react'

export default function Background(props) {
    const [rolls, setRolls] = useState(null)
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    function handleClick() {
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
            Background: <input type="text" /><br />
            Proficiencies: <input /> <input /><br />
            Number of Languages: <input /><br />
            <button onClick={() => handleClick()}>Roll Characteristics</button><br />
            {rolls}
            Personality: <input type="text" /><br />
            Ideals: <input type="text" /><br />
            Bonds: <input type="text" /><br />
            Flaws: <input type="text" /><br />
        </div>
    )
}
