import React,{useState, useEffect} from 'react'

export default function Languages(props) {
    const [LangCount, setLandCount] = useState(0)
    useEffect(() => {
        let languages = []
        for (let i = 0; i < props.race.languages.length; i++) {
            languages.push(props.race.languages[i].index)
        } 
        props.setLang(languages)
        let langCount = 0
        if(props.race){
            langCount = props.race.language_options ? props.race.language_options.choose : 0
        }
        setLandCount(langCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.race])
    return (
        <div>
            <h3>Choose Langauges</h3>
            {LangCount}<br />
            <h4>Race Languages:</h4> {props.race.language_desc}<br />
            <h4>Current Languages:</h4> {props.lang.join(', ')}
        </div>
    )
}
