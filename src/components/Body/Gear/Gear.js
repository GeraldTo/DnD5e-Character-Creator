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
	return (
		<ListGroup.Item>

			<h2>Pick Gear</h2>
			<ListGroup className={styles.Description}>
				<ListGroup.Item>
					<h3>
						Proficiencies:{" "}
						{props.classType.proficiencies.map((e, i) => e.name).join(", ")}
					</h3>
					(Choose from your proficiencies or you'll have disadvantages)<br />
					Assumes Proficiency In Items
				</ListGroup.Item>

				{props.inventory && (
					<React.Fragment>
						<ListGroup.Item><Weapons
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
