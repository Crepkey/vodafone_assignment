/* Images */
import vodafoneLogoPath from "../img/vodafone_logo.svg";

/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 15%;
	width: 100%;
`;

const Logo = styled.img`
	width: 20%;
	min-width: 200px;
`;

const SearchField = styled.input`
	border: 1px ${colors.fieldBorder} solid;
	border-radius: 5px;
	height: 35px;
	width: 350px;
	font-size: 1rem;
	padding: 5px 10px;
`;

export default function Header() {
	return (
		<MainContainer>
			<a href="/">
				<Logo src={vodafoneLogoPath} alt="This is the official logo of Vodafone company" />
			</a>
			<SearchField type="search" placeholder="Search for contact" />
		</MainContainer>
	);
}
