import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { setChecked } from "../../stores/actions"

const UserProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 110px;
`;

const User = styled.div`
	font-weight: 400;
	font-size: 40px;
	
	& > b {
		font-weight: 700;
	}
`;

const Button = styled.button`
	width: 200px;
	height: 60px;
	margin-top: 50px;
	background: #F5F5F5;
	border-radius: 8px;
	font-weight: 700;
	font-size: 18px;
	cursor: pointer;
	
	&:hover {
		background: #D1D1D1;
	}
`;



export default function Profile() {

	const dispatch = useDispatch();

	let name = useSelector((state) => {

		const {checkReducer} = state;
		return checkReducer.userName;
	});

	function clickHandler() {

		dispatch(setChecked(false))
	}

	return (
		<UserProfile>
			<User>Здравствуйте, {<b>{name}</b>}</User>
			<Button onClick={clickHandler}>Выйти</Button>
		</UserProfile>
	)
}