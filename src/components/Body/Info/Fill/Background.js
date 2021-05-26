/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, DropdownButton, Dropdown, InputGroup, ListGroup, FormControl } from "react-bootstrap";
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
				<ListGroup variant="flush">
					<ListGroup.Item>
						<Button
							variant="link"
							onClick={() => openInNewTab("https://d-n-d5e.fandom.com/wiki/Backgrounds")}
						>
							More Backgrounds Here Or Use Book
						</Button>
					</ListGroup.Item>
					<ListGroup.Item>
						<h4>Usual for {props.classType.name}:</h4> {props.classType.background}
					</ListGroup.Item>
					<ListGroup.Item>
						<label>Find background and fill info based on it</label>
					</ListGroup.Item>
					<ListGroup.Item>
						<InputGroup size="lg">
							<InputGroup.Prepend>
								<InputGroup.Text>
									<h4>Name</h4>
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Background Name"
								value={currentBackground.name}
								disabled={props.done}
								onFocus={(e) => e.target.select()}
								onChange={(event) =>
									props.setBackground((prev) => ({ ...prev, name: event.target.value }))
								}
							/>
						</InputGroup>
					</ListGroup.Item>
					<ListGroup.Item>
						<h4>Background Skills</h4>
						{bonusProf(0)}
						{bonusProf(1)}
					</ListGroup.Item>
					<ListGroup.Item>
						<InputGroup size="lg">
							<InputGroup.Prepend>
								<InputGroup.Text>
									<h4>Num of Langs</h4>
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Background Langs"
								type="number"
								value={currentBackground.langNum}
								disabled={props.done}
								onFocus={(e) => e.target.select()}
								onChange={(event) =>
									props.setBackground((prev) => ({
										...prev,
										langNum: event.target.value
											? Math.abs(parseInt(event.target.value))
											: "",
									}))
								}
							/>
						</InputGroup>

					</ListGroup.Item>
					<ListGroup.Item>
						<Button variant="secondary" onClick={() => handleRoll()}>
							Roll Characteristics
						</Button>
						{rolls}



						<InputGroup size="lg">
							<InputGroup.Prepend>
								<InputGroup.Text>
									<h4>Personality</h4>
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Background Personality"
								value={currentBackground.personalities}
								disabled={props.done}
								onFocus={(e) => e.target.select()}
								onChange={(event) =>
									props.setBackground((prev) => ({
										...prev,
										personalities: event.target.value,
									}))
								}
							/>
						</InputGroup>


						<InputGroup size="lg">
							<InputGroup.Prepend>
								<InputGroup.Text>
									<h4>Ideals</h4>
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Background Ideals"
								value={currentBackground.ideals}
								disabled={props.done}
								onFocus={(e) => e.target.select()}
								onChange={(event) =>
									props.setBackground((prev) => ({
										...prev,
										ideals: event.target.value,
									}))
								}
							/>
						</InputGroup>

						<InputGroup size="lg">
							<InputGroup.Prepend>
								<InputGroup.Text>
									<h4>Bonds</h4>
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Background Bonds"
								value={currentBackground.bonds}
								disabled={props.done}
								onFocus={(e) => e.target.select()}
								onChange={(event) =>
									props.setBackground((prev) => ({
										...prev,
										bonds: event.target.value,
									}))
								}
							/>
						</InputGroup>

						<InputGroup size="lg">
							<InputGroup.Prepend>
								<InputGroup.Text>
									<h4>Flaws</h4>
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Background Flaw"
								value={currentBackground.flaws}
								disabled={props.done}
								onFocus={(e) => e.target.select()}
								onChange={(event) =>
									props.setBackground((prev) => ({
										...prev,
										flaws: event.target.value,
									}))
								}
							/>
						</InputGroup>
					</ListGroup.Item>
				</ListGroup>

			</div>
		</div>
	);
}
