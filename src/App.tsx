/* React */
import { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

/* Utils */
import { generateID } from "./utils/utils";

/* Interfaces */
import { Contact } from "./utils/interfaces";

/* Components */
import Header from "./comps/header";
import Contacts from "./comps/contacts";
import Footer from "./comps/footer";
import AddContactForm from "./comps/addContactForm";

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
	const [contacts, setContacts] = useState<Contact[]>([]);

	useEffect(() => {
		getContacts(50);
	}, []);

	/* FIXME: Error handling is important */
	/* TODO: ID Validation is better here than inside of the contactCards comp */
	async function getContacts(results: number) {
		const response: Response = await fetch(
			`https://randomuser.me/api/?inc=id,name,email,phone,location,picture&results=${results}&nat=us,dk,fr,gb&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us&seed=hire_me`,
		);
		const parsedResponse: ParsedResponse = await response.json();
		if ("error" in parsedResponse) {
			console.log("ERROR");
		}
		/* 
			There is no ID in some cases in the contact object that I get from the server, 
			therefore I need to validate them and replace the empty IDs with a randomly generated data.
			DISCLAIMER: Theoritically, it can happen that I can generate the same ID which is already used by a contact.
			But the chances of this happening are quite slim.
		*/
		const validatedContacts: Contact[] = validateIDs(parsedResponse.results);
		setContacts(validatedContacts);
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

	/* This exit point is necessary to avoid a useless rendering until all the necessary data has arrived */
	if (contacts.length === 0) return null;

	return (
		<MainContainer>
			<Header />
			<Switch>
				{/* FIXME: Routing doesn't work in the deployed and published app on Netlify */}
				<Route path="/add_new_contact" component={AddContactForm} />
				<Route path="/" exact render={() => <Contacts contacts={contacts} />} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</MainContainer>
	);
}

export default App;
