/* React */
import { Link } from "react-router-dom";

/* Icons */
import { VscError } from "react-icons/vsc";

/* Components */
import PageTitle from "../Title";
import Button from "./Button";

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
interface ErrorPageProps {
	icon: false | "error";
	title: string;
	details: string;
	button?: boolean;
	buttonText?: string;
	URLForRedirection?: string;
}

export default function InfoPage({ icon, title, details, button, buttonText = "", URLForRedirection = "" }: ErrorPageProps) {
	function generateIcon() {
		switch (icon) {
			case false:
				return null;
			case "error":
				return (
					<IconContainer>
						<VscError size={"100%"} color={colors.red} />
					</IconContainer>
				);
			default:
				return null;
		}
	}

	return (
		<MainContainer>
			{generateIcon()}
			<PageTitle text={title} />
			<Details>{details}</Details>
			{button && (
				<Link to={URLForRedirection}>
					<Button style={{ margin: "15px" }} colorStyle={"common"} text={buttonText} />
				</Link>
			)}
		</MainContainer>
	);
}
