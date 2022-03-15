/* React */
import React, { useState } from "react";

/* Utils */
import { emptyContactFormObj, emptyContactObj, generateID } from "../utils/utils";
import set from "lodash/set";
import get from "lodash/get";
import omit from "lodash/omit";
import isEmpty from "lodash/isEmpty";
import Joi from "joi";

/* Components */
import PageTitle from "./pageTitle";
import Input from "./common/input";

/* Interfaces */
import { Contact, ContactErrors, ContactFormFields } from "../utils/interfaces";

/* Images */
import contactProfilePic from "../img/new_contact_pic.jpg";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";
import { useHistory } from "react-router-dom";
import { cloneDeep } from "lodash";

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
	const [contact, setContact] = useState<ContactFormFields>(emptyContactFormObj);
	const [errors, setErrors] = useState<ContactErrors>({});
	const history = useHistory();

	const validationSchema = {
		firstName: Joi.string().required().label("First name"),

		lastName: Joi.string().required().label("Last name"),
		phone: Joi.string()
			.trim()
			.regex(/^[0-9]{7,20}$/)
			.required()
			.messages({ "string.pattern.base": "The phone number format is: 0123456789" })
			.label("Phone number"),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.required()
			.label("E-mail"),
		address: Joi.string().min(4).max(60).required().label("Location"),
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
			return true;
		}
		setErrors({});
		return false;
	}

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const error = validateForm();

		if (error) return;

		const newContact: Contact = cloneDeep(emptyContactObj);
		set(newContact, "name.first", contact.firstName);
		set(newContact, "name.last", contact.lastName);
		set(newContact, "email", contact.email);
		set(newContact, "phone", contact.phone);
		set(newContact, "location.street.name", contact.address);
		set(newContact, "id.name", generateID("name"));
		set(newContact, "id.value", generateID("value"));
		set(newContact, "picture.large", contactProfilePic);

		saveNewContact(newContact);
		history.push("/");
	};

	function validateField(name: string, value: string) {
		const subSchema: Joi.StringSchema = get(validationSchema, name);
		const { error }: Joi.ValidationResult<any> = subSchema.validate(value);

		if (error) {
			const newErrors: ContactErrors = { ...errors };
			const errorMessage: string = error.details[0].message;
			set(newErrors, name, errorMessage);
			return setErrors(newErrors);
		}

		const newErrors: ContactErrors = { ...errors };
		const filteredErrors = omit(newErrors, name);
		setErrors(filteredErrors);
	}

	const handleChange = (event: React.BaseSyntheticEvent) => {
		const name: string = event.currentTarget.name;
		const value: string = event.currentTarget.value;
		validateField(name, value);

		const newContact: ContactFormFields = { ...contact };
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
					name="firstName"
					value={contact.firstName}
					error={errors.firstName}
					onChange={handleChange}
				/>
				<Input
					label="Last Name"
					placeHolder="Enter last name"
					name="lastName"
					value={contact.lastName}
					error={errors.lastName}
					onChange={handleChange}
				/>
				<Input label="Email" placeHolder="Enter Email" name="email" value={contact.email} error={errors.email} onChange={handleChange} />
				<Input label="Phone" placeHolder="Enter Phone" name="phone" value={contact.phone} error={errors.phone} onChange={handleChange} />
				<Input
					label="Address"
					placeHolder="Enter Address"
					name="address"
					value={contact.address}
					error={errors.address}
					onChange={handleChange}
				/>
				<AddContactButton>Add contact</AddContactButton>
			</Form>
		</MainContainer>
	);
}
