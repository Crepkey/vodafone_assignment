/* Interfaces */
import { RouteComponentProps } from "react-router-dom";
import { Contact } from "../utils/interfaces";

/* Styles */
import styled from "styled-components";
import PageTitle from "./pageTitle";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 100%;
	min-height: 0;
	min-width: 0;
	padding: 10px 0;
`;

interface MatchParams {
	id: string;
}

interface ContactPageProps extends RouteComponentProps<MatchParams> {
	contacts: Contact[];
}

export default function ContactPage({ contacts, match }: ContactPageProps) {
	/* {match.params.id} */
	return (
		<MainContainer>
			<PageTitle text={`${contacts[0].name.first}, ${contacts[0].name.last}'s Profile`} />
		</MainContainer>
	);
}
