import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Body.module.css";
import { ListGroup } from "react-bootstrap";

export default function Level(props) {
	return (
		<ListGroup.Item>
			<h2>Character Level:</h2>
			<Button
				variant="secondary"
				className={styles.IncDec}
				disabled={props.done}
				onClick={() => props.setlevel((prev) => (prev > 1 ? prev - 1 : prev))}
			>
				{" "}
				-{" "}
			</Button>{" "}
			<h3 style={{ display: "inline" }}>{props.level}</h3>{" "}
			<Button
				variant="secondary"
				className={styles.IncDec}
				disabled={props.done}
				onClick={() => props.setlevel((prev) => (prev < 20 ? prev + 1 : prev))}
			>
				{" "}
				+{" "}
			</Button>
		</ListGroup.Item>
	);
}
