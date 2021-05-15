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
	const currentProf = props.proficiencies.filter((e) => e);
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
					<h4>Proficiency Bonus: </h4> +{1 + Math.ceil(props.level / 4)}
				</ListGroup.Item>
				<ListGroup.Item>
					<h4>Choices:</h4>
					<ListGroup>
						<ListGroup.Item>
							Choose {props.classType.proficiency_choices[skillIndex].choose}{" "}
							from:{" "}
							{props.classType.proficiency_choices[skillIndex].from
								.map((e) => e.name.replace("Skill: ", ""))
								.join(", ")}{" "}
							<br />
						</ListGroup.Item>
						{currentProf.length > 0 && (
							<ListGroup.Item>
								Backgrounds: {currentProf.join(", ")}
							</ListGroup.Item>
						)}
					</ListGroup>
					<ListGroup.Item>
						(Also check traits and features for any extra skills)
					</ListGroup.Item>
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
									same={currentProf.indexOf(currentSkill[i].data.index) > -1}
									totalScore={props.totalScore}
									profBonus={1 + Math.ceil(props.level / 4)}
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
