/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Saving from "./Saving";
import Hitdie from "./Hitdie";
import ScoreList from "./Scores/ScoreList";
import styles from "../Body.module.css";
import "./AbilityScore.css";
import Dragon from './Dragon'
import { ListGroup } from "react-bootstrap";

export default function AbilityScore(props) {
	const [firstScore, setFirstScore] = useState(false);
	useEffect(() => {
		const abilities = ["str", "dex", "con", "int", "wis", "cha"];
		const fullName = [
			"Strength",
			"Dexterity",
			"Constitution",
			"Intelligence",
			"Wisdom",
			"Charisma",
		];
		props.setTotalScore(
			[...Array(6)].map(function (_, i) {
				return {
					index: abilities[i],
					fullName: fullName[i],
					total: 10,
					mod: 0,
					saving: false,
				};
			})
		);
	}, []);

	useEffect(() => {
		if (props.info.dragon) {
			let newObj = { ...props.info }
			delete newObj.dragon
			props.setInfo(newObj)
		}
	}, [props.race])

	if (props.info.alignment) {
		return (
			<ListGroup.Item className="Ability">
				<h2>Ability Scores and Modifiers:</h2>
				<ListGroup variant="flush" className={styles.Description}>
					<ListGroup.Item>
						{props.totalScore && (
							<ScoreList
								race={props.race}
								classType={props.classType}
								inc={props.classLevels.current.ability_score_bonuses}
								setFirst={setFirstScore}
								totalScore={props.totalScore}
								done={props.done}
								setTotalScore={props.setTotalScore}
							/>
						)}
					</ListGroup.Item>
					{firstScore && (
						<React.Fragment>
							<ListGroup.Item>
								<Saving
									totalScore={props.totalScore}
									setTotalScore={props.setTotalScore}
									classType={props.classType}
									bonus={props.classLevels.current.prof_bonus}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								<h4>Initiative:</h4>{" "}
								{props.totalScore[1].mod < 0
									? props.totalScore[1].mod
									: "+" + props.totalScore[1].mod}{" "}
								(Dex Mod)
								<br />
							</ListGroup.Item>
							{props.race.trait_options ?
								<ListGroup.Item>
									<Dragon totalScore={props.totalScore} currentLevel={props.classLevels.current} info={props.info} setInfo={props.setInfo} />
								</ListGroup.Item>
								: <></>}
							<ListGroup.Item>
								<Hitdie
									hitdie={props.classType.hit_die}
									conMod={props.totalScore[2].mod}
									currentLevel={props.classLevels.current}
									done={props.done}
									sethp={props.sethp}
									hp={props.hp}
								/>
							</ListGroup.Item>
						</React.Fragment>
					)}
				</ListGroup>
			</ListGroup.Item>
		);
	} else {
		return <div></div>;
	}
}
