/* React */
import { useState } from "react";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Components */
import PageTitle from "./pageTitle";
/* Components */
import FilterBar from "./filterBar";
import ContactCards from "./contactCards";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;
	min-height: 0;
	min-width: 0;
	padding: 10px 0;
`;

const AddNewContactButton = styled.button`
	position: absolute;
	bottom: 50px;
	right: 25px;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border-style: none;
	color: ${colors.addContactButtonFont};
	font-size: 30px;
	font-weight: 500;
	background-color: ${colors.red};
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		width: 65px;
		height: 65px;
	}
	:active {
		width: 50px;
		height: 50px;
	}
`;

interface ContactsProps {
	contacts: Contact[];
}

export default function Contacts({ contacts }: ContactsProps) {
	const [displayedContacts, setDisplayedContacts] = useState<Contact[]>(contacts);

	return (
		<MainContainer>
			<PageTitle text="Contacts" />
			<FilterBar contacts={contacts} />
			<ContactCards displayedContacts={displayedContacts} />
			<AddNewContactButton>+</AddNewContactButton>
		</MainContainer>
	);
}
