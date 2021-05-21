/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Races from "./Races/Races";
import Classes from "./Classess/Classes";
import Ability from "./AbilityScore/AbilityScores";
import ExportPDF from "./ExportPDF";
import Gear from "./Gear/Gear";
import Information from "./Info/Information";
import Level from "./Level";
import Skills from "./Skills/Skills";

import { ListGroup, Button } from "react-bootstrap";

export default function Body() {
	const [level, setlevel] = useState(0);
	const [race, setRace] = useState(null);
	const [classType, setClassType] = useState(null);
	const [classLevels, setClassLevels] = useState(null)
	const [info, setInfo] = useState(null);
	const [totalScore, setTotalScore] = useState(null);
	const [skills, setSkills] = useState([]);
	const [hp, sethp] = useState(0);
	const [ac, setAc] = useState(null);
	const [background, setBackground] = useState(null);
	const [inventory, setInventory] = useState(null);

	const [done, setDone] = useState(false);
	return (
		<ListGroup>
			{done && (
				<ListGroup.Item>
					<ExportPDF
						level={level}
						race={race}
						info={info}
						hp={hp}
						background={background}
						classType={classType}
						classLevels={classLevels}
						totalScore={totalScore}
						skills={skills}
						inventory={inventory}
						ac={ac}
					/>
				</ListGroup.Item>
			)}
			{done && (
				<Button
					variant="success"
					onClick={() => {
						setDone(false);
					}}
				>
					Modify
				</Button>
			)}
			<Level level={level} setlevel={setlevel} done={done} />
			{level > 0 ? <Races race={race} setRace={setRace} done={done} /> : <></>}
			{race && (
				<Classes
					classType={classType}
					setClassType={setClassType}
					classLevels={classLevels}
					setClassLevels={setClassLevels}
					level={level}
					done={done}
				/>
			)}

			{classType && (
				<React.Fragment>
					<Information
						classType={classType}
						race={race}
						info={info}
						done={done}
						setInfo={setInfo}
						background={background}
						setBackground={setBackground}
					/>
					{info && info.alignment && (
						<React.Fragment>
							<Ability
								done={done}
								classType={classType}
								race={race}
								classLevels={classLevels}
								info={info}
								setInfo={setInfo}
								totalScore={totalScore}
								setTotalScore={setTotalScore}
								background={background}
								hp={hp}
								sethp={sethp}
							/>
							{hp > 0 ? (
								<React.Fragment>
									<Skills
										proficiencies={background.proficiencies}
										classType={classType}
										totalScore={totalScore}
										race={race}
										bonus={classLevels.current.prof_bonus}
										done={done}
										skills={skills}
										setSkills={setSkills}
									/>
									{skills.map((e) => e.prof).indexOf(true) > -1 && (
										<React.Fragment>
											<Gear
												totalScore={totalScore}
												bonus={classLevels.current.prof_bonus}
												classType={classType}
												inventory={inventory}
												setInventory={setInventory}
												ac={ac}
												setAc={setAc}
											/>
											{inventory && inventory.weapons && (
												<Button
													variant="success"
													onClick={() => {
														window.scrollTo(0, 0);
														setDone(true);
													}}
												>
													Done
												</Button>
											)}
										</React.Fragment>
									)}
								</React.Fragment>
							) : (
								<></>
							)}
						</React.Fragment>
					)}
				</React.Fragment>
			)}
		</ListGroup>
	);
}
