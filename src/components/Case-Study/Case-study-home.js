import React from "react";
import styled from "styled-components";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import { colors } from "../../config";
import BlogCard from "../Cards/BlogCard";
import Head from "next/head";

const CASE_STUDIES = [
  {
    image: "/images/successstories.png",
    quote:
      "Hipla’s Hotdesking solution helps India’s largest largest Marketing agency bring its workforce back to office",
    href: "0",
    title: "Hotdesking Case study",
    downloadLink: "/images/Hotdesking_case_study_Hipla.pdf",
    downloadFileName: "Hotdesking_case_study_Hipla",
  },

  {
    image: "/images/FR.jpeg",
    quote:
      "Check-in solution helps india's leading consumer & enterprise tool brand to digitize their check-in experience",
    href: "0",
    title: "Facial recognition Case study",
    downloadLink: "/images/FR case study.pdf",
    downloadFileName: "FR case study",
  },
];

const CaseStudy = () => {
  return (
    <>
    <Head>
    <title>Success Stories: Creating Stylish Workplace Experiences |HIPLA</title>
    <link rel="icon" href="/favicon.jpg" />
    <meta
      name="description"
      content="Learn how leading brands have made measurable improvements in their workspace using Hipla Smart Apps to manage your building facilities."
    />
    <meta
    name="keywords"
    content="customer case study, hotdesking case study, facial recognition case study"
    />
    <link rel="canonical" href="https://hipla.io/success-stories" />
  </Head>

    <StyledContainer>
      <TextCenter>
        <Heading>Success Stories</Heading>
        <Description>
          Take a look into how leading brands have made measurable improvements
          in their workspace.
        </Description>
      </TextCenter>
      <Row className="success" style={{justifyContent:"space-around"}}>
        {CASE_STUDIES.map((item, index) => (
          <Col xs={20} md={4}>
            <BlogCard
              quote={item.quote}
              image={item.image}
              title={item.title}
              downloadLink={item.downloadLink}
              downloadFileName={item.downloadFileName}
              button={true}
            />
          </Col>
        ))}
      </Row>
    </StyledContainer>\
    </>
  );
};

export default CaseStudy;

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
