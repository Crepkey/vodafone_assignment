/* React */
import { useState } from "react";

/* Interfaces */
import { RouteComponentProps } from "react-router-dom";
import { Contact } from "../utils/interfaces";

/* Utils */
import { breakePoints } from "../utils/utils";

/* Components */
import PageTitle from "./common/Title";
import EditContactForm from "./EditContactForm";
import InfoPage from "./common/InfoPage";
import ContactPageInfos from "./ContactPageInfos";

/* Styles */
import styled from "styled-components";

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
interface MatchParams {
	id: string;
}

interface ContactPageProps extends RouteComponentProps<MatchParams> {
	contacts: Contact[];
	deleteContact(contactToDelete: Contact): void;
	updateContact(contactToUpdate: Contact): void;
}

export default function ContactPage({ contacts, match, deleteContact, updateContact }: ContactPageProps) {
	const [isEditActive, setEditActive] = useState<boolean>(false);
	const contactID: string = match.params.id;
	const contact: Contact = (() => {
		return contacts.filter((contact: Contact) => contactID === contact.id.name + "-" + contact.id.value)[0];
	})();

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
				<EditContactForm contactToEdit={contact} updateContact={updateContact} setEditActive={setEditActive} />
			) : (
				<ContactPageInfos contact={contact} setEditActive={setEditActive} deleteContact={deleteContact} />
			)}
		</MainContainer>
	);
}
