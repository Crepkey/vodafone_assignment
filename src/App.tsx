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

function App() {
	const [contacts, setContacts] = useState<Contact[]>([]);

	useEffect(() => {
		getContacts();
	}, []);

	/* FIXME: Error handling is important */
	async function getContacts() {
		const response: Response = await fetch(`https://randomuser.me/api/?inc=id,name,email,phone,location&results=50&seed=hire_me`);
		const parsedResponse: Contact[] = await response.json();
		if ("error" in parsedResponse) {
			console.log("ERROR");
		}
		setContacts(parsedResponse);
	}
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
