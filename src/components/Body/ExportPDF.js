import React from "react";
import "./style.sass";
import Pdf from "react-to-pdf";
import { Button } from "react-bootstrap";

export default function ExportPDF(props) {
	const ref = React.createRef();
	const currb = props.background;
	let currentFeats = 0;
	let currentProf = 0;
	let currentItems = 0;

	function posNeg(input) {
		return input < 0 ? input : "+" + input
	}

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
					<section className="column1">
						<section className="attributes">
							<div className="scores">
								<ul>
									{props.totalScore.map((ability, i) =>
										<li key={i}>
											<div className="score">
												<label htmlFor={ability.fullName + "score"}>{ability.fullName}</label>
												<input
													name={ability.fullName + "score"}
													className="stat"
													defaultValue={ability.total}
												/>
											</div>
											<div className="modifier">
												<input
													name={ability.fullName + "mod"}
													className="statmod"
													defaultValue={posNeg(ability.mod)}
												/>
											</div>
										</li>)}
								</ul>
							</div>
							<div className="attr-applications">
								<div className="inspiration box">
									<input name="inspiration" type="checkbox" readOnly />
									<div className="label-container">
										<label htmlFor="inspiration">Inspiration</label>
									</div>

								</div>
								<div className="proficiencybonus box">
									<input
										name="proficiencybonus"
										defaultValue={"+" + props.classLevels.current.prof_bonus}
									/>
									<div className="label-container">
										<label htmlFor="proficiencybonus">Proficiency Bonus</label>
									</div>
								</div>
								<div className="saves list-section box">
									<ul>
										{props.totalScore.map(saving =>
											<li>
												<label htmlFor={saving.fullName + "save"}>{saving.fullName}</label>
												<input
													name="Strength-save"
													type="text"
													defaultValue={
														posNeg(saving.mod +
															(saving.saving
																? props.classLevels.current.prof_bonus
																: 0))
													}
												/>
												<input
													name="Strength-save-prof"
													type="checkbox"
													defaultChecked={saving.saving}
												/>
											</li>
										)}
									</ul>
									<div className="label">SAVING THROWS</div>
								</div>
								<div className="skills list-section box">
									<ul>
										{props.skills.map((skill, i) =>
											<li key={i}>
												<label htmlFor={skill.data.name}>
													{skill.data.name} <span className="skill">({skill.data.ability_score.name})</span>
												</label>
												<input
													name={skill.data.name}
													type="text"
													defaultValue={posNeg(skill.total)}
												/>
												<input
													type="checkbox"
													defaultChecked={skill.prof}
												/>
											</li>)}
									</ul>
									<div className="label">SKILLS</div>
								</div>

							</div>
						</section>
						<div className="passive-perception box">

							<input
								name="passiveperception"
								defaultValue={posNeg(props.skills[11].total)}
							/>
							<div className="label-container">
								<label htmlFor="passiveperception">
									Passive Wisdom (Perception)
								</label>
							</div>
						</div>
						<div className="otherprofs box ">
							<label htmlFor="otherprofs">
								Other Proficiencies and Languages
							</label>
							<input
								name="otherprofs"
								defaultValue={props.info.languages.join(", ")}
							/>
							<input name="otherprofs" />
							{props.classType.proficiencies.length > 7
								? props.classType.proficiencies
									.filter((_, i) => i % 2 === 0)
									.map((e, i) => {
										currentProf++;
										const next = props.classType.proficiencies[(i * 2) + 1]
											? props.classType.proficiencies[(i * 2) + 1].name
											: "";
										return (
											<input
												key={i}
												name="otherprofs"
												defaultValue={e.name + ", " + next}
											/>
										);
									})
								: props.classType.proficiencies.map((e, i) => {
									currentProf++;
									return (
										<input key={i} name="otherprofs" defaultValue={e.name} />
									);
								})}
							{currentProf < 12 &&
								[...Array(12 - currentProf - 1)].map((_, i) => (
									<input key={i} name="otherprofs" />
								))}
						</div>
					</section>
					<section className="column2">
						<section className="combat">
							<div className="ais">
								<div className="armorclass">
									<div>
										<label htmlFor="ac">Armor Class</label>
										<input defaultValue={props.ac} name="ac" type="text" />
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
							<div className="hdDeath">
								<div className="hitdice">
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
								<div className="deathsaves">
									<label>Death Saves</label>
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
											<input
												name="atkname1"
												className="atkname"
												type="text"
												defaultValue={
													props.inventory.weapons[0]
														? props.inventory.weapons[0].name
														: ""
												}
											/>
										</td>
										<td>
											<input
												name="atkbonus1"
												className="atkbonus"
												type="text"
												defaultValue={
													props.inventory.weapons[0]
														? props.inventory.weapons[0].atk < 0
															? props.inventory.weapons[0].atk
															: "+" + props.inventory.weapons[0].atk
														: ""
												}
											/>
										</td>
										<td>
											<input
												name="atkdamage1"
												className="atkdamage"
												type="text"
												defaultValue={
													props.inventory.weapons[0]
														? props.inventory.weapons[0].dmg
														: ""
												}
											/>
										</td>
									</tr>
									<tr>
										<td>
											<input
												name="atkname2"
												className="atkname"
												type="text"
												defaultValue={
													props.inventory.weapons[1]
														? props.inventory.weapons[1].name
														: ""
												}
											/>
										</td>
										<td>
											<input
												name="atkbonus2"
												className="atkbonus"
												type="text"
												defaultValue={
													props.inventory.weapons[1]
														? props.inventory.weapons[1].atk < 0
															? props.inventory.weapons[1].atk
															: "+" + props.inventory.weapons[1].atk
														: ""
												}
											/>
										</td>
										<td>
											<input
												name="atkdamage2"
												className="atkdamage"
												type="text"
												defaultValue={
													props.inventory.weapons[1]
														? props.inventory.weapons[1].dmg
														: ""
												}
											/>
										</td>
									</tr>
									<tr>
										<td className="atkname">
											<input
												name="atkname3"

												type="text"
												defaultValue={
													props.inventory.weapons[2]
														? props.inventory.weapons[2].name
														: ""
												}
											/>
										</td>
										<td className="atkbonus">
											<input
												name="atkbonus3"

												type="text"
												defaultValue={
													props.inventory.weapons[2]
														? props.inventory.weapons[2].atk < 0
															? props.inventory.weapons[2].atk
															: "+" + props.inventory.weapons[2].atk
														: ""
												}
											/>
										</td>
										<td className="atkdamage">
											<input
												name="atkdamage3"

												type="text"
												defaultValue={
													props.inventory.weapons[2]
														? props.inventory.weapons[2].dmg
														: ""
												}
											/>
										</td>
									</tr>
								</tbody>
							</table>
							<div className="Spell">

							</div>
						</section>
						<section className="equipment">
							<label>Equipment</label>
							<div>
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
								<div className="items">
									{props.inventory.weapons.map((e, i) => {
										currentItems++;
										return <input key={i} defaultValue={e.name} />;
									})}
									{props.inventory.armor.map((e, i) => {
										currentItems++;
										return <input key={i} defaultValue={e.name} />;
									})}
									{currentItems < 14 &&
										[...Array(14 - currentItems - 1)].map((_, i) => (
											<input key={i} name="equipment" />
										))}
								</div>
							</div>
						</section>
					</section>
					<section className="column3">
						<section className="flavor">
							<div className="personality">
								<label htmlFor="personality">Personality</label>
								<div
									name="personality"
								// defaultValue={currb.personalities ? currb.personalities : ""}
								>
									{currb.personalities ? currb.personalities : ""}
								</div>
							</div>
							<div className="ideals">
								<label htmlFor="ideals">Ideals</label>
								<div
									name="ideals"
								// defaultValue={currb.ideals ? currb.ideals : ""}
								>
									{currb.ideals ? currb.ideals : ""}
								</div>
							</div>
							<div className="bonds">
								<label htmlFor="bonds">Bonds</label>
								<div
									name="bonds"
								// defaultValue={currb.bonds ? currb.bonds : ""}
								>
									{currb.bonds ? currb.bonds : ""}
								</div>
							</div>
							<div className="flaws">
								<label htmlFor="flaws">Flaws</label>
								<div
									name="flaws"
								// defaultValue={currb.flaws ? currb.flaws : ""}
								>
									{currb.flaws ? currb.flaws : ""}
								</div>
							</div>
						</section>
						<section className="features">
							<div>
								<label htmlFor="features">Features & Traits</label>
								{props.race.traits.map((e, i) => {
									currentFeats++;
									return (
										<input key={i} name="features" defaultValue={e.name} />
									);
								})}
								<input name="features" />
								{props.classLevels.feats.filter(e => !e.name.includes("Ability Score Improvement")).map((e, i) => {
									currentFeats++;
									return (
										<input key={i} name="features" defaultValue={e.name} />
									);
								})}
								{currentFeats < 30 &&
									[...Array(30 - currentFeats - 1)].map((_, i) => (
										<input key={i} name="features" />
									))}
							</div>
						</section>
					</section>
				</main>
				<footer></footer>
			</form>
		</div>
	);
}
