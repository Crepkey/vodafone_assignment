/* Interfaces */
import { Contact } from "../utils/interfaces";
import uniq from "lodash/uniq";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	letter-spacing: 25px;
	display: flex;
	justify-content: center;
	width: 100%;
	color: ${colors.filterBar};
	font-size: 1.3rem;
	font-weight: 500;
	padding: 25px 10px;
`;

const Letter = styled.div`
	transition: all 0.3s ease;
	:hover {
		font-size: 2rem;
		cursor: pointer;
	}
`;

interface FilterBarProps {
	contacts: Contact[];
}

export default function FilterBar({ contacts }: FilterBarProps) {
	const letters: string[] = (() => {
		const AllFirstLetter: string[] = contacts.map((contact: Contact) => contact.name.first.charAt(0));
		const uniqLetters: string[] = uniq(AllFirstLetter);
		return uniqLetters.sort();
	})();

	return (
		<MainContainer>
			{letters.map((letter: string) => (
				<Letter key={letter}>{letter}</Letter>
			))}
		</MainContainer>
	);
}
