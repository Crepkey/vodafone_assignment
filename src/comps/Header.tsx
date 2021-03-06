/* React */
import { Link } from "react-router-dom";
import { useState } from "react";

/* Utils */
import { breakePoints } from "../utils/utils";

/* Images */
import vodafoneLogoPath from "../img/vodafone_logo.svg";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	width: 70%;
	@media screen and (max-width: ${breakePoints.largeCompactView}) {
		padding-top: 20px;
		flex-direction: column;
		align-items: left;
	}
	@media screen and (max-width: ${breakePoints.mobileL}) {
		padding-bottom: 0;
		width: 80%;
	} ;
`;

const WrapperLink = styled(Link)`
	height: 55px;
	width: 200px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 100%;
		height: 100%;
	} ;
`;

const Logo = styled.img`
	width: 20%;
	min-width: 200px;
	@media screen and (max-width: ${breakePoints.mobileL}) {
		width: 100%;
	} ;
`;

const SearchField = styled.input`
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 35px;
	width: 350px;
	font-size: 0.9rem;
	padding: 5px 10px;
	@media screen and (max-width: ${breakePoints.largeCompactView}) {
		margin-top: 25px;
	}
	@media screen and (max-width: ${breakePoints.mobileL}) {
		display: none;
	} ;
`;

interface HeaderProps {
	searchInContacts(searchExpression: string): void;
}

export default function Header({ searchInContacts }: HeaderProps) {
	const [searchExpression, setSearchExpression] = useState<string>("");

	const onChange = (event: React.BaseSyntheticEvent) => {
		setSearchExpression(event.currentTarget.value);
		searchInContacts(event.currentTarget.value);
	};

	return (
		<MainContainer>
			<WrapperLink to={"/"}>
				<Logo src={vodafoneLogoPath} alt="This is the official logo of Vodafone company" />
			</WrapperLink>
			<SearchField type="search" placeholder="Search for contact" value={searchExpression} onChange={onChange} />
		</MainContainer>
	);
}
