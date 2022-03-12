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
		width: 100%;
		min-width: 300px;
	} ;
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
	contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
	function trimText(text: string, length: number) {
		if (text.length < length) return text;

		return text.slice(0, length) + "...";
	}

	return (
		<MainContainer>
			<PictureContainer>
				<ContactPicture src={contact.picture.large} alt="This is the profile picture of the given contact" />
			</PictureContainer>
			<DetailsContainer>
				{/* I applied the trim on the names separately because the div container can breake the line at the comma 
                    but it cannot handle long (first or last) name which is longer ~25 characters 
                    because there is no space in it where the div can breake the text*/}
				<ContactName>{`${trimText(contact.name.first, 22)}, ${trimText(contact.name.last, 22)}`}</ContactName>
				<ContactEmail>{trimText(contact.email, 27)}</ContactEmail>
				<ContactPhone>{trimText(contact.phone, 27)}</ContactPhone>
			</DetailsContainer>
		</MainContainer>
	);
}
