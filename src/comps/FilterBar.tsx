/* React */
import { useState } from "react";

/* Interfaces */
import { Contact } from "../utils/interfaces";

/* Utils */
import uniq from "lodash/uniq";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 70%;
	color: ${colors.filterBar};
	font-size: 1.3rem;
	font-weight: 500;
	padding: 25px 0 40px 0;
`;

const Letter = styled.div<{ isActive: boolean }>`
	width: 20px;
	text-align: center;
	margin: 0 10px 0 10px;
	border-bottom: 3px solid ${({ isActive }) => (isActive ? colors.red : colors.transparent)};
	transition: all 0.3s ease;
	:hover {
		border-bottom: 3px solid ${colors.red};
		cursor: pointer;
	}
`;

interface FilterBarProps {
	contacts: Contact[];
	filterContacts(searchLetter: string): void;
}

export default function FilterBar({ contacts, filterContacts }: FilterBarProps) {
	const [activeFilterLetter, setActiveFilterLetter] = useState<string>("");

	const letters: string[] = (() => {
		const AllFirstLetter: string[] = contacts.map((contact: Contact) => contact.name.first.charAt(0).toLocaleUpperCase());
		const uniqLetters: string[] = uniq(AllFirstLetter);
		return uniqLetters.sort();
	})();

	function setActive(letter: string) {
		return letter === activeFilterLetter ? true : false;
	}

	return (
		<MainContainer>
			{letters.map((letter: string) => (
				<Letter
					isActive={setActive(letter)}
					key={letter}
					onClick={() => {
						filterContacts(letter);
						setActiveFilterLetter(letter);
					}}>
					{letter}
				</Letter>
			))}
		</MainContainer>
	);
}
