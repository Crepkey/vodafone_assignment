/* React */
import { Link } from "react-router-dom";

/* Intefaces */
import { Contact } from "../../utils/interfaces";

/* Components */
import PageTitle from "./PageTitle";
import InfoPage from "./InfoPage";

/* Styles */
import styled from "styled-components";
import Button from "./Button";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: auto;
	padding: 10px 0;
`;

const ProfilePic = styled.img`
	margin-top: 25px;
`;

const Details = styled.div`
	font-size: 1rem;
	text-align: center;
	padding: 20px;
`;

const ButtonContainer = styled.div`
	text-align: center;
`;
interface SuccessPageProps {
	title: string;
	text: string;
	contact: Contact | undefined;
	secondaryButtonText?: string;
	secondaryButtonFunction?: (contactToRestore: Contact) => void;
}
export default function SuccessPage({ title, text, contact, secondaryButtonText, secondaryButtonFunction = () => {} }: SuccessPageProps) {
	if (!contact)
		return (
			<InfoPage
				icon="error"
				title="Something went wrong"
				details={`The requested page is not valid. Please go back to the Contacts Page.`}
				button={true}
				buttonText="Go back to the contacts"
				URLForRedirection="/"
			/>
		);

	return (
		<MainContainer>
			<PageTitle text={title} />
			<ProfilePic src={contact.picture.large} alt="This is the picture of the contact" />
			<Details>
				{`Your contact`} <b>{`${contact.name.first} ${contact.name.last} `}</b>
				{text}
			</Details>
			<ButtonContainer>
				<Link to="/">
					<Button style={{ margin: "15px" }} colorStyle={"red"} text={"Go back to the contacts"} />
				</Link>
				{secondaryButtonText && (
					<Link to="/">
						<Button
							style={{ margin: "15px" }}
							colorStyle={"common"}
							text={secondaryButtonText}
							onClick={() => secondaryButtonFunction(contact)}
						/>
					</Link>
				)}
			</ButtonContainer>
		</MainContainer>
	);
}
