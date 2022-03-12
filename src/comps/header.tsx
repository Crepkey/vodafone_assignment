/* React */
import { Link } from "react-router-dom";

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
	} ;
`;

const LinkWrapper = styled(Link)`
	width: 200px;
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
	@media screen and (max-width: ${breakePoints.largeCompactView}) {
		margin-top: 25px;
	} ;
`;

export default function Header() {
	return (
		<MainContainer>
			<LinkWrapper to="/">
				<Logo src={vodafoneLogoPath} alt="This is the official logo of Vodafone company" />
			</LinkWrapper>
			<SearchField type="search" placeholder="Search for contact" />
		</MainContainer>
	);
}
