/* Interfaces */
import { RouteComponentProps } from "react-router-dom";
import { Contact } from "../utils/interfaces";

interface MatchParams {
	id: string;
}

interface ContactPageProps extends RouteComponentProps<MatchParams> {
	contacts: Contact[];
}

export default function ContactPage({ contacts, match }: ContactPageProps) {
	return <div>{match.params.id}</div>;
}
