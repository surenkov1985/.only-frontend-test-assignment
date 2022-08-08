import React from "react"
import { useLocation, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Auth from "../pages/Auth"

export default function RequireAuth({children}) {

	// const auth = true;
	const location = useLocation();

	let auth =useSelector((state) => {

		const {checkReducer} = state;
		return checkReducer.checked
	});

	console.log(auth)

	if (!auth) {
		return (
			<Auth/>
		)
	}

	return (
		<>{children}</>
		)


}
