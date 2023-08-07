import { CustomText } from "../style";
import { PageContainer, TitleHead, StyledHeader } from "./style";

const Home: React.FC = () => (
  <PageContainer>
    <StyledHeader>
      <CustomText style={{ color: "red" }}> Olá, username! </CustomText>
      <TitleHead> Suas próximas partidas </TitleHead>
    </StyledHeader>
  </PageContainer>
);

export default Home;
