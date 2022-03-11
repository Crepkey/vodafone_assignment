import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	color: ${colors.title};
	text-align: center;
	width: 100%;
	padding: 10px 0;
	font-size: 0.9rem;
	margin-bottom: 20px;
`;

const BoldText = styled.div`
	display: inline;
	font-weight: 500;
`;

export default function Footer() {
	return (
		<MainContainer>
			All rights reserved _VO<BoldText>IS</BoldText> 2022
		</MainContainer>
	);
}
