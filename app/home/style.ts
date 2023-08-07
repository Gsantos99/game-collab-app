import styled from "styled-components/native";
import { Container, CustomText } from "../style";

export const PageContainer = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TitleHead = styled(CustomText)`
  color: #000;
  font-family: Barlow;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledHeader = styled.View`
  width: 100%;
  height: 100px;
  text-align: left;
  padding: 20px;
  gap: 20px;
  background-color: lightcoral;
`;
