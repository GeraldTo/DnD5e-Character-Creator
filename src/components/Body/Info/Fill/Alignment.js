import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Info.module.css";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";

export default function Alignment(props) {
	const [api, setapi] = useState(null);

	useEffect(() => {
		axios.get(props.url).then((response) => {
			setapi(response.data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const buttons = api
		? api.results.map((current, i) => (
				<Button
					variant="outline-dark"
					disabled={props.done}
					key={i}
					onClick={() =>
						axios.get(props.url + current.index).then((response) => {
							props.setInfo((prev) => ({ ...prev, alignment: response.data }));
						})
					}
				>
					{current.name}
				</Button>
		  ))
		: [];
	return (
		<ListGroup.Item>
			<h3>Allignments</h3>
			<div className={styles.Description}>
				<h4>Suggestion:</h4> {props.race.alignment}
				<br />
				<ButtonGroup size="lg" className={styles.Buttons}>
					{buttons}
				</ButtonGroup>
				{props.info.alignment && (
					<ListGroup horizontal>
						<ListGroup.Item>
							<h4>{props.info.alignment.name}</h4>{" "}
						</ListGroup.Item>
						<ListGroup.Item>{props.info.alignment.desc}</ListGroup.Item>
					</ListGroup>
				)}
			</div>
		</ListGroup.Item>
	);
}
