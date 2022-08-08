import { SET_CHECKED, SET_NAME } from "./types"

export const setChecked = (auth) => {

	return {
		type: SET_CHECKED,
		auth
	}
};

export const setName = (name) => {

	return{
		type: SET_NAME,
		name
	}
}