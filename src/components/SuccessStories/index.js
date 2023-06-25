import React from "react";
import styled from "styled-components";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import { colors } from "../../config";
import SuccessStoriesCard from "../Cards/SucessStoriesCard";

const RELEASES = [
  {
    company: "Hotdesking case study.",
    image: "/images/successstrories.png",

    description:
      "Hipla’s Hotdesking solution helps India’s largest largest Marketing agency bring its workforce back to office",
    downloadlink: "/#",
  },
];
const SuccessStories = () => {
  return (
    <StyledContainer>
      <TextCenter>
        <Heading>Success Stories</Heading>
        <Description>
          Take a look into how leading brands have made measurable improvements
          in their workspace.
        </Description>
      </TextCenter>

      <Row className="align-items-start justify-content-between">
        {RELEASES.map((item, index) => (
          <Col xs={8} md={4}>
            <SuccessStoriesCard
              index={index + 1}
              image={item.image}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default SuccessStories;

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
