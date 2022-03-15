/* React */
import { Link, RouteComponentProps } from "react-router-dom";

/* Icons */
import { VscCheck } from "react-icons/vsc";

/* Intefaces */
import { Contact } from "../utils/interfaces";

/* Components */
import PageTitle from "./pageTitle";
import ErrorPage from "./common/InfoPage";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

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

const GoBackButton = styled.button`
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

const UndoButton = styled.button`
	padding: 6px 10px;
	color: ${colors.normalButton};
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${colors.normalButtons};
	border-radius: 5px;
	font-size: 0.9rem;
	margin: 15px;
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		color: white;
		background-color: ${colors.normalButton};
	}
	:active {
		color: ${colors.normalButton};
		background-color: rgba(0, 0, 0, 0);
	}
`;

interface DeletedContactPageProps {
	deletedContact: Contact | undefined;
	undoContactDeletion: (contactToRestore: Contact) => void;
}
export default function DeletedContactPage({ deletedContact, undoContactDeletion }: DeletedContactPageProps) {
	if (!deletedContact)
		return (
			<ErrorPage
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
					<GoBackButton>Go back to the contacts</GoBackButton>
				</Link>
				<Link to="/">
					<UndoButton onClick={() => undoContactDeletion(deletedContact)}>Undo</UndoButton>
				</Link>
			</ButtonContainer>
		</MainContainer>
	);
}
