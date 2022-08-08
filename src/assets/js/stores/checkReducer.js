import { SET_CHECKED, SET_NAME } from "./types"

const initialState = {
	checked: false,
	userName: ""
};

export const checkReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_CHECKED:
			return {
				...state,
				checked: action.auth
			};
		case SET_NAME:
			return {
				...state,
				userName: action.name
			};
		default: return state
	}
}