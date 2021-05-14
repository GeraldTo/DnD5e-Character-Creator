/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../Body.module.css";
import { DropdownButton, Dropdown, ListGroup } from "react-bootstrap";

export default function Languages(props) {
	const [api, setapi] = useState(null);
	const [langCounter, setLangCounter] = useState([]);
	const total =
		0 +
		(props.race.language_options !== undefined &&
			props.race.language_options.choose) +
		(props.background && props.background.langNum);

	useEffect(() => {
		axios.get(props.url).then((response) => {
			setapi(response.data);
		});
	}, []);
	useEffect(() => {
		// props.setLang(props.race.languages.map(e => e.name))
		props.setInfo((prev) => ({
			...prev,
			languages: props.race.languages.map((e) => e.name),
		}));
		setLangCounter(Array.apply(null, Array(total)));
	}, [props.race, props.background.langNum]);

	const addLang = langCounter.map((_, i) => {
		let langList = [];
		langList.push(
			<Dropdown.Item key={-1} eventKey="">
				---
			</Dropdown.Item>
		);
		if (api) {
			const available = api.results.filter(
				(e) => props.info.languages.indexOf(e.name) < 0
			);
			langList = langList.concat(
				available.map((e, j) => (
					<Dropdown.Item key={j} eventKey={e.name}>
						{e.name}
					</Dropdown.Item>
				))
			);
		}
		function handleAdd(e, i) {
			let all = [...langCounter];
			const raceLang = props.race.languages.map((e) => e.name);
			all[i] = e ? e : undefined;

			setLangCounter(all);
			props.setInfo((prev) => ({
				...prev,
				languages: raceLang.concat(all.filter((el) => el)),
			}));
			// props.setLang(raceLang.concat(all.filter(el => el)))
		}

		return (
			<DropdownButton
				key={i}
				onSelect={(e) => handleAdd(e, i)}
				variant="secondary"
				disabled={props.done}
				title={
					langCounter[i]
						? langCounter[i].length === 1
							? "Select Language"
							: langCounter[i]
						: "Select Language"
				}
			>
				{langList}
			</DropdownButton>
		);
	});
	return (
		<React.Fragment>
			{total > 0 && (
				<ListGroup.Item>
					<h3>Languages</h3>
					<ListGroup variant="flush" className={styles.Description}>
						<ListGroup.Item>
							<h4>Race Languages:</h4> {props.race.language_desc}{" "}
						</ListGroup.Item>
						<ListGroup.Item>
							<h4>Addtitional Languages:</h4> {total}{" "}
						</ListGroup.Item>
						<ListGroup.Item>
							<h4>Total Languages:</h4> {props.info.languages.join(", ")}{" "}
						</ListGroup.Item>
						<ListGroup.Item>{addLang}</ListGroup.Item>
					</ListGroup>
				</ListGroup.Item>
			)}
		</React.Fragment>
	);
}
