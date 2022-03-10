/* React */
import { Route, Redirect, Switch } from "react-router-dom";

/* Components */
import Header from "./comps/header";
import Test1 from "./comps/test1";
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
	return (
		<MainContainer>
			<Header />
			<Switch>
				<Route path="/test2" component={Test2} />
				<Route path="/" exact component={Test1} />
				<Redirect to="/" />
			</Switch>
		</MainContainer>
	);
}

export default App;
