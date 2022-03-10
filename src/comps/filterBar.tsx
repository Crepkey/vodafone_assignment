/* Styles */
import styled from "styled-components";
import { colors } from "../utils/colors";

const MainContainer = styled.div`
	letter-spacing: 10px;
	display: flex;
	justify-content: center;
	width: 100%;
	color: ${colors.filterBar};
	font-size: 1.3rem;
	font-weight: 500;
	padding: 25px 10px;
`;

export default function FilterBar() {
	return <MainContainer>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</MainContainer>;
}
