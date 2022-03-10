/* React */
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./comps/header";

/* Components */
import Test1 from "./comps/test1";
import Test2 from "./comps/test2";

function App() {
	return (
		<div style={{ fontFamily: "Open Sans", fontStyle: "italic" }}>
			<Header />
			<Switch>
				<Route path="/test2" component={Test2} />
				<Route path="/" exact component={Test1} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default App;
