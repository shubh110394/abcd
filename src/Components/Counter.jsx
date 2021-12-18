import { useDispatch, useSelector } from "react-redux";
import { addCount, redCount } from "../Redux/CounterStore/action";
// import "./App.css";
// import { addCount } from "./Redux/action";
// import { store } from "./Redux/store";
export const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((store) => store.count.count);
	console.log("rendering counter");
	return (
		<div>
			<h1>Counter: {count}</h1>
			<button
				onClick={() => {
					dispatch(addCount(1));
				}}
			>
				Add
			</button>
			<button onClick={() => { dispatch(redCount(1)) }}>Reduce</button>
			
		</div>
	);
};
