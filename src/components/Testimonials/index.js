import React from "react";
import styled from "styled-components";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import { colors } from "../../config";
import TestimonialCard from "../Cards/TestimonialCard";
import Head from "next/head";

const TESTIMONIALS = [
  {
    image: "/images/lg-logo.png",
    text:
      "We implemented Contatrack.ai in our corporate offices and plant - the Hipla team was very supportive throughout the process, and went the extra mile to deliver custom enhancement unique to our organisational needs at every step to ensure that our workspaces are operating at their highest levels of safety. We are continually impressed with their vision and commitment to understanding and delivering client needs, and are exploring new implementation opportunities with them as well.",
    by: {
      name: "AJAY RAMBAL",
      designation: "Head of IT, LG Electronics India",
    },
    about:
      "Hipla eco system helps AIPL to setup their smart workplace. Hipla eco system helps AIPL to setup their smart workplace.",
  },
  {
    image: "/images/vehere-logo.png",
    text:
      "We at Vehere are immensely pleased with The Visitor Management and Smart Office system from Hipla. It has made a substantial impact within our company on optimizing time, stepping up security, reviewing the number of meetings with exact time logs. It is like a keyless entry with all the required information and ingredients, working as an absolute customer delight and creating a wow experience for our visitors in an automated architecture.",
    by: {
      name: "Vijeta Rakesh",
      designation: "Procurement Manager, Vehere Interactive",
    },
    about:
      "Hipla eco system helps AIPL to setup their smart workplace. Hipla eco system helps AIPL to setup their smart workplace.",
  },
  {
    image: "/images/writer-logo.png",
    text:
      "Hipla team was amazing, patient and cooperative and the way they communicated, managed and ensured completion of the project is commendable. This is a truly appreciating engagement and we are content with you and your team and the way they managed to get things onboard. I am thankful to all the team Hipla to have spent time for a successful delivery at WSG.",
    by: {
      name: "Swapnil S Bagul",
      designation: "CTO, Writer",
    },
    about:
      "Hipla eco system helps AIPL to setup their smart workplace. Hipla eco system helps AIPL to setup their smart workplace.",
  },
];

const Testimonials = () => {
  return (
    <>
    <Head>
    <title>Testimonials - Hipla</title>
    <link rel="icon" href="/favicon.jpg" />
    <meta
      name="description"
      content="Hipla solutions highlighting customer journey experience for our visitor management system, meeting room management system and digital access control system solutions. Find your industry customers to know more!"
    />
    <meta
    name="keywords"
    content="testimonial, workplace security solutions, hipla customers"
    />
    <link rel="canonical" href="https://hipla.io/testimonials" />
  </Head>

    <StyledContainer>
      <TextCenter>
        <Heading>What our customers are saying about Hipla</Heading>
        <Description>
          Explore how our partners have implemented our product suite.
        </Description>
      </TextCenter>

      <Row className="align-items-start justify-content-between mt-5 pt-5">
        {TESTIMONIALS.map((item, index) => (
          <Col xs={12} md={4}>
            <TestimonialCard
              image={item.image}
              quote={item.text}
              byWho={item.by.name}
              designation={item.by.designation}
              index={index + 1}
            />
          </Col>
        ))}
      </Row>
    </StyledContainer>
    </>
  );
};

export default Testimonials;

const StyledContainer = styled(Container)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 80px;
`;

const TextCenter = styled.div`
  text-align: center;
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
