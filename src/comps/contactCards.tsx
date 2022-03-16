/* Utils */
import { breakePoints } from "../utils/utils";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Components */
import ContactCard from "./common/ContactCard";
import InfoPage from "./common/InfoPage";

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
	contacts: Contact[];
}
export default function ContactCards({ contacts }: ContactCardProps) {
	return contacts.length !== 0 ? (
		<MainContainer>
			{contacts.map((contact: Contact) => (
				<ContactCard key={contact.id.value} contact={contact} />
			))}
		</MainContainer>
	) : (
		<InfoPage icon={false} title={"There is no result"} details={"There is nothing to show for your search."} />
	);
}
