import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";
import { Fade } from "react-reveal";

import { colors } from "../config";
import { Container } from "../components/Overrides";

import SATTVA from "../../public/images/sattva.png";
import APN from "../../public/images/apn.png";
import WRITER from "../../public/images/writer.png";
import YES from "../../public/images/yes.png";
import AMAZON from "../../public/images/amazon.png";
import LG from "../../public/images/lg.png";
import PRESTIGE from "../../public/images/prestige.png";
import AIPL from "../../public/images/aipl.png";
import WHITE from "../../public/images/white.png";
import FREE from "../../public/images/freeman.png";
import MC from "../../public/images/mc.png";
import SIMPLE from "../../public/images/simple.png";
import BREAD from "../../public/images/bread.png";
import DPS from "../../public/images/dps.png";
import PEOPLE from "../../public/images/people.png";
import VEHERE from "../../public/images/vehere.png";
import Head from "next/head";

const BRANDS = [AIPL,PRESTIGE,WRITER,YES,AMAZON, LG,SATTVA,WHITE,MC,SIMPLE,DPS,APN,VEHERE,PEOPLE,FREE,BREAD];
const ACTION_CONTENT = [
  // {
  //   icon: require("../public/vectors/schedule-calender.svg"),
  //   title: "Schedule a meeting",
  //   description: "Talk with us and see what it’s like to work with us.",
  //   action: {
  //     title: "Book a date",
  //     url: "/contact-sales",
  //   },
  // },
  {
    icon: "/vectors/book-demo.svg",
    title: "Book a demo",
    description: "See Hipla in action, get a dynamic and real-time demo.",
    action: {
      title : "Fill the form",
      url: "/contact-sales",
    },
  },
  {
    icon: "../vectors/speak-expert.svg",
    title: "Speak with an expert",
    description:
      "Learn more about our solutions, get personalized help in 2-clicks.",
    action: {
      title: "Let’s make your workplace smarter",
      url: "/contact",
    },
  },
];

const GetStarted = () => {
  return (
    <>
    <Head>
    <title>Speak with an expert-Hipla</title>
    <link rel="icon" href="/favicon.jpg" />
    <meta
      name="description"
      content="Get in touch to start leveraging our Access and Vision cloud solutions. Feel free to reach out for any requests or queries."
    />
    <meta
    name="keywords"
    content="visitor check in software, visitor control, access cloud solution"
    />
    <link rel="canonical" href="https://hipla.io/get-started" />
  </Head>

    <Main>
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={7} style={{marginLeft:"20%",backgroundColor:"#FFFFFF"}}>
            <Heading>You're 1-step away from a smarter workspace.</Heading>
            <Description>
              Get in touch to start leveraging our Access and Vision cloud
              solutions. Feel free to reach out for any requests or queries
            </Description>
            <br />
            <br />
            {/* <Description>
              Get instant access to a solution trusted by
            </Description> */}

            {/* <BrandsRow>
              {BRANDS.map((item, index) => (
                <Col>
                  <Fade bottom cascade>
                    <Image
                      src={item}
                      width="auto"
                      height="40px"
                      style={{
                        marginBottom: 30,
                      }}
                    />
                  </Fade>
                </Col>
              ))}
            </BrandsRow> */}
          </Col>
          <Col xs={12} md={7} style={{display:"flex" ,marginTop:"5%",marginLeft:"19%"}}>
            {ACTION_CONTENT.map((item) => (
              <Link href={item.action.url}>
                <StyledCard>
                  <div className="left">
                    <StyledImage src={item.icon} />
                  </div>

                  <div className="right">
                    <CardHeading>{item.title}</CardHeading>
                    <CardDescripton>{item.description}</CardDescripton>
                    <CardAction>
                      {item.action.title} <Arrow />
                    </CardAction>
                  </div>
                </StyledCard>
              </Link>
            ))}
          </Col>
          <Row>
          <div>
      <TextCenter>
        <H1>Trusted by top brands</H1>
        <BrandsRow>
          {BRANDS.map((item, index) => (
            <Col>
              <Fade bottom cascade>
                <Image src={item} width="auto" height="60px"/>
              </Fade>
            </Col>
          ))}
        </BrandsRow>
      </TextCenter>
    </div>
          </Row>
        </Row>
      </Container>
    </Main>
    </>
  );
};

export default GetStarted;

const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
`;
const H1= styled.h1`
 font-size:25px;
`;

const Main = styled.div`
  background-color: ${colors.bg};
  padding-top: 100px;
  padding-bottom: 100px;
  margin-left:6%;
  margin-right:6%;
`;

const Heading = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 64px;
  color: #2E59A8;
  margin-left:5%;
`;

const Description = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
text-align: center;
color: #333333;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  border: 2px solid ${colors.border};
  border-radius: 20px !important;
  padding: 20px 25px !important;
  width: 100%;
  height: 105%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.3s;
  text-align: left;
  z-index: 10;
  transition-duration: 0.2s;
  display: flex !important;
  flex-direction: col !important;
  justify-content: flex-start !important;
  align-items: center !important;
  margin-left:4%;

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.2s;
    border: 1px solid ${colors.primary};
  }

  .left {
    width: auto;
    margin-right: 20px;
  }

  .right {
    width: auto;
  }
`;

const StyledImage = styled(Image)`
  height: 90px !important;
`;

const CardHeading = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #2E59A8;
text-align: center;
`;

const CardDescripton = styled.p`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-bottom: 5px;
  text-align:center;
`;

const CardAction = styled.p`
  color: ${colors.primary};
  margin-bottom: 0;
  margin-top:4%;
`;

const Arrow = styled(CgArrowLongRight)`
  margin-left: 5px;
  font-size: 18px;
`;

const BrandsRow = styled(Row)`
  margin-top: 40px;
  margin-bottom: 40px;
`;
