/* React */
import React, { useState } from "react";

/* Interfaces */
import { Contact, ContactErrors } from "../utils/interfaces";

/* Utils */
import { breakePoints, validateField, validateForm } from "../utils/utils";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";

/* Components */
import Button from "./common/Button";
import Input from "./common/Input";

/* Styles */
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30%;
	min-width: 400px;
	padding: 20px 0;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 90%;
		min-width: 0;
	}
`;

interface EditContactFormProps {
	contactToEdit: Contact;
	updateContact(contactToUpdate: Contact): void;
	setEditActive(value: React.SetStateAction<boolean>): void;
}

export default function EditContactForm({ contactToEdit, updateContact, setEditActive }: EditContactFormProps) {
	const [contact, setContact] = useState<Contact>(contactToEdit);
	const [errors, setErrors] = useState<ContactErrors>({});

	const handleChange = (event: React.BaseSyntheticEvent) => {
		const name: string = event.currentTarget.name;
		const value: string = event.currentTarget.value;
		validateField(name, value, errors, setErrors);
		const newContact: Contact = cloneDeep(contact);
		set(newContact, name, value);
		setContact(newContact);
	};

	const handleSubmit = (event: React.BaseSyntheticEvent) => {
		event.preventDefault();

		const errors = validateForm(contact, setErrors);
		if (errors) return;

		updateContact(contact);
		setEditActive(false);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				label="First Name"
				labelPosition="left"
				placeHolder="Enter first name"
				name="name.first"
				value={contact.name.first}
				error={errors.name?.first}
				onChange={handleChange}
			/>
			<Input
				label="Last Name"
				labelPosition="left"
				placeHolder="Enter last name"
				name="name.last"
				value={contact.name.last}
				error={errors.name?.last}
				onChange={handleChange}
			/>
			<Input
				label="Email"
				labelPosition="left"
				placeHolder="Enter email"
				name="email"
				value={contact.email}
				error={errors.email}
				onChange={handleChange}
			/>
			<Input
				label="Phone"
				labelPosition="left"
				placeHolder="Enter phone"
				name="phone"
				value={contact.phone}
				error={errors.phone}
				onChange={handleChange}
			/>
			<Input
				label="Address"
				labelPosition="left"
				placeHolder="Enter address"
				name="location.street.name"
				value={contact.location.street.name}
				error={errors.location?.street.name}
				onChange={handleChange}
			/>
			<Button style={{ margin: "20px auto" }} colorStyle={"common"} text={"Save contact"} />
		</Form>
	);
}
