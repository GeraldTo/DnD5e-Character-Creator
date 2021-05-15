/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import React from "react";
import styles from "../Body.module.css";
import { Button } from "react-bootstrap";

export default function Hitdie(props) {
	const [click, setClick] = useState(false);
	const [hpArr, sethpArr] = useState([]);
	useEffect(() => {
		sethpArr(randHP());
	}, [props.hitdie]);
	useEffect(() => {
		let totalHP = [...hpArr];
		hpArr.length > props.level
			? totalHP.pop()
			: totalHP.push(Math.floor(Math.random() * props.hitdie) + 1);
		sethpArr(totalHP);
	}, [props.level]);
	function randHP() {
		let totalHP = [];
		for (let i = 0; i < props.level; i++) {
			totalHP.push(Math.floor(Math.random() * props.hitdie) + 1);
		}
		return totalHP;
	}
	function handleClick() {
		sethpArr(randHP());
		setClick(true);
	}
	if (props.hitdie) {
		return (
			<div>
				<h3>Roll Hit Points:</h3>
				<div className={styles.Description}>
					<Button variant="secondary" onClick={() => handleClick()}>
						Roll HP
					</Button>{" "}
					{click &&
						hpArr.reduce((a, b) => {
							return a + b;
						}, 0) +
							hpArr.length * props.conMod +
							" (" +
							hpArr.join(", ") +
							")"}
					<br />
					HP = [Hit Die (1d{props.hitdie}) + Consitution Modifier (
					{props.conMod})] per level <br />
					<div>
						<Button
							disabled={props.done}
							variant="secondary"
							className={styles.IncDec}
							onClick={() => {
								props.sethp((prev) => (prev > 1 ? prev - 1 : prev));
							}}
						>
							-{" "}
						</Button>
						<h3 style={{ display: "inline" }}> {props.hp} </h3>
						<Button
							disabled={props.done}
							variant="secondary"
							className={styles.IncDec}
							onClick={() => {
								props.sethp((prev) => prev + 1);
							}}
						>
							+{" "}
						</Button>
					</div>
				</div>
			</div>
		);
	} else {
		return <div> </div>;
	}
}
