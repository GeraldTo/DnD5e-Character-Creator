/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Name from './Fill/Name'
import Alignment from './Fill/Alignment'
import Languages from './Fill/Languages'
import Background from './Fill/Background'
import styles from '../Body.module.css'
import { Button } from 'react-bootstrap';


export default function Information(props) {
    const url = process.env.REACT_APP_API
    const [toggle, setToggle] = useState(false)
    const [first, setFirst] = useState(false)
    useEffect(() => {
        props.setBackground({ name: '', langNum: 0, personalities: '', ideals: '', bonds: '', flaws: '' })
        props.setInfo({ name: '', age: '', height: '', weight: '', eyes: '', skin: '', hair: '' })
    }, [])
    return (
        <div>
            <h2>Choose Information</h2>
            <div className={styles.Description}>
                {props.info &&
                    <div>
                        < Name setInfo={props.setInfo} info={props.info} race={props.race} setFirst={setFirst} />
                        {first && <div>
                            <Button variant="secondary" onClick={() => setToggle(prev => !prev)}>Backgrounds (optional) {toggle ? '^' : 'v'}</Button>
                            {toggle && <Background classType={props.classType} background={props.background} setBackground={props.setBackground} />}
                            <Languages url={url + 'languages/'} race={props.race} background={props.background} setLang={props.setLang} lang={props.lang} />
                            <Alignment race={props.race} url={url + 'alignments/'} info={props.info} setInfo={props.setInfo} />
                        </div>}
                    </div>}
            </div>
        </div>
    )

}
