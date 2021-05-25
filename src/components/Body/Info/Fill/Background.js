/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
import styles from "../../Body.module.css";

export default function Background(props) {
	const url = process.env.REACT_APP_API;
	const [rolls, setRolls] = useState(null);
	const [skills, setSkills] = useState([]);
	const currentBackground = props.background;
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};
	useEffect(() => {
		axios.get(url + "skills/").then((response) => {
			setSkills(response.data.results);
		});
	}, []);
	function handleRoll() {
		setRolls(
			<div>
				Personality: {Math.floor(Math.random() * 8) + 1} (1d8), Ideals:{" "}
				{Math.floor(Math.random() * 6) + 1} (1d6), Bonds:{" "}
				{Math.floor(Math.random() * 6) + 1} (1d6), Flaws:{" "}
				{Math.floor(Math.random() * 6) + 1} (1d6)
			</div>
		);
	}

	function bonusProf(i) {
		function handleProf(event, i) {
			let prevProf = [...currentBackground.proficiencies];
			prevProf[i] = event;
			props.setBackground((prev) => ({ ...prev, proficiencies: prevProf }));
		}
		let skillList = [];
		skillList.push(
			<Dropdown.Item key={-1} eventKey="">
				---
			</Dropdown.Item>
		);
		const available = skills.filter(
			(e) => currentBackground.proficiencies.indexOf(e.index) < 0
		);
		skillList = skillList.concat(
			available.map((e, j) => (
				<Dropdown.Item key={j} eventKey={e.index}>
					{e.name}
				</Dropdown.Item>
			))
		);
		return (
			<DropdownButton
				disabled={props.done}
				onSelect={(e) => handleProf(e, i)}
				variant="secondary"
				title={
					currentBackground.proficiencies[i]
						? currentBackground.proficiencies[i]
						: "Select Skill"
				}
			>
				{skillList}
			</DropdownButton>
		);
	}

	return (
		<div>
			<h3>Fill Background Info (optional)</h3>
			<div className={styles.Description}>
				<Button
					variant="link"
					onClick={() =>
						openInNewTab("https://d-n-d5e.fandom.com/wiki/Backgrounds")
					}
				>
					More Backgrounds
			</Button>
				<br />
				<h4>Race Suggestion:</h4> {props.classType.background}
				<br />
				<h4>Background:</h4>{" "}
				<input
					disabled={props.done}
					type="text"
					onChange={(event) =>
						props.setBackground((prev) => ({ ...prev, name: event.target.value }))
					}
				/>
				<br />
				<h4>Proficiencies:</h4>
				{bonusProf(0)}
				{bonusProf(1)}
				<h4>Number of Languages:</h4>{" "}
				<input
					type="number"
					min="0"
					value={currentBackground.langNum}
					onFocus={(e) => e.target.select()}
					disabled={props.done}
					onChange={(event) =>
						props.setBackground((prev) => ({
							...prev,
							langNum: event.target.value
								? Math.abs(parseInt(event.target.value))
								: "",
						}))
					}
				/>{" "}
			(usually 0-3) <br />
				<Button variant="secondary" onClick={() => handleRoll()}>
					Roll Characteristics
			</Button>
				<br />
				{rolls}
				<h4>Personality:</h4>{" "}
				<input
					type="text"
					value={currentBackground.personalities}
					disabled={props.done}
					onChange={(event) =>
						props.setBackground((prev) => ({
							...prev,
							personalities: event.target.value,
						}))
					}
				/>
				<br />
				<h4>Ideals:</h4>{" "}
				<input
					type="text"
					value={currentBackground.ideals}
					disabled={props.done}
					onChange={(event) =>
						props.setBackground((prev) => ({
							...prev,
							ideals: event.target.value,
						}))
					}
				/>
				<br />
				<h4>Bonds:</h4>{" "}
				<input
					type="text"
					value={currentBackground.bonds}
					disabled={props.done}
					onChange={(event) =>
						props.setBackground((prev) => ({
							...prev,
							bonds: event.target.value,
						}))
					}
				/>
				<br />
				<h4>Flaws:</h4>{" "}
				<input
					type="text"
					value={currentBackground.flaws}
					disabled={props.done}
					onChange={(event) =>
						props.setBackground((prev) => ({
							...prev,
							flaws: event.target.value,
						}))
					}
				/>
				<br />
			</div>
		</div>
	);
}
