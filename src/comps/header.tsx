import styled from "styled-components";
import vodafoneLogoPath from "../img/vodafone_logo.svg";

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	width: 80%;
`;

const Logo = styled.img`
	width: 20%;
	min-width: 200px;
`;

const SearchField = styled.input`
	border: 1px #cfd4d9 solid;
	border-radius: 5px;
	height: 35px;
	width: 350px;
	font-size: 1rem;
	padding: 5px 10px;
`;

export default function Header() {
	return (
		<MainContainer>
			<Logo src={vodafoneLogoPath} alt="This is the official logo of Vodafone company" />
			<SearchField type="search" placeholder="Search for contact" />
		</MainContainer>
	);
}
