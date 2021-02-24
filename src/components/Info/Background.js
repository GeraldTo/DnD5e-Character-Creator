import React from 'react'

export default function Background(props) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div>
            <h3>Choose Background</h3>
            <button onClick={() => openInNewTab('https://d-n-d5e.fandom.com/wiki/Backgrounds')}>Click Here For Background Info</button><br />
            <h4>Race Suggestion:</h4> {props.classType.background}<br />
            Background: <input type="text" /><br />
            Proficiencies: <input /> <input /><br />
            Number of Languages: <input /><br />
            <button>Roll Characteristics</button><br />
            Personality: <input type="text" /><br />
            Ideals: <input type="text" /><br />
            Bonds: <input type="text" /><br />
            Flaws: <input type="text" /><br />
        </div>
    )
}
