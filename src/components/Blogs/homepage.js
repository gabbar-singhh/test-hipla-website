import React from "react";
import styled from "styled-components";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import { colors } from "../../config";
import BlogCard from "../Cards/BlogCard";

const CASE_STUDIES = [
  {
    image: "/vectors/office2.svg",
    title:
      "AIPL uses Hipla to put smart office, both internally and externally.",
    tag: "SMART OFFICES",
    href: "12",
  },
  {
    image: "/vectors/office2.svg",
    title:
      "AIPL uses Hipla to put smart office, both internally and externally.",
    tag: "SMART OFFICES",
    href: "12",
  },
  {
    image: "/vectors/office2.svg",
    title:
      "AIPL uses Hipla to put smart office, both internally and externally.",
    tag: "SMART OFFICES",
    href: "12",
  },
  {
    image: "/vectors/office2.svg",
    title:
      "AIPL uses Hipla to put smart office, both internally and externally.",
    tag: "SMART OFFICES",
    href: "12",
  },
  {
    image: "/vectors/office2.svg",
    title:
      "AIPL uses Hipla to put smart office, both internally and externally.",
    tag: "SMART OFFICES",
    href: "12",
  },
  {
    image: "/vectors/office2.svg",
    title:
      "AIPL uses Hipla to put smart office, both internally and externally.",
    tag: "SMART OFFICES",
    href: "12",
  },
];

const BRANDS = [
  "/vectors/featured2.svg",
  "/vectors/featured3.svg",
  "/vectors/featured1.svg",
  "/vectors/featured5.svg",
  "/vectors/featured4.svg",
];

const Homepage = () => {
  return (
    <StyledContainer>
      <TextCenter>
        <Heading>Welcome to our Blog</Heading>

        <Description>We bring you relevant high-quality content.</Description>
      </TextCenter>

      <FocusRow className="align-items-center justify-content-between">
        <Col xs={12} md={6}>
          <Image src={"/vectors/office1.svg"} alt="office1-logo-hipla" />
        </Col>

        <Col xs={12} md={5}>
          <Tag>SMART OFFICES</Tag>

          <FocusHeading>
            AIPL uses Hipla to put smart office, both internally and externally.
          </FocusHeading>

          <FocusDescription>
            “You made it so simple. My new site is so much faster and easier to
            work with than my old site. I just choose the page, make the change
            and click save.”
          </FocusDescription>

          <Button>Read Full Post</Button>
        </Col>
      </FocusRow>

      <Row className="align-items-start justify-content-between">
        {CASE_STUDIES.map((item, index) => (
          <Col xs={12} md={4}>
            <BlogCard
              image={item.image}
              tag={item.tag}
              href={item.href}
              title={item.title}
              index={index + 1}
            />
          </Col>
        ))}
      </Row>

      <Container>
        <TextCenter>
          <BrandsTitle>We power the brands that power the world</BrandsTitle>

          <Row className="align-items-center justify-content-between">
            {BRANDS.map((item) => (
              <Col>
                <Image src={item} height={70} alt="brands-logo-hipla" />
              </Col>
            ))}
          </Row>
        </TextCenter>
      </Container>
    </StyledContainer>
  );
};

export default Homepage;

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

const Tag = styled.p`
  color: ${colors.primary};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;
