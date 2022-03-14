/* Styles */
import styled from "styled-components";
import PageTitle from "../pageTitle";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	padding: 10px 0;
`;

const Details = styled.div`
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
	padding: 20px;
`;
interface ErrorPageProps {
	title: string;
	details: string;
	button?: boolean;
	buttonText?: string;
	URLForRedirection?: string;
}

export default function ErrorPage({ title, details, button, buttonText, URLForRedirection }: ErrorPageProps) {
	return (
		<MainContainer>
			<PageTitle text={title} />
			<Details>{details}</Details>
		</MainContainer>
	);
}
