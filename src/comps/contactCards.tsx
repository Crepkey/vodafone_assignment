/* Utils */
import { breakePoints } from "../utils/utils";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Components */
import ContactCard from "./contactCard";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-gap: 30px;
	grid-template-columns: repeat(auto-fill, 316px);
	width: 80%;
	min-height: 0;
	min-width: 0;
	overflow: auto;
	padding-bottom: 20px;
	@media screen and (max-width: ${breakePoints.smallCompactView}) {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
		justify-content: flex-start;
	}
	@media screen and (max-width: ${breakePoints.smallCompactView}) {
		width: 100%;
	}
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
