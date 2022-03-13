/* React */
import React, { useState } from "react";

/* Utils */
import { emptyContact, generateID } from "../utils/utils";
import set from "lodash/set";
import get from "lodash/get";
import omit from "lodash/omit";
import isEmpty from "lodash/isEmpty";
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

interface AddContactFormProps {
	saveNewContact: (newContact: Contact) => void;
}

export default function AddContactForm({ saveNewContact }: AddContactFormProps) {
	const [contact, setContact] = useState<Contact>(emptyContact);
	const [errors, setErrors] = useState<ContactErrors>({});

	const validationSchema = {
		name: { first: Joi.string().required().label("First name"), last: Joi.string().required().label("Last name") },
		phone: Joi.string().required().label("Phone"),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.required()
			.label("E-mail"),
		location: { street: Joi.string().min(4).max(60).required().label("Location") },
	};

	function validateForm() {
		const options: Joi.ValidationOptions = { abortEarly: false };
		const { error }: Joi.ValidationResult<any> = Joi.object(validationSchema).validate(contact, options);
		if (error) {
			const newErrors = {};
			const foundErrors: Joi.ValidationErrorItem[] = error.details;
			for (const error of foundErrors) {
				set(newErrors, error.path, error.message);
			}
			setErrors(newErrors);
		}
		setErrors({});
	}

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		validateForm();

		if (!isEmpty(errors)) return;

		contact.picture.large = contactProfilePic;
		contact.id.name = generateID("name");
		contact.id.value = generateID("value");
		saveNewContact(contact);
	};

	function validateField(path: string, value: string) {
		const subSchema: Joi.StringSchema = get(validationSchema, path);
		const { error }: Joi.ValidationResult<any> = subSchema.validate(value);

		if (error) {
			const newErrors = { ...errors };
			const errorMessage: string = error.details[0].message;
			set(newErrors, path, errorMessage);
			return setErrors(newErrors);
		}

		const newErrors = { ...errors };
		const filteredErrors = omit(newErrors, path);
		setErrors(filteredErrors);
	}

	const handleChange = (event: React.BaseSyntheticEvent) => {
		const path: string = event.currentTarget.name;
		const value: string = event.currentTarget.value;
		validateField(path, value);

		const newContact: Contact = { ...contact };
		set(newContact, path, value);
		setContact(newContact);
	};

	return (
		<MainContainer>
			<PageTitle text="Add New Contact" />
			<Form onSubmit={handleSubmit}>
				<Input
					label="First Name"
					placeHolder="Enter first name"
					path="name.first"
					error={get(errors, "name.first")}
					onChange={handleChange}
				/>
				<Input label="Last Name" placeHolder="Enter last name" path="name.last" error={get(errors, "name.last")} onChange={handleChange} />
				<Input label="Email" placeHolder="Enter Email" path="email" error={get(errors, "email")} onChange={handleChange} />
				<Input label="Phone" placeHolder="Enter Phone" path="phone" error={get(errors, "phone")} onChange={handleChange} />
				<Input
					label="Address"
					placeHolder="Enter Address"
					path="location.street"
					error={get(errors, "location.street")}
					onChange={handleChange}
				/>
				<AddContactButton>Add contact</AddContactButton>
			</Form>
		</MainContainer>
	);
}
