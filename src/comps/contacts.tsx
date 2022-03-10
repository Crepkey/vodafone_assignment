/* Styles */
import { colors } from "../utils/colors";
import styled from "styled-components";
import PageTitle from "./pageTitle";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	padding: 10px;
`;

export default function Contacts() {
	return (
		<MainContainer>
			<PageTitle text="Contacts" />
		</MainContainer>
	);
}
