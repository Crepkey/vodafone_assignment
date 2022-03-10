import styled from "styled-components";
import vodafoneLogoPath from "../img/vodafone_logo.svg";

const MainContainer = styled.div`
	display: flex;
	padding: 10px 0;
	border: 1px green solid;
`;

const Logo = styled.img`
	width: 25%;
`;

const SearchField = styled.input`
	border: 1px #cfd4d9 solid;
	border-radius: 5px;
	height: 50px;
`;

export default function Header() {
	return (
		<MainContainer>
			<Logo src={vodafoneLogoPath} alt="This is the official logo of Vodafone company" />
			<SearchField type="search" placeholder="Search for contact" />
		</MainContainer>
	);
}
