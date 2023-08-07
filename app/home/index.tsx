import { CustomText } from "../style";
import {
  PageContainer, TitleHead, StyledHeader, ImgContainer,
} from "./style";

const Home: React.FC = () => (
  <PageContainer>
    <ImgContainer>Citi logo</ImgContainer>
    <StyledHeader>
      <CustomText> Olá, username! </CustomText>
      <TitleHead> Suas próximas partidas </TitleHead>
    </StyledHeader>
  </PageContainer>
);

export default Home;
