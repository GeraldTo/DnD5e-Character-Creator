import React, { useState } from 'react'
import Head from './components/Head/Head'
import Body from './components/Body/Body';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'


export default function App() {
    const [start, setStart] = useState(false)
    // const info = 'This custom character builder. It\'s meant to be used for levels between level 1-20. There are no subclass nor subraces included. Backgrounds aren\'t listed due to restrictions with the api'
    return (
        <div className={styles.App}>
            <Head />
            {start ?
                <Body /> :
                <Button as="input" className={styles.Start} size="lg" onClick={() => setStart(true)} value="Start" readOnly />
            }
        </div>
    )
}
