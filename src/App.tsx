/* React */
import { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

/* Components */
import Header from "./comps/header";
import Contacts from "./comps/contacts";
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
interface ContactID {
	name: string;
	value: string;
}

interface ContactName {
	first: string;
	last: string;
	title: string;
}

interface ContactLocation {
	city: string;
	coordinates: { latitude: string; longitude: string };
	country: string;
	postcode: number;
	state: string;
	street: { number: number; name: string };
	timezone: { offset: string; description: string };
}
interface Contact {
	id: ContactID;
	name: ContactName;
	phone: string;
	location: ContactLocation;
}

function App() {
	const [users, setUsers] = useState<Contact[]>([]);

	useEffect(() => {
		getContacts();
	});

	/* FIXME: Error handling is important */
	async function getContacts() {
		const response: Response = await fetch(`https://randomuser.me/api/?inc=id,name,email,phone,location&results=50&seed=hire_me`);
		const parsedResponse: Contact[] = await response.json();
		setUsers(parsedResponse);
	}
	return (
		<MainContainer>
			<Header />
			<Switch>
				<Route path="/test2" component={Test2} />
				<Route path="/" exact component={Contacts} />
				<Redirect to="/" />
			</Switch>
		</MainContainer>
	);
}

export default App;
