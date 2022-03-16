/* React */
import { useState } from "react";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Utils */
import { breakePoints } from "../utils/utils";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
	min-width: 400px;
	padding: 20px 0;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 70%;
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
}

export default function EditContactForm({ contactToEdit }: EditContactFormProps) {
	const [contact, setContact] = useState<Contact>(contactToEdit);
	return (
		<Form>
			<InputContainer>
				<Label>{"First name"}</Label>
				<InputField
					type="text"
					id={"name.first"}
					placeholder={"Enter first name"}
					name={"name.first"}
					onChange={() => {}}
					value={contact.name.first}
				/>
			</InputContainer>
			<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
			<InputContainer>
				<Label>{"Last name"}</Label>
				<InputField
					type="text"
					id={"name.last"}
					placeholder={"Enter last name"}
					name={"name.last"}
					onChange={() => {}}
					value={contact.name.last}
				/>
			</InputContainer>
			<ErrorMessage>{"Email"}</ErrorMessage>
			<InputContainer>
				<Label>{"Email"}</Label>
				<InputField type="text" id={"email"} placeholder={"Enter email"} name={"email"} onChange={() => {}} value={contact.email} />
			</InputContainer>
			<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
			<InputContainer>
				<Label>{"Phone"}</Label>
				<InputField type="text" id={"phone"} placeholder={"Enter phone"} name={"phone"} onChange={() => {}} value={contact.phone} />
			</InputContainer>
			<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
			<InputContainer>
				<Label>{"Address"}</Label>
				<InputField
					type="text"
					id={"location.street.name"}
					placeholder={"Place address"}
					name={"first"}
					onChange={() => {}}
					value={contact.location.street.name}
				/>
			</InputContainer>
			<ErrorMessage>{"bwhbhsdbchsdjc"}</ErrorMessage>
			<SaveButton>Save contact</SaveButton>
		</Form>
	);
}
