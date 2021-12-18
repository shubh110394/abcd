import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addTodoError,
	addTodoLoading,
	addTodoSuccess,
	getTodo,
	getTodoError,
	getTodoLoading,
	getTodoSuccess,
} from "../Redux/TodoStore/action";
import "./Todo.css";
// import Modal from "react-modal";
import axios from "axios";
import { Link } from "react-router-dom";
import Total from "./Total";

export const Todos = () => {
	const [reload, setReload] = useState(true);
	useEffect(() => {
		getData();
	}, [reload]);
	const dispatch = useDispatch();
	const { loading, error, data } = useSelector((store) => store.todos.todos);
	// console.log("loading,data,error:", data);
	const [text, setText] = useState("");

	const getData =  () => {
		dispatch(getTodo());
	};

	// const [modal, setModal] = useState(false);
	// const [rend, setRend] = useState("");
	// const [status, setStatus] = useState("Task is going on");
	// console.log("rendering todos");

	// const toggleModal = () => {
	// 	setModal(!modal);
	// };

	// const editClick = () => {
	// 	toggleModal();
	// 	setRend("edit");
	// };

	// const delClick = () => {
	// 	toggleModal();
	// 	setRend("delete");
	// };

	// const customStyles = {
	// 	content: {
	// 		top: "50%",
	// 		left: "50%",
	// 		right: "auto",
	// 		bottom: "auto",
	// 		marginRight: "-50%",
	// 		transform: "translate(-50%, -50%)",
	// 	},
	// };
	return loading ? (
		"Loading..."
	) : (
		<div className="item">
			<input
				style={{ padding: "5px" }}
				type="text"
				onChange={(e) => setText(e.target.value)}
			/>

			<button
				className="addTodo"
				onClick={async () => {
					dispatch(addTodoLoading());
					const payload = {
						status: false,
						title: text,
					};
					try {
						const { data } = await axios.post(
							"http://localhost:3001/todos",
							payload
						);
						dispatch(addTodoSuccess(data));
						console.log(data);
					} catch (err) {
						dispatch(addTodoError(err));
					}
					// dispatch(addTodo(payload));
				}}
			>
				+
			</button>

			<h1>Todo lists</h1>

			{data.map((e) => {
				return (
					<div className={e.status ? "comp" : "ncomp"} key={e.id}>
						{e.status ? (
							<div>
								{e.title}
								<button style={{ margin: "20%" }}><Link to={`/todos/${e.id}`}>edit</Link></button>
								<button
									onClick={async () => {
										await axios.delete(`http://localhost:3001/todos/${e.id}`);
										setReload(!reload);
									}}
								>
									remove
								</button>
							</div>
						) : (
							<div>
								<div>
									{e.title}
								</div>
								<div>
									<button style={{ margin: "20%" }}><Link to={`/todos/${e.id}`}>edit</Link></button>
									<button
										onClick={async () => {
											await axios.delete(`http://localhost:3001/todos/${e.id}`);
											setReload(!reload);
										}}
									>
										remove
									</button>
								</div>
							</div>
						)}
					</div>
				);
			})}

			<Total data={data}></Total>
		</div>
	);
};
