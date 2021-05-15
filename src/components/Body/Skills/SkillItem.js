/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function SkillItem(props) {
	const currentSkill = props.skills[props.index];
	const ability = props.totalScore
		.map((e) => e.index)
		.indexOf(currentSkill.data.ability_score.index);
	const [expert, setExpert] = useState(false);

	function handleCheck() {
		let skillNum = [...props.skills];
		skillNum[props.index].prof = !skillNum[props.index].prof;
		props.setSkills(skillNum);
	}

	useEffect(() => {
		let skillNum = [...props.skills];
		skillNum[props.index].prof = props.same;
		props.setSkills(skillNum);
	}, [props.same]);

	useEffect(() => {
		let skillNum = [...props.skills];
		let total = expert ? 2 * props.profBonus : props.profBonus;
		skillNum[props.index].total = skillNum[props.index].prof
			? props.totalScore[ability].mod + total
			: props.totalScore[ability].mod;
		props.setSkills(skillNum);
		!skillNum[props.index].prof && setExpert(false);
	}, [
		props.totalScore[ability].mod,
		props.profBonus,
		currentSkill.prof,
		expert,
	]);

	return (
		<tr>
			<td>
				<input
					style={{ marginLeft: "1rem" }}
					type="checkbox"
					checked={currentSkill.prof}
					disabled={props.done}
					onChange={() => handleCheck()}
				/>
			</td>
			<td>
				{currentSkill.total < 0 ? currentSkill.total : "+" + currentSkill.total}
			</td>
			<td>{currentSkill.data.name}</td>
			<td>({currentSkill.data.ability_score.name})</td>
			<td style={{ width: "3rem" }}>
				{currentSkill.prof && (
					<input
						style={{ marginLeft: "1rem" }}
						type="checkbox"
						disabled={props.done}
						onChange={() => setExpert((prev) => !prev)}
					/>
				)}
			</td>
			{props.display && <td>{currentSkill.data.desc}</td>}
		</tr>
	);
}
