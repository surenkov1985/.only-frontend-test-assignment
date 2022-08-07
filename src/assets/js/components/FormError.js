import React from "react";
import styled from "styled-components"

const ErrorEl = styled.div`
	display: flex;
	align-items: center;
	min-width: 640px;
	height: 60px;
	padding: 20px;
	background: #F5E9E9;
	border: 1px solid #E26F6F;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 400;
	margin-top: 10px;
	margin-bottom: 17px;
`;

const ErrIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	background: #FFC8C8;
	border-radius: 50%;
	font-size: 14px;
	font-weight: 400;
	color: #EE6565;
	margin-right: 14px;
`;

export default function FormError({error}) {

	return (
		<ErrorEl>
			<ErrIcon>!</ErrIcon>
			{error}
		</ErrorEl>
	)
}