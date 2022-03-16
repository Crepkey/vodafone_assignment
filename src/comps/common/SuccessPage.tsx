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
interface DeletedContactPageProps {
	deletedContact: Contact | undefined;
	undoContactDeletion: (contactToRestore: Contact) => void;
}
export default function DeletedContactPage({ deletedContact, undoContactDeletion }: DeletedContactPageProps) {
	if (!deletedContact)
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
			<PageTitle text="Successfully deleted" />
			<ProfilePic src={deletedContact.picture.large} alt="This is the picture of the deleted contact" />
			<Details>
				{`Your contact`} <b>{`${deletedContact.name.first} ${deletedContact.name.last} `}</b>
				{`has been removed from your contacts successfully`}
			</Details>
			<ButtonContainer>
				<Link to="/">
					<Button style={{ margin: "15px" }} colorStyle={"red"} text={"Go back to the contacts"} />
				</Link>
				<Link to="/">
					<Button style={{ margin: "15px" }} colorStyle={"common"} text={"Undo"} onClick={() => undoContactDeletion(deletedContact)} />
				</Link>
			</ButtonContainer>
		</MainContainer>
	);
}
