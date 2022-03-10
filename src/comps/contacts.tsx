/* Styles */
import { colors } from "../utils/colors";
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	padding: 10px;
`;

const PageTitle = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.7rem;
	font-weight: 500;
	color: ${colors.title};
	width: 100%;
`;

const TitleLine = styled.div`
	border-top: 3px ${colors.red} solid;
	margin-top: 10px;
	width: 40px;
`;

export default function Contacts() {
	return (
		<MainContainer>
			<PageTitle>Contacts</PageTitle>
			<TitleLine />
		</MainContainer>
	);
}
