/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import React from "react";
import styles from "../Body.module.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";


export default function Hitdie(props) {
	const [hpArr, sethpArr] = useState([]);
	useEffect(() => {
		props.sethp('')
	}, []);

	useEffect(() => {
		sethpArr([]);
	}, [props.currentLevel, props.hitdie, props.conMod]);
	function randHP() {
		let totalHP = [];
		for (let i = 0; i < props.currentLevel.level; i++) {
			totalHP.push(Math.floor(Math.random() * props.hitdie) + 1);
		}
		return totalHP;
	}
	return (
		<div>
			<h3>Roll Hit Points:</h3>
			<div className={styles.Description}>
				<Button variant="secondary" onClick={() => sethpArr(randHP())}>
					Roll HP
				</Button>{" "}
				{hpArr.length > 0 &&
					hpArr.reduce((a, b) => {
						return a + b;
					}, 0) +
					(hpArr.length * props.conMod) +
					(" (" + hpArr.join(", ") + ")")}
				<div>
					HP = [Hit Die (1d{props.hitdie}) + Consitution Modifier (
					{props.conMod})] per level
				</div>
				{props.hp !== null &&
					<FormControl
						placeholder="Enter HP"
						type='number'
						value={props.hp}
						disabled={props.done}
						onFocus={(e) => e.target.select()}
						onChange={(e) => props.sethp(e.target.value)}
					/>}
			</div>
		</div>
	);

}
