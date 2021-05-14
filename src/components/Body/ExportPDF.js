import React from "react";
import "./style.sass";
import Pdf from "react-to-pdf";

export default function ExportPDF(props) {
	const ref = React.createRef();
	const currb = props.background;
	return (
		<div>
			<Pdf
				targetRef={ref}
				filename={props.info.cname}
				x={15}
				y={5}
				scale={0.85}
			>
				{({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
			</Pdf>
			<form className="charsheet" ref={ref}>
				<header>
					<section className="charname">
						<label htmlFor="charname">Character Name</label>
						<input name="charname" value={props.info.cname} readOnly />
					</section>
					<section className="misc">
						<ul>
							<li>
								<label htmlFor="classlevel">Class & Level</label>
								<input
									readOnly
									name="classlevel"
									value={props.classType.name + " lvl " + props.level}
								/>
							</li>
							<li>
								<label htmlFor="background">Background</label>
								<input
									readOnly
									name="background"
									value={currb.name ? currb.name : ""}
								/>
							</li>
							<li>
								<label htmlFor="playername">Player Name</label>
								<input readOnly value={props.info.pname} name="playername" />
							</li>
							<li>
								<label htmlFor="race">Race</label>
								<input name="race" readOnly value={props.race.name} />
							</li>
							<li>
								<label htmlFor="alignment">Alignment</label>
								<input
									readOnly
									name="alignment"
									value={props.info.alignment.name}
								/>
							</li>
							<li>
								<label htmlFor="experiencepoints">Experience Points</label>
								<input readOnly name="experiencepoints" />
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
											<input readOnly name="Strengthscore" className="stat" />
										</div>
										<div className="modifier">
											<input readOnly name="Strengthmod" className="statmod" />
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Dexterityscore">Dexterity</label>
											<input readOnly name="Dexterityscore" className="stat" />
										</div>
										<div className="modifier">
											<input name="Dexteritymod" readOnly className="statmod" />
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Constitutionscore">Constitution</label>
											<input
												readOnly
												name="Constitutionscore"
												className="stat"
											/>
										</div>
										<div className="modifier">
											<input
												name="Constitutionmod"
												readOnly
												className="statmod"
											/>
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Wisdomscore">Wisdom</label>
											<input readOnly name="Wisdomscore" className="stat" />
										</div>
										<div className="modifier">
											<input readOnly name="Wisdommod" />
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Intelligencescore">Intelligence</label>
											<input
												readOnly
												name="Intelligencescore"
												className="stat"
											/>
										</div>
										<div className="modifier">
											<input
												name="Intelligencemod"
												className="statmod"
												readOnly
											/>
										</div>
									</li>
									<li>
										<div className="score">
											<label htmlFor="Charismascore">Charisma</label>
											<input name="Charismascore" className="stat" readOnly />
										</div>
										<div className="modifier">
											<input name="Charismamod" className="statmod" readOnly />
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
										value={1 + Math.ceil(props.level / 4)}
										readOnly
									/>
								</div>
								<div className="saves list-section box">
									<ul>
										<li>
											<label htmlFor="Strength-save">Strength</label>
											<input name="Strength-save" type="text" />
											<input
												name="Strength-save-prof"
												type="checkbox"
												readOnly
											/>
										</li>
										<li>
											<label htmlFor="Dexterity-save">Dexterity</label>
											<input name="Dexterity-save" type="text" />
											<input
												name="Dexterity-save-prof"
												type="checkbox"
												readOnly
											/>
										</li>
										<li>
											<label htmlFor="Constitution-save">Constitution</label>
											<input name="Constitution-save" type="text" />
											<input
												name="Constitution-save-prof"
												type="checkbox"
												readOnly
											/>
										</li>
										<li>
											<label htmlFor="Wisdom-save">Wisdom</label>
											<input name="Wisdom-save" type="text" readOnly />
											<input name="Wisdom-save-prof" type="checkbox" readOnly />
										</li>
										<li>
											<label htmlFor="Intelligence-save">Intelligence</label>
											<input name="Intelligence-save" readOnly type="text" />
											<input
												name="Intelligence-save-prof"
												type="checkbox"
												readOnly
											/>
										</li>
										<li>
											<label htmlFor="Charisma-save">Charisma</label>
											<input name="Charisma-save" readOnly type="text" />
											<input
												name="Charisma-save-prof"
												type="checkbox"
												readOnly
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
											<input name="Acrobatics" type="text" readOnly />
											<input name="Acrobatics-prof" type="checkbox" readOnly />
										</li>
										<li>
											<label htmlFor="Animal Handling">
												Animal Handling <span className="skill">(Wis)</span>
											</label>
											<input name="Animal Handling" type="text" readOnly />
											<input
												name="Animal Handling-prof"
												readOnly
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Arcana">
												Arcana <span className="skill">(Int)</span>
											</label>
											<input readOnly name="Arcana" type="text" />
											<input name="Arcana-prof" readOnly type="checkbox" />
										</li>
										<li>
											<label htmlFor="Athletics">
												Athletics <span className="skill">(Str)</span>
											</label>
											<input readOnly name="Athletics" type="text" />
											<input readOnly name="Athletics-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Deception">
												Deception <span className="skill">(Cha)</span>
											</label>
											<input readOnly name="Deception" type="text" />
											<input readOnly name="Deception-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="History">
												History <span className="skill">(Int)</span>
											</label>
											<input readOnly name="History" type="text" />
											<input readOnly name="History-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Insight">
												Insight <span className="skill">(Wis)</span>
											</label>
											<input readOnly name="Insight" type="text" />
											<input readOnly name="Insight-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Intimidation">
												Intimidation <span className="skill">(Cha)</span>
											</label>
											<input readOnly name="Intimidation" type="text" />
											<input
												readOnly
												name="Intimidation-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Investigation">
												Investigation <span className="skill">(Int)</span>
											</label>
											<input readOnly name="Investigation" type="text" />
											<input
												readOnly
												name="Investigation-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Medicine">
												Medicine <span className="skill">(Wis)</span>
											</label>
											<input readOnly name="Medicine" type="text" />
											<input readOnly name="Medicine-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Nature">
												Nature <span className="skill">(Int)</span>
											</label>
											<input readOnly name="Nature" type="text" />
											<input readOnly name="Nature-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Perception">
												Perception <span className="skill">(Wis)</span>
											</label>
											<input readOnly name="Perception" type="text" />
											<input readOnly name="Perception-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Performance">
												Performance <span className="skill">(Cha)</span>
											</label>
											<input readOnly name="Performance" type="text" />
											<input readOnly name="Performance-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Persuasion">
												Persuasion <span className="skill">(Cha)</span>
											</label>
											<input readOnly name="Persuasion" type="text" />
											<input readOnly name="Persuasion-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Religion">
												Religion <span className="skill">(Int)</span>
											</label>
											<input readOnly name="Religion" type="text" />
											<input readOnly name="Religion-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Sleight of Hand">
												Sleight of Hand <span className="skill">(Dex)</span>
											</label>
											<input readOnly name="Sleight of Hand" type="text" />
											<input
												readOnly
												name="Sleight of Hand-prof"
												type="checkbox"
											/>
										</li>
										<li>
											<label htmlFor="Stealth">
												Stealth <span className="skill">(Dex)</span>
											</label>
											<input readOnly name="Stealth" type="text" />
											<input readOnly name="Stealth-prof" type="checkbox" />
										</li>
										<li>
											<label htmlFor="Survival">
												Survival <span className="skill">(Wis)</span>
											</label>
											<input readOnly name="Survival" type="text" />
											<input readOnly name="Survival-prof" type="checkbox" />
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
							<input name="passiveperception" readOnly />
						</div>
						<div className="otherprofs box textblock">
							<label htmlFor="otherprofs">
								Other Proficiencies and Languages
							</label>
							<textarea name="otherprofs"></textarea>
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
									<input readOnly name="initiative" type="text" />
								</div>
							</div>
							<div className="speed">
								<div>
									<label htmlFor="speed">Speed</label>
									<input
										readOnly
										name="speed"
										type="text"
										value={0 + props.race.speed + "ft"}
									/>
								</div>
							</div>
							<div className="hp">
								<div className="regular">
									<div className="max">
										<label htmlFor="maxhp">Hit Point Maximum</label>
										<input name="maxhp" type="text" readOnly />
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
										<input readOnly name="totalhd" type="text" />
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
									value={currb.personalities ? currb.personalities : ""}
								></textarea>
							</div>
							<div className="ideals">
								<label htmlFor="ideals">Ideals</label>
								<textarea
									name="ideals"
									value={currb.ideals ? currb.ideals : ""}
								></textarea>
							</div>
							<div className="bonds">
								<label htmlFor="bonds">Bonds</label>
								<textarea
									name="bonds"
									value={currb.bonds ? currb.bonds : ""}
								></textarea>
							</div>
							<div className="flaws">
								<label htmlFor="flaws">Flaws</label>
								<textarea
									name="flaws"
									value={currb.flaws ? currb.flaws : ""}
								></textarea>
							</div>
						</section>
						<section className="features">
							<div>
								<label htmlFor="features">Features & Traits</label>
								<div name="features">
									{props.race.traits.map((e) => (
										<>
											{e.name}
											<br />
										</>
									))}
								</div>
							</div>
						</section>
					</section>
				</main>
			</form>
		</div>
	);
}
