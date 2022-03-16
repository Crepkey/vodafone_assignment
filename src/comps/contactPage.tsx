/* React */
import { Fragment, useState } from "react";

/* Interfaces */
import { Link, RouteComponentProps } from "react-router-dom";
import { Contact } from "../utils/interfaces";

/* Utils */
import { breakePoints } from "../utils/utils";

/* Components */
import PageTitle from "./pageTitle";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";
import InfoPage from "./common/InfoPage";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;
	min-height: 0;
	min-width: 0;
	padding: 10px 0;
`;

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

const EditButton = styled.button`
	padding: 6px 10px;
	color: ${colors.normalButton};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.normalButtons};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 15px;
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		color: white;
		background-color: ${colors.normalButton};
	}
	:active {
		color: ${colors.normalButton};
		background-color: rgba(0, 0, 0, 0);
	}
`;

const DeleteButton = styled.button`
	padding: 6px 10px;
	color: ${colors.red};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.red};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 15px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30%;
	min-width: 300px;
	padding: 20px 0;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 70%;
		min-width: 0;
	}
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		flex-direction: column;
	}
`;

const Label = styled.label`
	color: ${colors.fieldLabel};
	font-size: 0.9rem;
	margin-right: 10px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 100%;
		margin: 0;
	}
`;

const InputField = styled.input`
	margin: 10px 0 0 0;
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 25px;
	width: 300px;
	font-size: 0.9rem;
	padding: 5px 10px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: calc(100% - 20px);
	}
`;

const ErrorMessage = styled.div`
	color: ${colors.red};
	font-size: 0.8rem;
	text-align: right;
	height: 0.8rem;
	width: 100%;
`;

const SaveButton = styled.button`
	padding: 6px 10px;
	color: ${colors.normalButton};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.normalButtons};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 25px 15px 15px 15px;
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		color: white;
		background-color: ${colors.normalButton};
	}
	:active {
		color: ${colors.normalButton};
		background-color: rgba(0, 0, 0, 0);
	}
`;
interface MatchParams {
	id: string;
}

interface ContactPageProps extends RouteComponentProps<MatchParams> {
	contacts: Contact[];
	deleteContact: (contactToDelete: Contact) => void;
}

export default function ContactPage({ contacts, match, deleteContact }: ContactPageProps) {
	const [isEditActive, setEditActive] = useState<boolean>(false);
	const contactID: string = match.params.id;
	const contact: Contact = (() => {
		return contacts.filter((contact: Contact) => contactID === contact.id.name + "-" + contact.id.value)[0];
	})();
	/* TODO: Messages and texts for user notification have to go in a standalone file */
	if (!contact)
		return (
			<InfoPage
				icon="error"
				title="Something went wrong"
				details={`The requested contact could not be found with the following ID: ${contactID}`}
				button={true}
				buttonText="Go back to the contacts"
				URLForRedirection="/"
			/>
		);

	return (
		<MainContainer>
			<PageTitle text={`${contact.name.first}, ${contact.name.last}'s Profile`} />
			{isEditActive ? (
				<Form>
					<InputContainer>
						<Label>{"First name"}</Label>
						<InputField
							type="text"
							id={"first"}
							placeholder={"Place holder"}
							name={"first"}
							onChange={() => {}}
							value={"ndsjcnsdjbcvsjkd"}
						/>
					</InputContainer>
					<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
					<InputContainer>
						<Label>{"First name"}</Label>
						<InputField
							type="text"
							id={"first"}
							placeholder={"Place holder"}
							name={"first"}
							onChange={() => {}}
							value={"ndsjcnsdjbcvsjkd"}
						/>
					</InputContainer>
					<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
					<InputContainer>
						<Label>{"First name"}</Label>
						<InputField
							type="text"
							id={"first"}
							placeholder={"Place holder"}
							name={"first"}
							onChange={() => {}}
							value={"ndsjcnsdjbcvsjkd"}
						/>
					</InputContainer>
					<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
					<InputContainer>
						<Label>{"First name"}</Label>
						<InputField
							type="text"
							id={"first"}
							placeholder={"Place holder"}
							name={"first"}
							onChange={() => {}}
							value={"ndsjcnsdjbcvsjkd"}
						/>
					</InputContainer>
					<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
					<SaveButton>Save contact</SaveButton>
				</Form>
			) : (
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
							<DeleteButton onClick={() => deleteContact(contact)}>Delete</DeleteButton>
						</Link>
						<EditButton onClick={() => setEditActive(true)}>Edit</EditButton>
					</Buttons>
				</>
			)}
		</MainContainer>
	);
}
