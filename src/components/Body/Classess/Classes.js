import React, { useEffect, useState } from "react";
import axios from "axios";
import ClassInfo from "./Info/ClassInfo";
import ClassPick from "./ClassPick";
import { ListGroup } from "react-bootstrap";

export default function Classes(props) {
	const [api, setapi] = useState(null);
	const url = process.env.REACT_APP_API;

	useEffect(() => {
		axios.get(url + "classes/").then((response) => {
			setapi(response.data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ListGroup.Item>
			<h2>Class </h2>
			<ClassPick
				api={api}
				url={url + "classes/"}
				setClassType={props.setClassType}
				done={props.done}
			/>
			{props.classType && (
				<ClassInfo
					classType={props.classType}
					setProf={props.setProf}
					level={props.level}
					classLevels={props.classLevels}
					setClassLevels={props.setClassLevels}
				/>
			)}
		</ListGroup.Item>
	);
}
