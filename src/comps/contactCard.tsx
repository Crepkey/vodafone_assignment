/* Utils */
import { breakePoints } from "../utils/utils";

/* Intefaces */
import { Contact } from "../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
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
	@media screen and (max-width: ${breakePoints.smallCompactView}) {
		width: 90%;
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
	width: calc(100% - 90px);
`;

const ContactName = styled.div`
	width: 100%;
	color: ${colors.contactName};
	font-weight: 500;
	font-size: 1rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

const ContactEmail = styled.div`
	width: 100%;
	color: ${colors.contactDetails};
	font-size: 0.75rem;
	font-weight: 500;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;
const ContactPhone = styled.div`
	width: 100%;
	color: ${colors.contactDetails};
	font-size: 0.8rem;
	margin-bottom: 10px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

interface ContactCardProps {
	contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
	return (
		<MainContainer>
			<PictureContainer>
				<ContactPicture src={contact.picture.large} alt="This is the profile picture of the given contact" />
			</PictureContainer>
			<DetailsContainer>
				<ContactName>{`${contact.name.first}, ${contact.name.last}`}</ContactName>
				<ContactEmail>{contact.email}</ContactEmail>
				<ContactPhone>{contact.phone}</ContactPhone>
			</DetailsContainer>
		</MainContainer>
	);
}
