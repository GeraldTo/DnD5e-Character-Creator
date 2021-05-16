/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
	Button,
	ListGroup,
	Form,
	DropdownButton,
	Dropdown,
} from "react-bootstrap";
import axios from "axios";
import styles from "./Gear.module.css";

export default function Weapons(props) {
	const [simpleList, setSimpleList] = useState([]);
	const [martialList, setMartialList] = useState([]);
	const [totalWeapons, setTotalWeapons] = useState([null, null, null]);
	function handleInit(response, setList) {
		const urls = response.equipment.map((e) => props.url + e.url);
		let promiseArray = urls.map((e) => axios.get(e));
		Promise.all(promiseArray)
			.then((e) => {
				setList(e.map((el) => el.data));
			})
			.catch(console.log);
	}
	useEffect(() => {
		axios
			.get(props.url + "/api/equipment-categories/simple-weapons/")
			.then((response) => {
				handleInit(response.data, setSimpleList);
			});

		axios
			.get(props.url + "/api/equipment-categories/martial-weapons/")
			.then((response) => {
				handleInit(response.data, setMartialList);
			});
	}, []);

	useEffect(() => {
		const newObj = totalWeapons
			.filter((e) => e)
			.map((e, i) =>
				Object.assign(e, {
					atk:
						(e.prof ? 1 + Math.ceil(props.level / 4) : 0) +
						(e.strMod ? props.totalScore[0].mod : props.totalScore[1].mod),
					dmg: e.damage
						? (e.strMod
								? props.totalScore[0].mod === 0
									? ""
									: props.totalScore[0].mod + "+"
								: props.totalScore[1].mod === 0
								? ""
								: props.totalScore[1].mod + "+") +
						  (e.damage.damage_dice + "/" + e.damage.damage_type.name)
						: "None",
				})
			);
		props.setInventory((prev) => ({ ...prev, weapons: newObj }));
	}, [
		totalWeapons,
		props.totalScore[0].mod,
		props.totalScore[1].mod,
		props.level,
	]);

	function weapons(list, type, index) {
		function handleSelect(event) {
			let curr = [...totalWeapons];
			const currInd = list[list.map((e) => e.index).indexOf(event)];
			curr[index] = Object.assign(currInd, {
				prof: false,
				strMod: currInd.weapon_range === "Melee",
			});
			setTotalWeapons(curr);
		}
		const weaponList = list.map((e, j) => (
			<Dropdown.Item key={j} eventKey={e.index}>
				{e.name}
			</Dropdown.Item>
		));
		return (
			<DropdownButton
				onSelect={(e) => handleSelect(e)}
				drop="up"
				title={type + " Weapons"}
				variant="secondary"
			>
				{weaponList}
			</DropdownButton>
		);
	}

	function handleRemove(index) {
		let removal = [...totalWeapons];
		removal[index] = null;
		setTotalWeapons(removal);
	}
	const [type, setType] = useState([true, true, true]);
	function handleType(index, newType) {
		let currType = [...type];
		currType[index] = newType;
		setType(currType);
	}
	function handleProf(index) {
		let currProf = [...totalWeapons];
		currProf[index].prof = !currProf[index].prof;
		setTotalWeapons(currProf);
	}
	function handleMod(index) {
		let currProf = [...totalWeapons];
		currProf[index].strMod = !currProf[index].strMod;
		setTotalWeapons(currProf);
	}
	return (
		<div>
			<h3>Choose Weapons:</h3>
			<ListGroup variant="flush" className={styles.Description}>
				{totalWeapons.map((current, i) => (
					<ListGroup.Item key={i}>
						<Form>
							<Form.Check
								type="radio"
								inline
								name="group"
								label="Simple"
								checked={type[i]}
								onChange={() => handleType(i, true)}
							/>
							<Form.Check
								type="radio"
								inline
								checked={!type[i]}
								name="group"
								label="Martial"
								onChange={() => handleType(i, false)}
							/>
							{type[i]
								? weapons(simpleList, "Simple", i)
								: weapons(martialList, "Martial", i)}
							{current && (
								<ListGroup className={styles.Lists}>
									<ListGroup.Item>
										<h3>{current.name}</h3>
									</ListGroup.Item>
									<ListGroup.Item>
										{current.category_range} Weapon
									</ListGroup.Item>
									<ListGroup.Item>
										<Form.Check
											label="Proficient"
											value={current.prof}
											onChange={() => handleProf(i)}
										/>
										ATK Bonus: +
										{(totalWeapons[i].prof
											? 1 + Math.ceil(props.level / 4)
											: 0) +
											(current.strMod
												? props.totalScore[0].mod
												: props.totalScore[1].mod)}
									</ListGroup.Item>
									<ListGroup.Item>
										Damage:{" "}
										{current.damage
											? (current.strMod
													? props.totalScore[0].mod === 0
														? ""
														: props.totalScore[0].mod + "+"
													: props.totalScore[1].mod === 0
													? ""
													: props.totalScore[1].mod + "+") +
											  (current.damage.damage_dice +
													"/" +
													current.damage.damage_type.name)
											: "None"}
									</ListGroup.Item>
									<ListGroup.Item>
										Properties:{" "}
										{current.properties.map((e) => e.name).join(", ")}
									</ListGroup.Item>
									<ListGroup.Item>
										<Form.Check
											type="radio"
											inline
											onChange={() => handleMod(i)}
											name="group1"
											label="STR"
											checked={current.strMod}
										/>
										<Form.Check
											type="radio"
											inline
											onChange={() => handleMod(i)}
											name="group1"
											label="DEX"
											checked={!current.strMod}
										/>
										<br />
										(Weapons with the fineese property can choose mod)
									</ListGroup.Item>
									<ListGroup.Item>Weight: {current.weight}lb</ListGroup.Item>
									<ListGroup.Item>
										<Button
											variant="outline-danger"
											onClick={() => handleRemove(i)}
										>
											Remove
										</Button>
									</ListGroup.Item>
								</ListGroup>
							)}
						</Form>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
}
