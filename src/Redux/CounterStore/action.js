import { ADD_COUNT, REDUCE_COUNT } from "./actionTypes";

export const addCount = (payload) => {
	return {
		type: ADD_COUNT,
		payload,
	};
};

export const redCount = (payload) => {
	return {
		type: REDUCE_COUNT,
		payload,
	};
};