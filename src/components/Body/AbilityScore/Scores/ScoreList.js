/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import AbilityItem from "./AbilityItem";
import Rolls from "./Rolls";
import styles from "../AbilityScore.module.css";

export default function ScoreList(props) {
	const [score, setScore] = useState([10, 10, 10, 10, 10, 10]);
	const raceBonus = [0, 0, 0, 0, 0, 0];
	for (let i = 0; i < props.race.ability_bonuses.length; i++) {
		const index = props.totalScore
			.map((e) => e.index)
			.indexOf(props.race.ability_bonuses[i].ability_score.index);
		raceBonus[index] = props.race.ability_bonuses[i].bonus;
	}

	useEffect(() => {
		props.setTotalScore(
			props.totalScore.map(function (e, i) {
				e.total = score[i] + raceBonus[i];
				e.mod = Math.floor((e.total - 10) / 2);
				return e;
			})
		);
	}, [score, props.race]);

	return (
		<div>
			<h3>Allocate Rolls:</h3>
			<div className={styles.Description}>
				<Rolls />
				<h4>Suggestions:</h4> {props.classType.scores}
				<br />
				<h4>Feats:</h4> Can Distribute{" "}
				{props.feats.filter((e) => e.index.split("-")[1] === "ability").length}{" "}
				Point(s) to any Score(s) (Can't increse past 20)
				<div className={styles.Buttons}>
					{Array.apply(null, Array(6)).map((x, i) => (
						<AbilityItem
							key={i}
							bonus={raceBonus}
							totalScore={props.totalScore}
							score={score}
							setScore={setScore}
							index={i}
							setFirst={props.setFirst}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
