/* React */
import React from "react";
import ReactDOM from "react-dom";

/* Style */
import "./index.css";

/* Fonts */
import "./fonts/OpenSans-Bold.ttf";
import "./fonts/OpenSans-BoldItalic.ttf";
import "./fonts/OpenSans-ExtraBold.ttf";
import "./fonts/OpenSans-ExtraBoldItalic.ttf";
import "./fonts/OpenSans-Italic.ttf";
import "./fonts/OpenSans-Light.ttf";
import "./fonts/OpenSans-LightItalic.ttf";
import "./fonts/OpenSans-Regular.ttf";
import "./fonts/OpenSans-SemiBold.ttf";
import "./fonts/OpenSans-SemiBoldItalic.ttf";

/* Comps */
import App from "./App";

/* Utils */
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
