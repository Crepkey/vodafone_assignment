/* React */
import { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

/* Interfaces */
import { Contact } from "./utils/interfaces";

/* Components */
import Header from "./comps/header";
import Contacts from "./comps/contacts";
import Footer from "./comps/footer";
import Test2 from "./comps/test2";

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
		getContacts();
	}, []);

	/* FIXME: Error handling is important */
	async function getContacts() {
		const response: Response = await fetch(
			`https://randomuser.me/api/?inc=id,name,email,phone,location,picture&results=50&nat=us,dk,fr,gb&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us&seed=hire_me`,
		);
		const parsedResponse: ParsedResponse = await response.json();
		if ("error" in parsedResponse) {
			console.log("ERROR");
		}
		setContacts(parsedResponse.results);
	}

	/* This exit point is necessary to avoid a useless rendering until all the necessary data has arrived */
	if (contacts.length === 0) return null;

	return (
		<MainContainer>
			<Header />
			<Switch>
				<Route path="/test2" component={Test2} />
				<Route path="/" exact render={() => <Contacts contacts={contacts} />} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</MainContainer>
	);
}

export default App;
