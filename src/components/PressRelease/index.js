import React from "react";
import styled from "styled-components";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import { colors } from "../../config";
import PressReleaseCard from "../Cards/PressReleaseCard";
import Head from "next/head";

const RELEASES = [
  {
    company: "Tech Circle",
    image: "/images/angelinvestors.jpeg",
    title:
      "A little funding goes a long way, a look at three startups to watch",
    description:
      "We typically cover larger rounds of funding, but I came across three recently launched companies that despite their small raises were worth noting for their interesting approaches.",
    url: "https://www.techcircle.in/2020/06/03/exclusive-iot-startup-hipla-launches-contact-tracing-solution-contatrack-ai-raises-seed-funding",
  },
  {
    company: "VC Circle",
    image: "/images/vccircle.jpeg",
    title:
      "Exclusive: IoT startup Hipla launches contact tracing solution Contatrack.ai, raises seed funding",
    description:
      "At a time when companies across the world have begun to open offices in a staggered manner amid the Covid-19 crisis, Singapore and Kolkata headquartered internet of things (IoT) company Hipla Technologies has launched a solution to help them remain safe.",
    url: "https://www.vccircle.com/building-automation-firm-hipla-gets-angel-funding-from-hnis/#:~:text=Hipla%20Technologies%20Pte%20Ltd%2C%20which,individuals%20from%20India%20and%20Singapore.&text=and%20further%2C%20grow%20its%20products%20in%20office%20automation%20space.",
  },
  {
    company: "Crushbase",
    image: "/images/crunchbase.jpeg",
    title:
      "Building automation firm Hipla gets angel Building automation firm Hipla gets angel funding from HNIs funding from HNIs",
    description:
      "Hipla Technologies Pte Ltd, which offers SaaS-based office automation solutions, has raised Rs 2.6 crore ($344,000) in funding from a clutch of wealthy individuals from India and Singapore",
    url: "https://news.crunchbase.com/news/a-little-funding-goes-a-long-way-a-look-at-three-startups-to-watch/",
  },
];

const PressRelease = () => {
  return (
    <>
      <Head>
        <title>Press Releases - Hipla</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta
          name="description"
          content="Press releases, news, information, resources- Hipla"
        />
        <meta
        name="keywords"
        content="Press release, news, press release hipla"
        />
        <link rel="canonical" href="https://hipla.io/resources/press-releases" />
      </Head>

    <StyledContainer>
      <TextCenter>
        <Heading>Our News and press coverage</Heading>

        <Description>
          Keep up-to-date with our releases and news presence
        </Description>
      </TextCenter>

      <Row className="align-items-start justify-content-between">
        {RELEASES.map((item, index) => (
          <Col xs={12} md={4}>
            <PressReleaseCard
              index={index + 1}
              image={item.image}
              title={item.title}
              description={item.description}
              url={item.url}
              company={item.company}
            />
          </Col>
        ))}
      </Row>
    </StyledContainer>
    </>
  );
};

export default PressRelease;

const StyledContainer = styled(Container)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 80px;
`;

const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Heading = styled.h3`
  color: ${colors.textPrimary};
  font-size: 35px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${colors.textSecondary};
`;

const FocusRow = styled(Row)`
  margin-top: 80px;
  margin-bottom: 130px;
`;

const FocusHeading = styled.h4`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.textPrimary};
  margin-top: 25px;
  margin-bottom: 25px;
`;

const FocusDescription = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  margin-bottom: 25px;
`;

const BrandsTitle = styled.h5`
  font-weight: 300;
  font-size: 30px;
  margin-top: 100px;
  margin-bottom: 40px;
`;
