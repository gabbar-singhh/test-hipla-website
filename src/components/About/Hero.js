import { Container } from "../Overrides";
import styled from "styled-components";

import { colors } from "../../config";

const Hero = () => {
  return (
    <Container>
      <Holder>
        <Heading>About Us</Heading>
        <Description>
          Hipla’s goal is to improve the experience of a billion+ people at
          their workplaces every day
        </Description>
        <Description>
          From Advanced video analytics to Security and access control, we've
          built a 360* tool kit for facility management, HSE (health safety and
          security) protocols.
        </Description>
      </Holder>
    </Container>
  );
};

export default Hero;

const Holder = styled.div`
  text-align: center;
  padding-bottom: 80px;

  @media only screen and (min-width: 767px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Heading = styled.h3`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 64px;
color: #2E59A8;

  @media only screen and (min-width: 767px) {
    padding-top: 100px;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #333333;
`;
