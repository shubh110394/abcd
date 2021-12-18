import { ADD_COUNT, REDUCE_COUNT } from "./actionTypes";

const initState = { count: 10 };

export const countreducer = (state=initState, { type, payload }) => {
	switch (type) {
		case ADD_COUNT:
			return {
				...state,
				count: state.count + payload,
			};
		case REDUCE_COUNT:
			return {
				...state,
				count: state.count - payload,
			};

        default:
            return {...state};
	}
};
