/* Interfaces */
import { RouteComponentProps } from "react-router-dom";
import { Contact } from "../utils/interfaces";

/* Components */
import PageTitle from "./pageTitle";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

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

const ContactInformations = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 110px;
	width: 400px;
	margin-top: 20px;
`;

const ContactPicture = styled.img`
	width: 110px;
	height: 110px;
`;

const ContactDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 270px;
	padding-left: 20px;
	font-size: 0.9rem;
`;

const Email = styled.div`
	display: inline;
	color: ${colors.red};
`;

const Buttons = styled.div`
	padding-top: 20px;
	display: flex;
	justify-content: center;
	width: 100%;
`;

const EditButton = styled.button`
	padding: 6px 10px;
	color: ${colors.normalButton};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.normalButtons};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 15px;
`;

const DeleteButton = styled.button`
	padding: 6px 10px;
	color: ${colors.red};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.red};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 15px;
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
			<ContactInformations>
				<ContactPicture src={contacts[0].picture.large} alt="This is the profile picture of the given contact" />
				<ContactDetails>
					<div>
						E-mail: <Email>marion.jordan@gexample.com</Email>
					</div>
					<div>Phone: +3670-351-36-51</div>
					<div>Address: Budapest, 1181 Csontváry Kosztka Tivadar utca 11. VII. emelet 42. ajtó.</div>
				</ContactDetails>
			</ContactInformations>
			<Buttons>
				<DeleteButton>Delete</DeleteButton>
				<EditButton>Edit</EditButton>
			</Buttons>
		</MainContainer>
	);
}
