/* React */
import { Link } from "react-router-dom";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Utils */
import { breakePoints } from "../utils/utils";

/* Components */
import Button from "./common/Button";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const ContactInformations = styled.div`
	display: flex;
	margin-top: 20px;
	padding: 0 10px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		flex-direction: column;
		align-items: center;
		height: auto;
		width: auto;
		padding: 0 10px;
	} ;
`;

const ContactPicture = styled.img`
	width: 110px;
	height: 110px;
`;

const ContactDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 20px;
	font-size: 0.9rem;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		padding: 20px 0 0 0;
		width: 100%;
	} ;
`;

const ContactDetail = styled.div`
	max-width: 400px;
	margin-bottom: 5px;
`;

const Email = styled.div`
	display: inline;
	color: ${colors.red};
`;

const Buttons = styled.div`
	padding-top: 20px;
	display: flex;
	justify-content: center;
	width: 100%;
`;

interface ContactPageInfosProps {
	contact: Contact;
	setEditActive(value: React.SetStateAction<boolean>): void;
	deleteContact(contactToDelete: Contact): void;
}

export default function ContactPageInfos({ contact, setEditActive, deleteContact }: ContactPageInfosProps) {
	return (
		<>
			<ContactInformations>
				<ContactPicture src={contact.picture.large} alt="This is the profile picture of the given contact" />
				<ContactDetails>
					<ContactDetail>
						<b>E-mail:</b> <Email>{contact.email}</Email>
					</ContactDetail>
					<ContactDetail>
						<b>Phone:</b> {contact.phone}
					</ContactDetail>
					<ContactDetail>
						<b>Address:</b>{" "}
						{`${contact.location.street.number} ${contact.location.street.name} ${contact.location.city} ${contact.location.state} ${contact.location.postcode} ${contact.location.country}`}
					</ContactDetail>
				</ContactDetails>
			</ContactInformations>
			<Buttons>
				<Link to={`/contact_deleted_successfully`}>
					<Button style={{ margin: "15px" }} colorStyle="red" text="Delete" onClick={() => deleteContact(contact)} />
				</Link>
				<Button style={{ margin: "15px" }} colorStyle="common" text="Edit" onClick={() => setEditActive(true)} />
			</Buttons>
		</>
	);
}
