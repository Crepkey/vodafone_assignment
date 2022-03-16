/* React */
import React, { useState } from "react";

/* Utils */
import { emptyContact, generateID, validateField, validateForm, validationSchema } from "../utils/utils";
import set from "lodash/set";
import get from "lodash/get";
import omit from "lodash/omit";
import cloneDeep from "lodash/cloneDeep";
import Joi from "joi";

/* Components */
import PageTitle from "./pageTitle";
import Input from "./common/input";

/* Interfaces */
import { Contact, ContactErrors } from "../utils/interfaces";

/* Images */
import contactProfilePic from "../img/new_contact_pic.jpg";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";
import { useHistory } from "react-router-dom";

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

interface AddContactFormProps {
	saveNewContact: (newContact: Contact) => void;
}

export default function AddContactForm({ saveNewContact }: AddContactFormProps) {
	const [contact, setContact] = useState<Contact>(emptyContact);
	const [errors, setErrors] = useState<ContactErrors>({});
	const history = useHistory();

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();

		const errors = validateForm(contact, setErrors);
		if (errors) return;

		const newContact: Contact = cloneDeep(contact);
		set(newContact, "id.name", generateID("name"));
		set(newContact, "id.value", generateID("value"));
		set(newContact, "picture.large", contactProfilePic);

		saveNewContact(newContact);
		history.push("/");
	};

	const handleChange = (event: React.BaseSyntheticEvent) => {
		const name: string = event.currentTarget.name;
		const value: string = event.currentTarget.value;
		validateField(name, value, errors, setErrors);
		const newContact: Contact = cloneDeep(contact);
		set(newContact, name, value);
		setContact(newContact);
	};

	return (
		<MainContainer>
			<PageTitle text="Add New Contact" />
			<Form onSubmit={handleSubmit}>
				<Input
					label="First Name"
					placeHolder="Enter first name"
					name="name.first"
					value={contact.name.first}
					error={errors.name?.first}
					onChange={handleChange}
				/>
				<Input
					label="Last Name"
					placeHolder="Enter last name"
					name="name.last"
					value={contact.name.last}
					error={errors.name?.last}
					onChange={handleChange}
				/>
				<Input label="Email" placeHolder="Enter Email" name="email" value={contact.email} error={errors.email} onChange={handleChange} />
				<Input label="Phone" placeHolder="Enter Phone" name="phone" value={contact.phone} error={errors.phone} onChange={handleChange} />
				<Input
					label="Address"
					placeHolder="Enter Address"
					name="location.street.name"
					value={contact.location.street.name}
					error={errors.location?.street.name}
					onChange={handleChange}
				/>
				<AddContactButton>Add contact</AddContactButton>
			</Form>
		</MainContainer>
	);
}
