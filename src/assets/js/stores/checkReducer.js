import { SET_CHECKED } from "./types"

const initialState = {
	checked: false
};

export const checkReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_CHECKED:
			return {
				...state,
				checked: !state.checked
			}
		default: return state
	}
}