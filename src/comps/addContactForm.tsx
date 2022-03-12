/* Components */
import PageTitle from "./pageTitle";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;
	border: 1px red solid;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	border: 1px solid green;
`;

export default function AddContactForm() {
	return (
		<MainContainer>
			<PageTitle text="Add New Contact" />
			<Form>
				<label htmlFor="first_name">First Name</label>
				<input type="text" id="first_name" />
				<label htmlFor="first_name">First Name</label>
				<input type="text" id="first_name" />
			</Form>
		</MainContainer>
	);
}
