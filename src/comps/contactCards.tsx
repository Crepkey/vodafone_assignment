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
	overflow: scroll;
`;

interface ContactCardProps {
	displayedContacts: Contact[];
}
export default function ContactCards({ displayedContacts }: ContactCardProps) {
	return (
		<MainContainer>
			{displayedContacts.map((contact: Contact, index: number) => (
				<ContactCard contact={contact} contactNumber={index} />
			))}
		</MainContainer>
	);
}
