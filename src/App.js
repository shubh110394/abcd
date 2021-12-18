import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Todos } from "./Components/Todos";
import { TodosDetails } from "./Components/TodosDetails";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { submit } from "./Redux/LoginStore/action";
import { useState } from "react";

function App() {
	const dispatch = useDispatch();
	const  {token}  = useSelector((store) => store.login);
	console.log('token:', token)
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [check, setCheck] = useState("");
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePass = (e) => {
		setPass(e.target.value);
	};

	if (!token) {
		return (
			<div className="App">
				<h4 style={{ color: "red" }}>User not logged in</h4>
				<input type="text" onChange={handleEmail}></input>
				<input type="password" onChange={handlePass}></input>
				<button
					onClick={async () => {
						// login();
						const payload = {
							email: email,
							password: pass,
						};
						try {
							const  token  = await axios
								.post("https://reqres.in/api/login", payload)
								.then((d) => setCheck(d.data.token));
							console.log('d2',check)
							dispatch(submit(check));
						} catch (error) {
							console.log("error:", error);
						}

						// fetch("https://reqres.in/api/login", {
						// 	method: "POST",
						// 	headers: {
						// 		"Content-Type": "application/json"
						// 	},
						// 	body: JSON.stringify({ email: email, password: pass })
						// })
						// 	.then((d) => d.json())
						// 	.then(({token}) => {
						// 		handleTokenChange(token);
						// 	});
					}}
				>
					Submit
				</button>
			</div>
		);
	}
	return (
		<div className="App">
			<button onClick={()=>dispatch(submit(""))}>Logout</button>
			{/* <Counter></Counter> */}
			<hr></hr>
			<div>
				<Link to="/todos">Home</Link>
			</div>
			<Routes>
				<Route exact path="/todos" element={<Todos />} />
				<Route path="/todos/:id" element={<TodosDetails />} />
			</Routes>
		</div>
	);
}

export default App;
