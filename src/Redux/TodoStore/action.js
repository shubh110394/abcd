import {
	ADD_COUNT,
	ADD_TODO,
	ADD_TODO_ERROR,
	ADD_TODO_LOADING,
	ADD_TODO_SUCCESS,
	GET_TODO_ERROR,
	GET_TODO_LOADING,
	GET_TODO_SUCCESS,
	REDUCE_COUNT,
} from "./actionTypes";

import axios from "axios";
//action creator

export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: todo,
	};
};

export const addTodoLoading = () => ({ type: ADD_TODO_LOADING });
export const addTodoSuccess = (data) => ({
	type: ADD_TODO_SUCCESS,
	payload: data,
});

export const addTodoError = (err) => ({ type: ADD_TODO_ERROR, payload: err });

export const getTodoLoading = () => ({ type: GET_TODO_LOADING });
export const getTodoSuccess = (data) => ({
	type: GET_TODO_SUCCESS,
	payload: data,
});
export const getTodoError = (err) => ({ type: GET_TODO_ERROR, payload: err });

export const getTodo = ()=> async (dispatch) => {
	dispatch(getTodoLoading());
	try {
		const { data } = await axios.get("http://localhost:3001/todos");
		dispatch(getTodoSuccess(data));
	} catch (error) {
		dispatch(getTodoError(error));
	}
};
