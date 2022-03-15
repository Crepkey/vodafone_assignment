/* React */
import { Link } from "react-router-dom";

/* Icons */
import { VscError } from "react-icons/vsc";

/* Components */
import PageTitle from "../pageTitle";

/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: auto;
	padding: 10px 0;
`;

const IconContainer = styled.div`
	margin-bottom: 30px;
	height: 15%;
`;

const Details = styled.div`
	font-size: 1rem;
	text-align: center;
	padding: 20px;
	max-width: 800px;
`;

const Button = styled.button`
	padding: 6px 10px;
	color: ${colors.red};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.red};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 15px;
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		color: white;
		background-color: ${colors.red};
	}
	:active {
		color: ${colors.red};
		background-color: rgba(0, 0, 0, 0);
	}
`;
interface ErrorPageProps {
	icon: false | "error";
	title: string;
	details: string;
	button?: boolean;
	buttonText?: string;
	URLForRedirection?: string;
}

export default function InfoPage({ icon, title, details, button, buttonText, URLForRedirection = "" }: ErrorPageProps) {
	function generateIcon() {
		switch (icon) {
			case false:
				return null;
			case "error":
				return <VscError size={"100%"} color={colors.red} />;
			default:
				return null;
		}
	}

	return (
		<MainContainer>
			<IconContainer>{generateIcon()}</IconContainer>
			<PageTitle text={title} />
			<Details>{details}</Details>
			{button && (
				<Link to={URLForRedirection}>
					<Button>{buttonText}</Button>
				</Link>
			)}
		</MainContainer>
	);
}
