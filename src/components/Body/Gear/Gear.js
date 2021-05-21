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
		props.setAc(props.totalScore[1].mod);
		// eslint-disable-next-line
	}, []);
	return (
		<ListGroup.Item>
			<h2>Pick Gear</h2>
			<div className={styles.Description}>
				<h3>
					Proficiencies:{" "}
					{props.classType.proficiencies.map((e, i) => e.name).join(", ")}
				</h3>
				(Choose from your proficiencies or you'll have disadvantages)
				{props.inventory && (
					<React.Fragment>
						<Weapons
							inventory={props.inventory}
							setInventory={props.setInventory}
							url={url}
							totalScore={props.totalScore}
							bonus={props.bonus}
						/>
						{props.ac !== null ? (
							<Armor
								inventory={props.inventory}
								setInventory={props.setInventory}
								url={url}
								totalScore={props.totalScore}
								setAc={props.setAc}
								ac={props.ac}
							/>
						) : (
							<></>
						)}
					</React.Fragment>
				)}
				{/* <Inventory /> */}
			</div>
		</ListGroup.Item>
	);
}
