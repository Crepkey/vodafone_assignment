/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Components */
import ContactCard from "./contactCard";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
	width: 100%;
	min-height: 0;
	min-width: 0;
	overflow: auto;
	padding-bottom: 20px;
`;

interface ContactCardProps {
	displayedContacts: Contact[];
}
export default function ContactCards({ displayedContacts }: ContactCardProps) {
	return (
		<MainContainer>
			{displayedContacts.map((contact: Contact, index: number) => (
				/* In some cases the ID, that I get from the server, is null 
				therefore I need to add the index number to the ID 
				so that I can avoid the 'missing keys' issues because of the missing IDs.
				This is not the nicest solution but this is good for quick fix. */
				<ContactCard key={contact.id.value + index} contact={contact} />
			))}
		</MainContainer>
	);
}
