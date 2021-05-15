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
	const [feats, setFeats] = useState([]);
	const [info, setInfo] = useState(null);
	// [str,dex,con,int,wis,cha]
	const [totalScore, setTotalScore] = useState(null);
	const [skills, setSkills] = useState([]);
	const [hp, sethp] = useState(0);
	const [background, setBackground] = useState(null);
	const [inventory, setInventory] = useState(null);
	// useEffect(() => {
	//     console.log(url)
	// }, [url])

	const ref = React.createRef();
	const [done, setDone] = useState(false);
	return (
		<ListGroup>
			{done && (
				<ListGroup.Item>
					<ExportPDF
						refer={ref}
						level={level}
						race={race}
						info={info}
						hp={hp}
						background={background}
						classType={classType}
						feats={feats}
						totalScore={totalScore}
						skills={skills}
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
					level={level}
					feats={feats}
					setFeats={setFeats}
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
					{info && info.alignment.name && (
						<React.Fragment>
							<Ability
								classType={classType}
								race={race}
								feats={feats}
								info={info}
								totalScore={totalScore}
								setTotalScore={setTotalScore}
								level={level}
								background={background}
								skills={skills}
								setSkills={setSkills}
								hp={hp}
								done={done}
								sethp={sethp}
							/>
							{hp > 0 ? (
								<React.Fragment>
									<Skills
										proficiencies={background.proficiencies}
										classType={classType}
										totalScore={totalScore}
										level={level}
										done={done}
										skills={skills}
										setSkills={setSkills}
									/>
									{skills.map((e) => e.prof).indexOf(true) > -1 && (
										<React.Fragment>
											<Gear
												totalScore={totalScore}
												level={level}
												classType={classType}
											/>
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

			{skills.length > 0 ? (
				<Button
					variant="success"
					onClick={() => {
						window.scrollTo(0, 0);
						setDone(true);
					}}
				>
					Done
				</Button>
			) : (
				<></>
			)}

			{/* {info &&
                <React.Fragment>
                    <Ability
                        classType={classType}
                        race={race}
                        feats={feats}
                        info={info}
                        totalScore={totalScore}
                        setTotalScore={setTotalScore}
                        level={level}
                        background={background}
                        skills={skills}
                        setSkills={setSkills}
                        hp={hp}
                        sethp={sethp}
                    />
                    {skills.map(e => e.prof).indexOf(true) > -1 &&
                        <Gear totalScore={totalScore} level={level} classType={classType} />}
                </React.Fragment>
            } */}

			{/* {alignment && <ExportCSV csvData={data} fileName={name? name:'Character'} />} */}
		</ListGroup>
	);
}
