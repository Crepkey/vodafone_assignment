/* Interfaces */
import { RouteComponentProps } from "react-router-dom";
import { Contact } from "../utils/interfaces";

/* Utils */
import { breakePoints } from "../utils/utils";

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
	margin-top: 20px;
	padding: 0 10px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		flex-direction: column;
		align-items: center;
		height: auto;
		width: auto;
		padding: 0 10px;
	} ;
`;

const ContactPicture = styled.img`
	width: 110px;
	height: 110px;
`;

const ContactDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 20px;
	font-size: 0.9rem;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		padding: 20px 0 0 0;
		width: 100%;
	} ;
`;

const ContactDetail = styled.div`
	max-width: 400px;
	margin-bottom: 5px;
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
					<ContactDetail>
						<b>E-mail:</b> <Email>marion.jordan@gexample.com</Email>
					</ContactDetail>
					<ContactDetail>
						<b>Phone:</b> +3670-351-36-51
					</ContactDetail>
					<ContactDetail>
						<b>Address:</b> Budapest, 1181 Csontváry Kosztka Tivadar utca 11. VII. emelet 42. ajtó. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Dolorum nulla aspernatur, reiciendis, possimus autem iure architecto corrupti porro saepe debitis quasi
						dolore ratione exercitationem vitae officia laudantium veniam odit ipsam?
					</ContactDetail>
				</ContactDetails>
			</ContactInformations>
			<Buttons>
				<DeleteButton>Delete</DeleteButton>
				<EditButton>Edit</EditButton>
			</Buttons>
		</MainContainer>
	);
}
