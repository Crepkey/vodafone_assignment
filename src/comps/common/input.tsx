/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

const Label = styled.label`
	color: ${colors.fieldLabel};
	font-size: 0.9rem;
	margin-top: 5px;
`;

const InputField = styled.input`
	margin: 10px 0;
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 25px;
	font-size: 0.9rem;
	padding: 5px 10px;
`;

interface InputProps {
	label: string;
	path: string;
	placeHolder: string;
	onChange: (event: React.BaseSyntheticEvent) => void;
}

export default function Input({ label, path, placeHolder, onChange }: InputProps) {
	return (
		<>
			<Label htmlFor={path}>{label}</Label>
			<InputField type="text" id={path} placeholder={placeHolder} name={path} onChange={onChange} />
		</>
	);
}
