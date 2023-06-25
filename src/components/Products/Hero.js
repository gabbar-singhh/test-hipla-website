import styled from "styled-components";
import Link from "next/link";

import colors from "../../config/colors";
import { Button } from "../Overrides";
import { Fade } from "react-reveal";

const Hero = ({ title, description, buttons }) => {
  return (
    <Main>
      <Fade bottom>
        <Heading>{title}</Heading>
      </Fade>
      <Fade bottom>
        <Description>{description}</Description>
      </Fade>

      {/* {buttons &&
        buttons.length &&
        buttons.map((item) => ( */}
          {/* // <Link href={item.url}> */}
             {/* <Button
          //     variant={item.type}
          //     isOutline={item.type === "outline-primary"}
          //   >
          //     {item.title}
          //   </Button> */}
          {/* // </Link> */}
        {/* ))} */}
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 80px;
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`;

const Heading = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 64px;
color: #2E59A8;
`;

const Description = styled.p`
  color: ${colors.textSecondary};
  font-size: 17px;
  margin-bottom: 30px;
`;
