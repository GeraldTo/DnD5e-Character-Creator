import React from 'react'

export default function Name(props) {
    return (
        <div>
            <h3>Name Your Character</h3>
            <input
                type="text"
                onKeyPress={event => (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)}
                placeholder="Enter Name (Letters Only)"
                onChange={event=>props.setName(event.target.value)}
            />
        </div>
    )
}
