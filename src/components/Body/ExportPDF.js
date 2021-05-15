import React from "react";
import "./style.sass";
import Pdf from "react-to-pdf";
import { Button } from "react-bootstrap";

export default function ExportPDF(props) {
	const ref = React.createRef();
	const currb = props.background;
	let currentFeats = 0;
	let currentProf = 0;
	return (
		<div>
			<Pdf
				targetRef={ref}
				filename={props.info.cname}
				x={15}
				y={5}
				scale={0.85}
			>
				{({ toPdf }) => (
					<Button style={{ marginLeft: "30%" }} onClick={toPdf}>
						Generate Pdf
					</Button>
				)}
			</Pdf>
			<form className="charsheet" ref={ref}>
				<header>
					<section className="charname">
						<label htmlFor="charname">Character Name</label>
						<input name="charname" defaultValue={props.info.cname} />
					</section>
					<section className="misc">
						<ul>
							<li>
								<label htmlFor="classlevel">Class & Level</label>
								<input
									name="classlevel"
									defaultValue={props.classType.name + " lvl " + props.level}
								/>
							</li>
							<li>
								<label htmlFor="background">Background</label>
								<input
									name="background"
									defaultValue={currb.name ? currb.name : ""}
								/>
							</li>
							<li>
								<label htmlFor="playername">Player Name</label>
								<input defaultValue={props.info.pname} name="playername" />
							</li>
							<li>
								<label htmlFor="race">Race</label>
								<input name="race" defaultValue={props.race.name} />
							</li>
							<li>
								<label htmlFor="alignment">Alignment</label>
								<input
									name="alignment"
									defaultValue={props.info.alignment.name}
								/>
							</li>
							<li>
								<label htmlFor="experiencepoints">Experience Points</label>
								<input name="experiencepoints" defaultValue="" />
							</li>
						</ul>
					</section>
				</header>
				<main>
					<section>
						<section className="attributes">
							<div className="scores">
								<ul>
									<li>
										<div className="score">
											<label htmlFor="Strengthscore">Strength</label>
											<input
												name="Strengthscore"
												className="stat"
												defaultValue={props.totalScore[0].total}
											/>
										</div>
										<div className="modifier">
											<input
												name="Strengthmod"
												className="statmod"
												defaultValue={
													props.totalScore[0].mod < 0
														? props.totalScore[0].mod
														: "+" + props.totalScore[0].mod
												}
											/>
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Dexterityscore">Dexterity</label>
											<input
												name="Dexterityscore"
												className="stat"
												defaultValue={props.totalScore[1].total}
											/>
										</div>
										<div className="modifier">
											<input
												name="Dexteritymod"
												className="statmod"
												defaultValue={
													props.totalScore[1].mod < 0
														? props.totalScore[1].mod
														: "+" + props.totalScore[1].mod
												}
											/>
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Constitutionscore">Constitution</label>
											<input
												name="Constitutionscore"
												className="stat"
												defaultValue={props.totalScore[2].total}
											/>
										</div>
										<div className="modifier">
											<input
												name="Constitutionmod"
												className="statmod"
												defaultValue={
													props.totalScore[2].mod < 0
														? props.totalScore[2].mod
														: "+" + props.totalScore[2].mod
												}
											/>
										</div>
									</li>

									<li>
										<div className="score">
											<label htmlFor="Intelligencescore">Intelligence</label>
											<input
												name="Intelligencescore"
												className="stat"
												defaultValue={props.totalScore[3].total}
											/>
										</div>
										<div className="modifier">
											<input
												name="Intelligencemod"
												className="statmod"
												defaultValue={
													props.totalScore[3].mod < 0
														? props.totalScore[3].mod
														: "+" + props.totalScore[3].mod
												}
											/>
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Wisdomscore">Wisdom</label>
											<input
												name="Wisdomscore"
												className="stat"
												defaultValue={props.totalScore[4].total}
											/>
										</div>
										<div className="modifier">
											<input
												name="Wisdommod"
												className="statmod"
												defaultValue={
													props.totalScore[4].mod < 0
														? props.totalScore[4].mod
														: "+" + props.totalScore[4].mod
												}
											/>
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Charismascore">Charisma</label>
											<input
												name="Charismascore"
												className="stat"
												defaultValue={props.totalScore[5].total}
											/>
										</div>
										<div className="modifier">
											<input
												name="Charismamod"
												className="statmod"
												defaultValue={
													props.totalScore[5].mod < 0
														? props.totalScore[5].mod
														: "+" + props.totalScore[5].mod
												}
											/>
										</div>
									</li>
								</ul>
							</div>
							<div className="attr-applications">
								<div className="inspiration box">
									<div className="label-container">
										<label htmlFor="inspiration">Inspiration</label>
									</div>
									<input name="inspiration" type="checkbox" readOnly />
								</div>
								<div className="proficiencybonus box">
									<div className="label-container">
										<label htmlFor="proficiencybonus">Proficiency Bonus</label>
									</div>
									<input
										name="proficiencybonus"
										defaultValue={"+" + (1 + Math.ceil(props.level / 4))}
									/>
								</div>
								<div className="saves list-section box">
									<ul>
										<li>
											<label htmlFor="Strength-save">Strength</label>
											<input
												name="Strength-save"
												type="text"
												defaultValue={
													props.totalScore[0].mod +
													(props.totalScore[0].saving
														? 1 + Math.ceil(props.level / 4) + 2
														: 0)
												}
											/>
											<input
												name="Strength-save-prof"
												type="checkbox"
												defaultChecked={props.totalScore[0].saving}
											/>
										</li>
										<li>
											<label htmlFor="Dexterity-save">Dexterity</label>
											<input
												name="Dexterity-save"
												type="text"
												defaultValue={
													props.totalScore[1].mod +
													(props.totalScore[1].saving
														? 1 + Math.ceil(props.level / 4)
														: 0)
												}
											/>
											<input
												name="Dexterity-save-prof"
												type="checkbox"
												defaultChecked={props.totalScore[1].saving}
											/>
										</li>
										<li>
											<label htmlFor="Constitution-save">Constitution</label>
											<input
												name="Constitution-save"
												type="text"
												defaultValue={
													props.totalScore[2].mod +
													(props.totalScore[2].saving
														? 1 + Math.ceil(props.level / 4)
														: 0)
												}
											/>
											<input
												name="Constitution-save-prof"
												type="checkbox"
												defaultChecked={props.totalScore[2].saving}
											/>
										</li>
										<li>
											<label htmlFor="Intelligence-save">Intelligence</label>
											<input
												name="Intelligence-save"
												type="text"
												defaultValue={
													props.totalScore[3].mod +
													(props.totalScore[3].saving
														? 1 + Math.ceil(props.level / 4)
														: 0)
												}
											/>
											<input
												name="Intelligence-save-prof"
												type="checkbox"
												defaultChecked={props.totalScore[3].saving}
											/>
										</li>
										<li>
											<label htmlFor="Wisdom-save">Wisdom</label>
											<input
												name="Wisdom-save"
												type="text"
												defaultValue={
													props.totalScore[4].mod +
													(props.totalScore[4].saving
														? 1 + Math.ceil(props.level / 4)
														: 0)
												}
											/>
											<input
												name="Wisdom-save-prof"
												type="checkbox"
												defaultChecked={props.totalScore[4].saving}
											/>
										</li>
										<li>
											<label htmlFor="Charisma-save">Charisma</label>
											<input
												name="Charisma-save"
												type="text"
												defaultValue={
													props.totalScore[5].mod +
													(props.totalScore[5].saving
														? 1 + Math.ceil(props.level / 4)
														: 0)
												}
											/>
											<input
												name="Charisma-save-prof"
												type="checkbox"
												defaultChecked={props.totalScore[5].saving}
											/>
										</li>
									</ul>
									<div className="label">Saving Throws</div>
								</div>
								<div className="skills list-section box">
									<ul>
										<li>
											<label htmlFor="Acrobatics">
												Acrobatics <span className="skill">(Dex)</span>
											</label>
											<input
												name="Acrobatics"
												type="text"
												defaultValue={
													props.skills[0].total < 0
														? props.skills[0].total
														: "+" + props.skills[0].total
												}
											/>
											<input
												name="Acrobatics-prof"
												type="checkbox"
												readOnly
												defaultChecked={props.skills[0].prof}
											/>
										</li>
										<li>
											<label htmlFor="Animal Handling">
												Animal Handling <span className="skill">(Wis)</span>
											</label>
											<input
												name="Animal Handling"
												type="text"
												defaultValue={
													props.skills[1].total < 0
														? props.skills[1].total
														: "+" + props.skills[1].total
												}
											/>
											<input
												name="Animal Handling-prof"
												defaultChecked={props.skills[1].prof}
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Arcana">
												Arcana <span className="skill">(Int)</span>
											</label>
											<input
												defaultValue={
													props.skills[2].total < 0
														? props.skills[2].total
														: "+" + props.skills[2].total
												}
												name="Arcana"
												type="text"
											/>
											<input
												name="Arcana-prof"
												defaultChecked={props.skills[2].prof}
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Athletics">
												Athletics <span className="skill">(Str)</span>
											</label>
											<input
												defaultValue={
													props.skills[3].total < 0
														? props.skills[3].total
														: "+" + props.skills[3].total
												}
												name="Athletics"
												type="text"
											/>
											<input
												defaultChecked={props.skills[3].prof}
												name="Athletics-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Deception">
												Deception <span className="skill">(Cha)</span>
											</label>
											<input
												defaultValue={
													props.skills[4].total < 0
														? props.skills[4].total
														: "+" + props.skills[4].total
												}
												name="Deception"
												type="text"
											/>
											<input
												defaultChecked={props.skills[4].prof}
												name="Deception-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="History">
												History <span className="skill">(Int)</span>
											</label>
											<input
												defaultValue={
													props.skills[5].total < 0
														? props.skills[5].total
														: "+" + props.skills[5].total
												}
												name="History"
												type="text"
											/>
											<input
												defaultChecked={props.skills[5].prof}
												name="History-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Insight">
												Insight <span className="skill">(Wis)</span>
											</label>
											<input
												defaultValue={
													props.skills[6].total < 0
														? props.skills[6].total
														: "+" + props.skills[6].total
												}
												name="Insight"
												type="text"
											/>
											<input
												defaultChecked={props.skills[6].prof}
												name="Insight-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Intimidation">
												Intimidation <span className="skill">(Cha)</span>
											</label>
											<input
												defaultValue={
													props.skills[7].total < 0
														? props.skills[7].total
														: "+" + props.skills[7].total
												}
												name="Intimidation"
												type="text"
											/>
											<input
												defaultChecked={props.skills[7].prof}
												name="Intimidation-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Investigation">
												Investigation <span className="skill">(Int)</span>
											</label>
											<input
												defaultValue={
													props.skills[8].total < 0
														? props.skills[8].total
														: "+" + props.skills[8].total
												}
												name="Investigation"
												type="text"
											/>
											<input
												defaultChecked={props.skills[8].prof}
												name="Investigation-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Medicine">
												Medicine <span className="skill">(Wis)</span>
											</label>
											<input
												defaultValue={
													props.skills[9].total < 0
														? props.skills[9].total
														: "+" + props.skills[9].total
												}
												name="Medicine"
												type="text"
											/>
											<input
												defaultChecked={props.skills[9].prof}
												name="Medicine-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Nature">
												Nature <span className="skill">(Int)</span>
											</label>
											<input
												defaultValue={
													props.skills[10].total < 0
														? props.skills[10].total
														: "+" + props.skills[10].total
												}
												name="Nature"
												type="text"
											/>
											<input
												defaultChecked={props.skills[10].prof}
												name="Nature-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Perception">
												Perception <span className="skill">(Wis)</span>
											</label>
											<input
												defaultValue={
													props.skills[11].total < 0
														? props.skills[11].total
														: "+" + props.skills[11].total
												}
												name="Perception"
												type="text"
											/>
											<input
												defaultChecked={props.skills[11].prof}
												name="Perception-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Performance">
												Performance <span className="skill">(Cha)</span>
											</label>
											<input
												defaultValue={
													props.skills[12].total < 0
														? props.skills[12].total
														: "+" + props.skills[12].total
												}
												name="Performance"
												type="text"
											/>
											<input
												defaultChecked={props.skills[12].prof}
												name="Performance-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Persuasion">
												Persuasion <span className="skill">(Cha)</span>
											</label>
											<input
												defaultValue={
													props.skills[13].total < 0
														? props.skills[13].total
														: "+" + props.skills[13].total
												}
												name="Persuasion"
												type="text"
											/>
											<input
												defaultChecked={props.skills[13].prof}
												name="Persuasion-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Religion">
												Religion <span className="skill">(Int)</span>
											</label>
											<input
												defaultValue={
													props.skills[14].total < 0
														? props.skills[14].total
														: "+" + props.skills[14].total
												}
												name="Religion"
												type="text"
											/>
											<input
												defaultChecked={props.skills[14].prof}
												name="Religion-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Sleight of Hand">
												Sleight of Hand <span className="skill">(Dex)</span>
											</label>
											<input
												defaultValue={
													props.skills[15].total < 0
														? props.skills[15].total
														: "+" + props.skills[15].total
												}
												name="Sleight of Hand"
												type="text"
											/>
											<input
												defaultChecked={props.skills[15].prof}
												name="Sleight of Hand-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Stealth">
												Stealth <span className="skill">(Dex)</span>
											</label>
											<input
												defaultValue={
													props.skills[16].total < 0
														? props.skills[16].total
														: "+" + props.skills[16].total
												}
												name="Stealth"
												type="text"
											/>
											<input
												defaultChecked={props.skills[16].prof}
												name="Stealth-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Survival">
												Survival <span className="skill">(Wis)</span>
											</label>
											<input
												defaultValue={
													props.skills[17].total < 0
														? props.skills[17].total
														: "+" + props.skills[17].total
												}
												name="Survival"
												type="text"
											/>
											<input
												defaultChecked={props.skills[17].prof}
												name="Survival-prof"
												type="checkbox"
											/>
										</li>
									</ul>
									<div className="label">Skills</div>
								</div>
							</div>
						</section>
						<div className="passive-perception box">
							<div className="label-container">
								<label htmlFor="passiveperception">
									Passive Wisdom (Perception)
								</label>
							</div>
							<input
								name="passiveperception"
								defaultValue={
									props.skills[11].total < 0
										? props.skills[11].total
										: "+" + props.skills[11].total
								}
							/>
						</div>
						<div className="otherprofs box textblock">
							<label htmlFor="otherprofs">
								Other Proficiencies and Languages
							</label>
							{props.info.languages.map((e) => {
								currentProf++;
								return <input name="otherprofs" defaultValue={e} />;
							})}
							{props.classType.proficiencies.map((e) => {
								currentProf++;
								return <input name="otherprofs" defaultValue={e.name} />;
							})}
							{currentProf < 14 &&
								[...Array(14 - currentProf - 1)].map((_) => (
									<input name="otherprofs" />
								))}
						</div>
					</section>
					<section>
						<section className="combat">
							<div className="armorclass">
								<div>
									<label htmlFor="ac">Armor Class</label>
									<input readOnly name="ac" type="text" />
								</div>
							</div>
							<div className="initiative">
								<div>
									<label htmlFor="initiative">Initiative</label>
									<input
										name="initiative"
										type="text"
										defaultValue={
											props.totalScore[1].mod < 0
												? props.totalScore[1].mod
												: "+" + props.totalScore[1].mod
										}
									/>
								</div>
							</div>
							<div className="speed">
								<div>
									<label htmlFor="speed">Speed</label>
									<input
										name="speed"
										type="text"
										defaultValue={0 + props.race.speed + "ft"}
									/>
								</div>
							</div>
							<div className="hp">
								<div className="regular">
									<div className="max">
										<label htmlFor="maxhp">Hit Point Maximum</label>
										<input name="maxhp" type="text" defaultValue={props.hp} />
									</div>
									<div className="current">
										<label htmlFor="currenthp">Current Hit Points</label>
										<input name="currenthp" type="text" readOnly />
									</div>
								</div>
								<div className="temporary">
									<label htmlFor="temphp">Temporary Hit Points</label>
									<input name="temphp" type="text" readOnly />
								</div>
							</div>
							<div className="hitdice">
								<div>
									<div className="total">
										<label htmlFor="totalhd">Total</label>
										<input
											name="totalhd"
											type="text"
											defaultValue={"1d" + props.classType.hit_die}
										/>
									</div>
									<div className="remaining">
										<label htmlFor="remaininghd">Hit Dice</label>
										<input readOnly name="remaininghd" type="text" />
									</div>
								</div>
							</div>
							<div className="deathsaves">
								<div>
									<div className="label">
										<label>Death Saves</label>
									</div>
									<div className="marks">
										<div className="deathsuccesses">
											<label>Successes</label>
											<div className="bubbles">
												<input name="deathsuccess1" type="checkbox" readOnly />
												<input name="deathsuccess2" type="checkbox" readOnly />
												<input name="deathsuccess3" type="checkbox" readOnly />
											</div>
										</div>
										<div className="deathfails">
											<label>Failures</label>
											<div className="bubbles">
												<input name="deathfail1" type="checkbox" readOnly />
												<input name="deathfail2" type="checkbox" readOnly />
												<input name="deathfail3" type="checkbox" readOnly />
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="attacksandspellcasting">
							<div>
								<label>Attacks & Spellcasting</label>
								<table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Atk Bonus</th>
											<th>Damage/Type</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<input name="atkname1" type="text" readOnly />
											</td>
											<td>
												<input name="atkbonus1" type="text" readOnly />
											</td>
											<td>
												<input name="atkdamage1" type="text" readOnly />
											</td>
										</tr>
										<tr>
											<td>
												<input name="atkname2" type="text" readOnly />
											</td>
											<td>
												<input name="atkbonus2" type="text" readOnly />
											</td>
											<td>
												<input name="atkdamage2" type="text" readOnly />
											</td>
										</tr>
										<tr>
											<td>
												<input name="atkname3" type="text" readOnly />
											</td>
											<td>
												<input name="atkbonus3" type="text" readOnly />
											</td>
											<td>
												<input name="atkdamage3" type="text" readOnly />
											</td>
										</tr>
									</tbody>
								</table>
								<textarea></textarea>
							</div>
						</section>
						<section className="equipment">
							<div>
								<label>Equipment</label>
								<div className="money">
									<ul>
										<li>
											<label htmlFor="cp">cp</label>
											<input readOnly name="cp" />
										</li>
										<li>
											<label htmlFor="sp">sp</label>
											<input readOnly name="sp" />
										</li>
										<li>
											<label htmlFor="ep">ep</label>
											<input readOnly name="ep" />
										</li>
										<li>
											<label htmlFor="gp">gp</label>
											<input readOnly name="gp" />
										</li>
										<li>
											<label htmlFor="pp">pp</label>
											<input readOnly name="pp" />
										</li>
									</ul>
								</div>
								<textarea></textarea>
							</div>
						</section>
					</section>
					<section>
						<section className="flavor">
							<div className="personality">
								<label htmlFor="personality">Personality</label>
								<textarea
									name="personality"
									defaultValue={currb.personalities ? currb.personalities : ""}
								></textarea>
							</div>
							<div className="ideals">
								<label htmlFor="ideals">Ideals</label>
								<textarea
									name="ideals"
									defaultValue={currb.ideals ? currb.ideals : ""}
								></textarea>
							</div>
							<div className="bonds">
								<label htmlFor="bonds">Bonds</label>
								<textarea
									name="bonds"
									defaultValue={currb.bonds ? currb.bonds : ""}
								></textarea>
							</div>
							<div className="flaws">
								<label htmlFor="flaws">Flaws</label>
								<textarea
									name="flaws"
									defaultValue={currb.flaws ? currb.flaws : ""}
								></textarea>
							</div>
						</section>
						<section className="features">
							<div>
								<label htmlFor="features">Features & Traits</label>
								{props.race.traits.map((e, i) => {
									currentFeats++;
									return <input name="features" defaultValue={e.name} />;
								})}
								{props.feats.map((e, i) => {
									currentFeats++;
									return <input name="features" defaultValue={e.name} />;
								})}
								{currentFeats < 28 &&
									[...Array(28 - currentFeats - 1)].map((_) => (
										<input name="features" />
									))}
								{/* <textarea
									name="features"
									defaultValue={
										props.race.traits.map((e, i) => e.name) +
										"\n" +
										props.feats.map((e, i) => e.name)
									}
								></textarea> */}
							</div>
						</section>
					</section>
				</main>
			</form>
		</div>
	);
}
