/* React */
import { useState } from "react";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Components */
import PageTitle from "./pageTitle";
import FilterBar from "./filterBar";

/* Styles */
import styled from "styled-components";
import ContactCards from "./contactCards";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	min-height: 0;
	min-width: 0;
	padding-top: 10px;
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
		</MainContainer>
	);
}
