import styled from "styled-components";
import { colors } from "../../utils/colors";

const StyledButton = styled.button<{ buttonColors: any; style: any }>`
	padding: 6px 10px;
	color: ${({ buttonColors }) => buttonColors.color};
	background-color: ${({ buttonColors }) => buttonColors.background};
	border: 1px solid ${({ buttonColors }) => buttonColors.border};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: ${({ style }) => (style?.margin ? style?.margin : 0)};
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		color: ${({ buttonColors }) => buttonColors.hoverColor};
		background-color: ${({ buttonColors }) => buttonColors.hoverBackgroundColor};
	}
	:active {
		color: ${({ buttonColors }) => buttonColors.activeColor};
		background-color: ${({ buttonColors }) => buttonColors.activeBackgroundColor};
	}
`;

interface ButtonProps {
	style?: { [key: string]: string };
	colorStyle: "common" | "red";
	text: string;
	onClick?: (any: any) => any;
}

export default function Button({ style, colorStyle, text, onClick }: ButtonProps) {
	const buttonColors = (() => {
		switch (colorStyle) {
			case "red":
				return {
					color: colors.red,
					background: colors.transparent,
					border: colors.red,
					hoverColor: colors.buttonTextHover,
					hoverBackgroundColor: colors.red,
					activeColor: colors.red,
					activeBackgroundColor: colors.transparent,
				};
			case "common":
				return {
					color: colors.normalButton,
					background: colors.transparent,
					border: colors.normalButton,
					hoverColor: colors.buttonTextHover,
					hoverBackgroundColor: colors.normalButton,
					activeColor: colors.normalButton,
					activeBackgroundColor: colors.transparent,
				};
		}
	})();

	return (
		<StyledButton style={style} buttonColors={buttonColors} onClick={onClick}>
			{text}
		</StyledButton>
	);
}
