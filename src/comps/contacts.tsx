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

const FilterBar = styled.div`
	letter-spacing: 10px;
	display: flex;
	justify-content: center;
	width: 100%;
	color: ${colors.filterBar};
	font-size: 1.3rem;
	font-weight: 500;
	padding: 25px 10px;
`;

interface ContactsProps {
	contacts: Contact[];
}

export default function Contacts({ contacts }: ContactsProps) {
	console.log("INSIDE OF THE CONTACTS", contacts);
	return (
		<MainContainer>
			<PageTitle text="Contacts" />
			<FilterBar>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</FilterBar>
		</MainContainer>
	);
}
