/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

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

const ContactCard = styled.div`
	display: flex;
	width: 300px;
	height: 80px;
	border: 1px solid ${colors.contactCardBorder};
	border-radius: 5px;
	margin-left: 2px;
	padding: 7px;
	-webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.15);
	box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.15);
	transition: all 0.3s ease;
	:hover {
		margin-left: 0;
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
	justify-content: space-between;
	padding-left: 10px;
	width: 100%;
`;

const ContactName = styled.div`
	color: ${colors.contactName};
	font-weight: 500;
	font-size: 1rem;
`;

const ContactEmail = styled.div`
	color: ${colors.contactDetails};
	font-size: 0.75rem;
	font-weight: 500;
`;
const ContactPhone = styled.div`
	color: ${colors.contactDetails};
	font-size: 0.8rem;
	margin-bottom: 10px;
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
					<DetailsContainer>
						<ContactName>{`${contact.name.first}, ${contact.name.last}`}</ContactName>
						<ContactEmail>{contact.email}</ContactEmail>
						<ContactPhone>{contact.phone}</ContactPhone>
					</DetailsContainer>
				</ContactCard>
			))}
		</MainContainer>
	);
}
