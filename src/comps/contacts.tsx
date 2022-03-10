/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Styles */
import { colors } from "../utils/colors";
import styled from "styled-components";
import PageTitle from "./pageTitle";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	width: 80%;
	padding: 10px;
`;

interface ContactsProps {
	contacts: Contact[];
}

export default function Contacts({ contacts }: ContactsProps) {
	console.log("INSIDE OF THE CONTACTS", contacts);
	return (
		<MainContainer>
			<PageTitle text="Contacts" />
		</MainContainer>
	);
}
