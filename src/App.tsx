/* React */
import { useEffect } from "react";
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
interface UserID {
	name: string;
	value: string;
}

interface Name {
	first: string;
	last: string;
	title: string;
}

interface UserLocation {
	city: string;
	coordinates: { latitude: string; longitude: string };
	country: string;
	postcode: number;
	state: string;
	street: { number: number; name: string };
	timezone: { offset: string; description: string };
}
interface User {
	id: UserID;
	name: Name;
	phone: string;
	location: UserLocation;
}

function App() {
	useEffect(() => {
		getUsers();
	});

	/* FIXME: Error handling is important */
	async function getUsers() {
		const response: Response = await fetch(`https://randomuser.me/api/?inc=id,name,email,phone,location&results=50&seed=hire_me`);
		const parsedResponse: User[] = await response.json();
		console.log(parsedResponse);
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
