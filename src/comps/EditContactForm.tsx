/* React */
import React, { useState } from "react";

/* Interfaces */
import { Contact, ContactErrors } from "../utils/interfaces";

/* Utils */
import { breakePoints, validateField, validateForm } from "../utils/utils";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";
import Button from "./common/Button";

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

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		flex-direction: column;
	}
`;

const Label = styled.label`
	color: ${colors.fieldLabel};
	font-size: 0.9rem;
	margin-right: 10px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 100%;
		margin: 0;
	}
`;

const InputField = styled.input`
	margin: 10px 0 0 0;
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 25px;
	min-width: 300px;
	max-width: 500px;
	font-size: 0.9rem;
	padding: 5px 10px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: calc(100% - 20px);
		min-width: 0;
	}
`;

const ErrorMessage = styled.div`
	color: ${colors.red};
	font-size: 0.8rem;
	text-align: right;
	height: 0.8rem;
	width: 100%;
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
			<InputContainer>
				<Label>{"First name"}</Label>
				<InputField
					type="text"
					id={"name.first"}
					placeholder={"Enter first name"}
					name={"name.first"}
					onChange={handleChange}
					value={contact.name.first}
				/>
			</InputContainer>
			<ErrorMessage>{errors.name?.first}</ErrorMessage>
			<InputContainer>
				<Label>{"Last name"}</Label>
				<InputField
					type="text"
					id={"name.last"}
					placeholder={"Enter last name"}
					name={"name.last"}
					onChange={handleChange}
					value={contact.name.last}
				/>
			</InputContainer>
			<ErrorMessage>{errors.name?.last}</ErrorMessage>
			<InputContainer>
				<Label>{"Email"}</Label>
				<InputField type="text" id={"email"} placeholder={"Enter email"} name={"email"} onChange={handleChange} value={contact.email} />
			</InputContainer>
			<ErrorMessage>{errors.email}</ErrorMessage>
			<InputContainer>
				<Label>{"Phone"}</Label>
				<InputField type="text" id={"phone"} placeholder={"Enter phone"} name={"phone"} onChange={handleChange} value={contact.phone} />
			</InputContainer>
			<ErrorMessage>{errors.phone}</ErrorMessage>
			<InputContainer>
				<Label>{"Address"}</Label>
				<InputField
					type="text"
					id={"location.street.name"}
					placeholder={"Enter location"}
					name={"location.street.name"}
					onChange={handleChange}
					value={contact.location.street.name}
				/>
			</InputContainer>
			<ErrorMessage>{errors.location?.street.name}</ErrorMessage>
			<Button style={{ margin: "25px 15px 15px 15px" }} colorStyle={"common"} text={"Save contact"} />
		</Form>
	);
}
