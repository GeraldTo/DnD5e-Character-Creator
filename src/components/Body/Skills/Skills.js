/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Body.module.css";
import SkillItem from "./SkillItem";
import { Table, Button, ListGroup } from "react-bootstrap";

export default function Skills(props) {
	const [display, setDisplay] = useState(false);
	const url = process.env.REACT_APP_API;
	function handleInit(response) {
		const urls = response.results.map((e) => url + "skills/" + e.index);
		let promiseArray = urls.map((e) => axios.get(e));
		Promise.all(promiseArray)
			.then((e) => {
				props.setSkills(
					e.map((el, i) => ({
						data: el.data,
						prof: false,
						total: 0,
					}))
				);
			})
			.catch(console.log);
	}
	useEffect(() => {
		axios.get(url + "skills/").then((response) => {
			handleInit(response.data);
		});
	}, []);
	const currentBackProf = props.proficiencies.filter((e) => e);
	const currentRaceProf = props.race.starting_proficiencies.filter(e => e.index.includes('skill')).map(e => e.index.replace('skill-', ''))
	const currentSkill = props.skills;
	const head = ["Bonus", "Total", "Skill", "Mod", "Expert"];
	const skillIndex =
		props.classType.proficiency_choices[0].from[0].index.indexOf("skill") === 0
			? 0
			: 2;
	return (
		<ListGroup.Item>
			<h3>Choose Your Skills</h3>
			<ListGroup variant="flush" className={styles.Description}>
				<ListGroup.Item>
					<h4>Description: </h4> A skill represents a specific aspect of an
					ability score by using its modifier.
				</ListGroup.Item>
				<ListGroup.Item>
					<h4>Proficiency Bonus: </h4> +{props.bonus}
				</ListGroup.Item>
				<ListGroup.Item>
					<h4>Choices:</h4>
					<ListGroup>
						<ListGroup.Item>
							Class choose {props.classType.proficiency_choices[skillIndex].choose}{" "}
							from:{" "}
							{props.classType.proficiency_choices[skillIndex].from
								.map((e) => e.name.replace("Skill: ", ""))
								.join(", ")}{" "}
						</ListGroup.Item>
						{props.race.starting_proficiency_options &&
							props.race.starting_proficiency_options.from.filter(e => e.index.includes('skill')).length > 0 && (
								<ListGroup.Item>
									Race choose {props.race.starting_proficiency_options.choose}{" "}
									from:{" "}
									{props.race.starting_proficiency_options.from
										.map((e) => e.name.replace("Skill: ", ""))
										.join(", ")}{" "}
								</ListGroup.Item>
							)}
						{currentBackProf.length > 0 && (
							<ListGroup.Item>
								Backgrounds: {currentBackProf.join(", ")}
							</ListGroup.Item>
						)}
						{currentRaceProf.length > 0 && (
							<ListGroup.Item>
								Race Deafult: {currentRaceProf.join(', ')}
							</ListGroup.Item>
						)}
						<ListGroup.Item>
							(Also check traits and features for any extra skills)
						</ListGroup.Item>
					</ListGroup>
				</ListGroup.Item>
				<ListGroup.Item>
					<Button
						variant="secondary"
						onClick={() => setDisplay((prev) => !prev)}
					>
						{display ? "Hide Details" : "Display Details"}
					</Button>
					<Table striped size="sm">
						<thead>
							<tr>
								{head.map((el, i) => {
									return <th key={i}>{el}</th>;
								})}
								{display && <th>Description</th>}
							</tr>
						</thead>
						<tbody>
							{currentSkill.map((e, i) => (
								<SkillItem
									key={i}
									skills={currentSkill}
									setSkills={props.setSkills}
									index={i}
									done={props.done}
									display={display}
									same={currentBackProf.indexOf(e.data.index) > -1 ||
										currentRaceProf.indexOf(e.data.index) > -1}
									totalScore={props.totalScore}
									profBonus={props.bonus}
								/>
							))}
						</tbody>
					</Table>
				</ListGroup.Item>
				<ListGroup.Item>
					<h4>Passive Wisdom:</h4>{" "}
					{currentSkill.length > 0
						? currentSkill[11].total < 0
							? currentSkill[11].total
							: "+" + currentSkill[11].total
						: +0}{" "}
					(Perception)
				</ListGroup.Item>
			</ListGroup>
		</ListGroup.Item>
	);
}
