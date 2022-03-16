/* React */
import { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

/* Utils */
import { generateID } from "./utils/utils";

/* Interfaces */
import { Contact } from "./utils/interfaces";

/* Components */
import Header from "./comps/Header";
import Contacts from "./comps/Contacts";
import Footer from "./comps/Footer";
import AddContactForm from "./comps/AddContactForm";
import ContactPage from "./comps/ContactPage";
import DeletedContactPage from "./comps/common/SuccessPage";
import InfoPage from "./comps/common/InfoPage";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

interface ParsedResponse {
	error?: string;
	info: { page: number; results: number; seed: string; version: string };
	results: Contact[];
}

function App() {
	const [errors, setErrors] = useState<Error>();
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
	const [deletedContact, setDeletedContacts] = useState<Contact>();

	useEffect(() => {
		getContacts(5);
	}, []);

	async function getContacts(results: number) {
		try {
			const response: Response = await fetch(
				`https://randomuser.me/api/?inc=id,name,email,phone,location,picture&results=${results}&nat=us,dk,fr,gb&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us&seed=hire_me`,
			);

			if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			}

			const parsedResponse: ParsedResponse = await response.json();

			if ("error" in parsedResponse) {
				throw new Error(parsedResponse.error);
			}

			const validatedContacts: Contact[] = validateIDs(parsedResponse.results);
			setContacts(validatedContacts);
			setFilteredContacts(validatedContacts);
		} catch (error) {
			setErrors(error as Error);
		}
	}

	function validateIDs(contacts: Contact[]) {
		if (contacts.length === 0) return contacts;

		for (const contact of contacts) {
			if (["", null, undefined].includes(contact.id.name)) {
				contact.id.name = generateID("name");
			}
			if (["", null, undefined].includes(contact.id.value)) {
				contact.id.value = generateID("value");
			}
		}
		return contacts;
	}

	function saveNewContact(newContact: Contact) {
		/* DISCLAIMER: There is no existed contact checking so it is possible to save the same contact twice */
		const newContacts = [...contacts, newContact];
		setContacts(newContacts);
		setFilteredContacts(newContacts);
	}

	function updateContact(contactToUpdate: Contact) {
		const newContacts: Contact[] = contacts.map((contact: Contact) => {
			if (contact.id.name === contactToUpdate.id.name && contact.id.value === contactToUpdate.id.value) {
				return contactToUpdate;
			}
			return contact;
		});
		setContacts(newContacts);
		setFilteredContacts(newContacts);
	}

	function deleteContact(contactToDelete: Contact) {
		const newContacts: Contact[] = contacts.filter(
			(contact: Contact) => contactToDelete.id.name !== contact.id.name && contactToDelete.id.value !== contact.id.value,
		);
		setDeletedContacts(contactToDelete);
		setContacts(newContacts);
		setFilteredContacts(newContacts);
		/* 
			The order of server API call and set state function depends on the deletion logic. We have two ways: The first one is the optimistic and second one is the pesimistic way. 
			I would prefer the pesimistic way when I don't modify state until I got the server response about the success of deletion. 
		*/
	}

	function undoContactDeletion(contactToRestore: Contact) {
		const newContacts: Contact[] = [...contacts, contactToRestore];
		setContacts(newContacts);
		setFilteredContacts(newContacts);
	}

	function filterContacts(searchLetter: string) {
		const filteredContacts: Contact[] = contacts.filter((contact: Contact) => contact.name.first.charAt(0).toLocaleUpperCase() === searchLetter);
		setFilteredContacts(filteredContacts);
	}

	function searchInContacts(searchExpression: string) {
		/* 
			This is a very dumb search feature but it can be extended very easily with some more complex code.
		*/
		const foundContacts: Contact[] = contacts.filter((contact: Contact) => {
			const firstChar: number = 0;
			const lastChar: number = searchExpression.length;
			const contactName: string = contact.name.first.substring(firstChar, lastChar).toLocaleLowerCase();
			const expression: string = searchExpression.toLocaleLowerCase();
			return contactName === expression;
		});
		setFilteredContacts(foundContacts);
	}

	if (errors)
		return (
			<MainContainer>
				<InfoPage icon="error" title="Oops... Something went wrong" details={errors.message} />;
			</MainContainer>
		);

	/* This exit point is necessary to avoid a useless rendering until all the necessary data has arrived */
	if (contacts.length === 0) return null;

	return (
		<MainContainer>
			<Header searchInContacts={searchInContacts} />
			<Switch>
				<Route
					path="/contact_deleted_successfully"
					render={() => <DeletedContactPage deletedContact={deletedContact} undoContactDeletion={undoContactDeletion} />}
				/>
				<Route
					path="/contact/:id"
					render={(props) => <ContactPage contacts={contacts} deleteContact={deleteContact} updateContact={updateContact} {...props} />}
				/>
				<Route path="/add_new_contact" render={() => <AddContactForm saveNewContact={saveNewContact} />} />
				<Route
					path="/"
					exact
					render={() => <Contacts contacts={contacts} filteredContacts={filteredContacts} filterContacts={filterContacts} />}
				/>
				<Redirect to="/" />
			</Switch>
			<Footer />
		</MainContainer>
	);
}

export default App;
