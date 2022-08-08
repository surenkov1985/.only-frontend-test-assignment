import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom"

import TitleContainer from "./Title";
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import RequireAuth from "./hoc/RequireAuth"

const Container = styled.div.attrs({
	className: "container"
})`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProfileRequire = () => {

	return (
	<RequireAuth>
		<Profile/>
	</RequireAuth>
)
};


export default function App() {

	return (
		<Container>
			<TitleContainer/>
			<Routes>
				<Route path="/" element={<ProfileRequire/>}/>
			</Routes>
		</Container>
	)
}


{/*<Route path="/profile" element={<ProfileRequire/>}/>*/}