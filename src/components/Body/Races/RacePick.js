import React from "react";
import axios from "axios";
import { Button, ButtonGroup } from "react-bootstrap";
import styles from "./Race.module.css";

export default function RacePick(props) {
	const buttons = props.api
		? props.api.results.map((current, i) => (
				<Button
					variant="outline-dark"
					key={i}
					disabled={props.done}
					onClick={() =>
						axios.get(props.url + current.index).then((response) => {
							props.setRace(response.data);
						})
					}
				>
					{current.name}
				</Button>
		  ))
		: [];
	return (
		<ButtonGroup size="lg" className={styles.Buttons}>
			{buttons}
		</ButtonGroup>
	);
}
