import React from "react";
import { InputGroup, ListGroup, FormControl } from "react-bootstrap";
// import Looks from './Looks'

export default function Name(props) {
	// const [toggle, setToggle] = useState(false)
	const handleChangeC = (event) => {
		props.setFirst(true);
		props.setInfo((prev) => ({ ...prev, cname: event.target.value }));
	};
	const handleChangeP = (event) => {
		props.setInfo((prev) => ({ ...prev, pname: event.target.value }));
	};
	return (
		<ListGroup.Item>
			<InputGroup size="lg">
				<InputGroup.Prepend>
					<InputGroup.Text>
						<h4>Player Name</h4>
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Enter Name"
					value={props.info.pname}
					disabled={props.done}
					onFocus={(e) => e.target.select()}
					onChange={handleChangeP}
				/>
				{/* <InputGroup.Append>
                    <Button size="lg" variant="secondary" onClick={() => setToggle(prev => !prev)}>Change Looks (Optional) {toggle ? '^' : 'v'}</Button>
                </InputGroup.Append> */}
			</InputGroup>
			<InputGroup size="lg">
				<InputGroup.Prepend>
					<InputGroup.Text>
						<h4>Character Name</h4>
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Enter Name"
					value={props.info.cname}
					disabled={props.done}
					onFocus={(e) => e.target.select()}
					onChange={handleChangeC}
				/>
				{/* <InputGroup.Append>
                    <Button size="lg" variant="secondary" onClick={() => setToggle(prev => !prev)}>Change Looks (Optional) {toggle ? '^' : 'v'}</Button>
                </InputGroup.Append> */}
			</InputGroup>

			{/* {toggle && <Looks race={props.race} setInfo={props.setInfo} info={props.info} />} */}
		</ListGroup.Item>
	);
}
