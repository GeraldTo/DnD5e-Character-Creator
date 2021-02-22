import React,{useState} from 'react'
import Head from './components/Head'
import Body from './components/Body';


export default function App() {
    const [start, setStart] = useState(false)
    const info = 'This custom character builder. Its meant to be used for levels between level 1-20. There are no subclass nor subraces included.'
    return (
        <div className="appMain">
            <Head/>
            {start ? 
                <Body/> : 
                <div className="bodyMain">
                    <h2 style={{textAlign:'center',fontWeight: 'normal'}}>{info}</h2>
                    <button className="start" onClick={()=>setStart(true)}>Start</button>
                </div>}
        </div>
    )
}
