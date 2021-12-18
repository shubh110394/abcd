import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function TodosDetails() {
	const { id } = useParams();
	const [details, setDetails] = useState([]);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		fetch(` http://localhost:3001/todos/${id}`)
			.then((x) => x.json())
			.then((d) => setDetails(d));
	}, [toggle]);

	const toggleStatus = async () => {
		setToggle(!toggle);
		await axios
			.patch(` http://localhost:3001/todos/${id}`, { status: !toggle })
			.then((res) => console.log('res:', res));
			
	};
	return (
		<div>
			<h1>Todo Details</h1>
			{toggle?<p style={{ color: "green" }}>{details.title}</p>:
			<p style={{color:"red"}}>{details.title}</p>}

			<button onClick={toggleStatus}>
				{toggle ? "Task Completed" : "Task Pending"}
			</button>

			{/* <h1>{details.status ? "true":"false"}</h1> */}
		</div>
	);
}
