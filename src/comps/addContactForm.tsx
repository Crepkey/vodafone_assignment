/* React */
import React, { useState } from "react";

/* Utils */
import { emptyContact } from "../utils/utils";
import set from "lodash/set";

/* Components */
import PageTitle from "./pageTitle";
import Input from "./common/input";

/* Interfaces */
import { NewContact } from "../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;
	padding: 10px 0;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	padding: 20px 0;
`;

/* REFACTOR: Standalone normal button component */
const AddContactButton = styled.button`
	width: 100px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	color: ${colors.normalButton};
	/* 
        It's good practice to apply a fully transparent background for button or any elements
        so that you don't need to change the background color if the dark theme is active
    */
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.normalButtons};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 25px auto 0 auto;
`;

export default function AddContactForm() {
	const [contact, setContact] = useState<NewContact>(emptyContact);

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		console.log("Submitted");
	};

	const handleChange = (event: React.BaseSyntheticEvent) => {
		const newContact: NewContact = { ...contact };
		set(newContact, event.currentTarget.name, event.currentTarget.value);
		setContact(newContact);
	};

	return (
		<MainContainer>
			<PageTitle text="Add New Contact" />
			<Form onSubmit={handleSubmit}>
				<Input label="First Name" placeHolder="Enter first name" path="name.first" onChange={handleChange} />
				<Input label="Last Name" placeHolder="Enter last name" path="name.last" onChange={handleChange} />
				<Input label="Email" placeHolder="Enter Email" path="email" onChange={handleChange} />
				<Input label="Phone" placeHolder="Enter Phone" path="phone" onChange={handleChange} />
				<Input label="Address" placeHolder="Enter Address" path="location.street" onChange={handleChange} />
				<AddContactButton>Add contact</AddContactButton>
			</Form>
		</MainContainer>
	);
}
