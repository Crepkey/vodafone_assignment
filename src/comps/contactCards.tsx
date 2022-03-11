/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1;
	justify-content: center;
	gap: 30px;
	width: 80%;
	min-height: 0;
	min-width: 0;
	overflow: scroll;
`;

const ContactCard = styled.div`
	display: flex;
	width: 300px;
	height: 80px;
	border: 1px solid ${colors.contactCardBorder};
	border-radius: 5px;
	border-left: 3px solid rgba(0, 0, 0, 0);
	padding: 7px;
	-webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.15);
	box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.15);
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		border-left: 3px solid ${colors.red};
	}
`;

const PictureContainer = styled.div`
	display: flex;
	flex: 1;
`;

const ContactPicture = styled.img`
	width: 80px;
	height: 80px;
`;

const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
interface ContactCardProps {
	displayedContacts: Contact[];
}
export default function ContactCards({ displayedContacts }: ContactCardProps) {
	return (
		<MainContainer>
			{displayedContacts.map((contact: Contact, index: number) => (
				/* In some cases the ID, that I get from the server, is null 
                therefore I need to add the index number to the ID so that I can avoid the 'missing keys' issues because of the missing IDs.
                This is not the nicest solution but this is good for quick fix.
                */
				<ContactCard key={contact.id.value + index}>
					<PictureContainer>
						<ContactPicture src={contact.picture.large} alt="This is the profile picture of the given contact" />
					</PictureContainer>
					<DetailsContainer style={{ fontSize: "0.5rem" }}>{contact.email}</DetailsContainer>
				</ContactCard>
			))}
		</MainContainer>
	);
}
