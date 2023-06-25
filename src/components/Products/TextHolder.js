import { Container } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";
import { Fade } from "react-reveal";

const TextHolder = ({ text }) => {
  return (
    <Main>
      <StyledContainer>
        <Fade bottom>
          <Heading>{text}</Heading>
        </Fade>
      </StyledContainer>
    </Main>
  );
};

export default TextHolder;

const Main = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
`;

const StyledContainer = styled(Container)`
  width: 50%;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`;

const Heading = styled.p`
  font-weight: 100 !important;
  color: ${colors.textPrimary};
  font-size: 30px;
  line-height: 1.6;
`;
