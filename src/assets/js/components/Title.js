import React from "react";
import styled from "styled-components";

const Header = styled.div`
	position: absolute;
	top: 40px;
`;

const Title = styled.h2`
 	font-weight: 700;
	font-size: 64px;
	line-height: 78px;
	color: #000000;
`;

export default function TitleContainer() {

	return (
		<Header>
			<Title>ONLY.</Title>
		</Header>
	)
}

