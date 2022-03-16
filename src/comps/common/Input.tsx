/* Utils */
import { breakePoints } from "../../utils/utils";

/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

const InputContainer = styled.div<{ labelPosition: LabelPosition }>`
	display: flex;
	flex-direction: ${({ labelPosition }) => (labelPosition === "left" ? "row" : "column")};
	align-items: ${({ labelPosition }) => (labelPosition === "left" ? "center" : "flex-start")};
	width: 100%;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const Label = styled.label`
	color: ${colors.fieldLabel};
	font-size: 0.9rem;
	margin-right: 30px;
	min-width: 80px;
`;

const InputField = styled.input`
	margin: 10px 0 0 0;
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 25px;
	font-size: 0.9rem;
	padding: 5px 10px;
	width: 100%;
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
`;
type LabelPosition = "left" | "top";

interface InputProps {
	label: string;
	labelPosition?: LabelPosition;
	name: string;
	placeHolder: string;
	value: string;
	error?: string;
	onChange: (event: React.BaseSyntheticEvent) => void;
}

export default function Input({ label, labelPosition = "top", name, placeHolder, value, error, onChange }: InputProps) {
	return (
		<>
			<InputContainer labelPosition={labelPosition}>
				<Label htmlFor={name}>{label}</Label>
				<InputField type="text" id={name} placeholder={placeHolder} name={name} onChange={onChange} value={value} />
			</InputContainer>
			<ErrorMessage>{error}</ErrorMessage>
		</>
	);
}
