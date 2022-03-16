/* React */
import React, { useState } from "react";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Utils */
import { breakePoints } from "../utils/utils";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import get from "lodash/get";
import omit from "lodash/omit";
import isEmpty from "lodash/isEmpty";
import Joi from "joi";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

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

const SaveButton = styled.button`
	padding: 6px 10px;
	color: ${colors.normalButton};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.normalButtons};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 25px 15px 15px 15px;
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		color: white;
		background-color: ${colors.normalButton};
	}
	:active {
		color: ${colors.normalButton};
		background-color: rgba(0, 0, 0, 0);
	}
`;

interface EditContactFormProps {
	contactToEdit: Contact;
	updateContact(contactToUpdate: Contact): void;
	setEditActive(value: React.SetStateAction<boolean>): void;
}

interface ContactErrors {
	name?: { first: string; last: string };
	phone?: string;
	email?: string;
	location?: { street: { name: string } };
}

export default function EditContactForm({ contactToEdit, updateContact, setEditActive }: EditContactFormProps) {
	const [contact, setContact] = useState<Contact>(contactToEdit);
	const [errors, setErrors] = useState<ContactErrors>({});

	const validationSchema = {
		name: {
			first: Joi.string().required().label("First name"),

			last: Joi.string().required().label("Last name"),
		},
		phone: Joi.string()
			.trim()
			.regex(/^[0-9]{7,20}$/)
			.required()
			.messages({ "string.pattern.base": "The phone number format is: 06701234567" })
			.label("Phone number"),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.required()
			.label("E-mail"),
		location: { street: { name: Joi.string().min(4).max(60).required().label("Location") } },
	};

	function validateForm() {
		const options: Joi.ValidationOptions = { abortEarly: false };
		const { error }: Joi.ValidationResult<any> = Joi.object(validationSchema).validate(contact, options);
		if (error) {
			const newErrors = {};
			const foundErrors: Joi.ValidationErrorItem[] = error.details;
			for (const error of foundErrors) {
				if (error.type === "object.unknown") continue;
				set(newErrors, error.path, error.message);
			}
			return setErrors(newErrors);
		}
		setErrors({});
	}

	function validateField(name: string, value: string) {
		const subSchema: Joi.StringSchema = get(validationSchema, name);
		const { error }: Joi.ValidationResult<any> = subSchema.validate(value);

		if (error) {
			const newErrors: ContactErrors = cloneDeep(errors);
			const errorMessage: string = error.details[0].message;
			set(newErrors, name, errorMessage);
			return setErrors(newErrors);
		}

		const newErrors: ContactErrors = cloneDeep(errors);
		const filteredErrors: ContactErrors = omit(newErrors, name);
		setErrors(filteredErrors);
	}

	const handleChange = (event: React.BaseSyntheticEvent) => {
		const name: string = event.currentTarget.name;
		const value: string = event.currentTarget.value;
		validateField(name, value);
		const newContact: Contact = cloneDeep(contact);
		set(newContact, name, value);
		setContact(newContact);
	};

	const handleSubmit = (event: React.BaseSyntheticEvent) => {
		event.preventDefault();
		validateForm();

		if (!isEmpty(errors)) return;

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
					placeholder={"Place address"}
					name={"location.street.name"}
					onChange={handleChange}
					value={contact.location.street.name}
				/>
			</InputContainer>
			<ErrorMessage>{errors.location?.street.name}</ErrorMessage>
			<SaveButton>Save contact</SaveButton>
		</Form>
	);
}
