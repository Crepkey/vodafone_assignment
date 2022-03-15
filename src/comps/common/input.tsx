/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

const Label = styled.label`
	color: ${colors.fieldLabel};
	font-size: 0.9rem;
`;

const InputField = styled.input`
	margin: 10px 0 0 0;
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 25px;
	font-size: 0.9rem;
	padding: 5px 10px;
`;

const ErrorMessage = styled.div`
	color: ${colors.red};
	font-size: 0.8rem;
	text-align: right;
	height: 0.8rem;
`;
interface InputProps {
	label: string;
	name: string;
	placeHolder: string;
	value: string;
	error?: string;
	onChange: (event: React.BaseSyntheticEvent) => void;
}

export default function Input({ label, name, placeHolder, value, error, onChange }: InputProps) {
	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<InputField type="text" id={name} placeholder={placeHolder} name={name} onChange={onChange} value={value} />
			<ErrorMessage>{error}</ErrorMessage>
		</>
	);
}
