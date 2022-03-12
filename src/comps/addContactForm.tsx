/* React */
import React, { useState } from "react";

/* Utils */
import { emptyContact } from "../utils/utils";
import set from "lodash/set";

/* Components */
import PageTitle from "./pageTitle";

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

const Label = styled.label`
	color: ${colors.fieldLabel};
	font-size: 0.9rem;
	margin-top: 5px;
`;
/* REFACTOR: Standalone input component */
const Input = styled.input`
	margin: 10px 0;
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 25px;
	font-size: 0.9rem;
	padding: 5px 10px;
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

	/* TODO: Typescript type for event */
	const handleChange = (event: any) => {
		console.log(event);
		const newContact: NewContact = { ...contact };
		set(newContact, event.currentTarget.name, event.currentTarget.value);
		setContact(newContact);
	};

	return (
		<MainContainer>
			<PageTitle text="Add New Contact" />
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="first_name">First Name</Label>
				<Input type="text" id="first_name" placeholder="Enter first name" name="name.first" onChange={handleChange} />
				<Label htmlFor="last_name">Last Name</Label>
				<Input type="text" id="last_name" placeholder="Enter last name" name="name.last" onChange={handleChange} />
				<Label htmlFor="email">Email</Label>
				<Input type="text" id="email" placeholder="Enter Email" name="email" onChange={handleChange} />
				<Label htmlFor="phone">Phone</Label>
				<Input type="text" id="phone" placeholder="Enter Phone" name="phone" onChange={handleChange} />
				<Label htmlFor="address">Address</Label>
				<Input type="text" id="address" placeholder="Enter Address" name="location.street" onChange={handleChange} />
				<AddContactButton>Add contact</AddContactButton>
			</Form>
		</MainContainer>
	);
}
