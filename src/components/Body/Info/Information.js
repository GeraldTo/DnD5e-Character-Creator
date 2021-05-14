/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Name from "./Fill/Name";
import Alignment from "./Fill/Alignment";
import Languages from "./Fill/Languages";
import Background from "./Fill/Background";
import styles from "../Body.module.css";
import { Button, ListGroup } from "react-bootstrap";

export default function Information(props) {
	const url = process.env.REACT_APP_API;
	const [toggle, setToggle] = useState(false);
	const [first, setFirst] = useState(false);

	useEffect(() => {
		props.setBackground({
			name: "",
			langNum: "",
			personalities: "",
			ideals: "",
			bonds: "",
			flaws: "",
			proficiencies: ["", ""],
		});
		props.setInfo({ cname: "", pname: "", alignment: "", languages: [] });
	}, []);

	return (
		<ListGroup.Item>
			<h2>Choose Information</h2>
			<div className={styles.Description}>
				{props.info && (
					<ListGroup variant="flush">
						<Name
							setInfo={props.setInfo}
							info={props.info}
							done={props.done}
							race={props.race}
							setFirst={setFirst}
						/>
						{first && (
							<React.Fragment>
								<ListGroup.Item>
									<Button
										variant="secondary"
										onClick={() => setToggle((prev) => !prev)}
									>
										Backgrounds (optional) {toggle ? "^" : "v"}
									</Button>
									{toggle && (
										<Background
											done={props.done}
											classType={props.classType}
											background={props.background}
											setBackground={props.setBackground}
										/>
									)}
								</ListGroup.Item>
								<Languages
									url={url + "languages/"}
									race={props.race}
									done={props.done}
									background={props.background}
									setInfo={props.setInfo}
									info={props.info}
								/>
								<Alignment
									race={props.race}
									url={url + "alignments/"}
									done={props.done}
									info={props.info}
									setInfo={props.setInfo}
								/>
							</React.Fragment>
						)}
					</ListGroup>
				)}
			</div>
		</ListGroup.Item>
	);
}
