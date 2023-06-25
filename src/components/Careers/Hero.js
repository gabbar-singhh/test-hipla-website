import { Container } from "../Overrides";
import styled from "styled-components";

import { colors } from "../../config";

const Hero = () => {
  return (
    <Container>
      <Holder>
        <Heading>
          Play a major role in one of Singapore’s leading startup.s
        </Heading>
        <Description>
          Join us and help revolutionize how people experience and interact with
          their workspace
        </Description>
      </Holder>
    </Container>
  );
};

export default Hero;

const Holder = styled.div`
  text-align: center;

  @media only screen and (min-width: 767px) {
    width: 60%;
    margin: 0 auto;
  }
`;

const Heading = styled.h3`
  color: ${colors.textPrimary};
  font-size: 35px;
  line-height: 1.5;
  font-weight: 700;

  @media only screen and (min-width: 767px) {
    padding-top: 100px;
  }
`;

const Description = styled.p`
  color: ${colors.textSecondary};
  font-size: 18px;
  margin-bottom: 80px;
`;
