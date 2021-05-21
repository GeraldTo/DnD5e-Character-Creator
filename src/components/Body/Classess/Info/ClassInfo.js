/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import styles from '../../Body.module.css'
import { Button } from 'react-bootstrap';
import ClassExtra from './ClassExtra'
import ClassTable from './ClassTable'

export default function ClassInfo(props) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={styles.Description}>
            <ClassTable
                level={props.level}
                classType={props.classType}
                classLevels={props.classLevels}
                setClassLevels={props.setClassLevels} />
            <Button variant="secondary" onClick={() => setToggle(prev => !prev)}>More Info {toggle ? '^' : 'v'}</Button>
            {toggle && <ClassExtra
                classType={props.classType}
                classLevels={props.classLevels}
                level={props.level} />}
        </div>
    )

}
