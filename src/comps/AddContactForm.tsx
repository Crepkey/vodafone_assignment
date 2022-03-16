/* React */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/* Utils */
import { breakePoints, emptyContact, generateID, validateField, validateForm } from "../utils/utils";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";

/* Components */
import PageTitle from "./pageTitle";
import Input from "./common/InputField";
import Button from "./common/Button";

/* Interfaces */
import { Contact, ContactErrors } from "../utils/interfaces";

/* Images */
import contactProfilePic from "../img/new_contact_pic.jpg";

/* Styles */
import styled from "styled-components";

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
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 90%;
	}
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
				<Button colorStyle="common" text="Add contact" />
			</Form>
		</MainContainer>
	);
}
