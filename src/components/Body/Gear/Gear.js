import React, { useEffect } from "react";
// import Inventory from './Inventory'
import Armor from "./Armor";
import Weapons from "./Weapons";
import styles from "./Gear.module.css";
import { ListGroup } from "react-bootstrap";

export default function Gear(props) {
	// const [inventory, setInventory] = useState({ weapons: [], armor: [] });
	const url = process.env.REACT_APP_BASE;
	useEffect(() => {
		props.setInventory({ weapons: [], armor: [] });
		props.setAc(props.totalScore[1].mod + 10);
		// eslint-disable-next-line
	}, []);
	function equipmentQuant(e) {
		return e.equipment.name + (e.quantity > 1 ? " (x" + e.quantity + ")" : "")
	}
	console.log("hi")
	function pp(f) {
		console.log(f)
		return "|"
	}
	const startingOp = props.classType.starting_equipment_options.map(
		(e) => ((e.from.map(
			(f, i) => "(" + String.fromCharCode(97 + i) + ") " + (f.equipment ? equipmentQuant(f) :
				f.equipment_option ? f.equipment_option.from.equipment_category.name :
					f.equipment_category ? f.equipment_category.name :
						pp(f))).join(' or , '))))

	props.classType.starting_equipment_options.map(e => console.log(e))
	console.log(startingOp.join('\n')) //f.map(g => g.equipment ? equipmentQuant(g) : g.equipment_option.from.equipment_category.name)
	return (
		<ListGroup.Item>
			<h2>Pick Gear</h2>
			<ListGroup variant="flush" className={styles.Description}>
				<ListGroup.Item>
					Choose from your Class' Starting Equipment (or Proficiencies)<br />
					<h4>Proficiencies: </h4>
					{props.classType.proficiencies.map((e) => e.name).join(", ")}<br />
					<h4>Starting Gear: </h4>
					<ListGroup >
						(Choose 1 per row for each row with letters)
						{startingOp.map((e, i) => <ListGroup.Item>{e}</ListGroup.Item>)}
						{props.classType.starting_equipment.map((e) => (<ListGroup.Item>{equipmentQuant(e).join(", ")}</ListGroup.Item>))}
					</ListGroup>
				</ListGroup.Item>
				{props.inventory && (
					<React.Fragment>
						<ListGroup.Item>
							<Weapons
								inventory={props.inventory}
								setInventory={props.setInventory}
								url={url}
								totalScore={props.totalScore}
								bonus={props.bonus}
							/></ListGroup.Item>

						{props.ac !== null ? (
							<ListGroup.Item><Armor
								inventory={props.inventory}
								setInventory={props.setInventory}
								url={url}
								totalScore={props.totalScore}
								setAc={props.setAc}
								ac={props.ac}
							/></ListGroup.Item>

						) : (
							<></>
						)}
					</React.Fragment>
				)}
			</ListGroup>
			{/* <Inventory /> */}

		</ListGroup.Item>
	);
}
