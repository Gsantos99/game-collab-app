import styled from "styled-components/native";
import { CustomText } from "../style";

export const PageContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 78px;
  background-color: lightcoral;
`;

export const ImgContainer = styled.View`
  width: 360px;
  height: 58px;
  flex-shrink: 0;
`;
