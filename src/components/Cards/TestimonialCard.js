import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Image } from "react-bootstrap";

import { colors } from "../../config";

const TestimonialCard = ({
  image,
  quote,
  byWho,
  designation,
  index,
  width = "100%",
}) => {
  return (
    <StyledCard
      style={{
        width,
      }}
      index={index}
    >
      {image && (
        <Fade bottom>
          <IconHolder src={image} alt="image-logo-hipla"/>
        </Fade>
      )}

      {quote && (
        <Fade bottom>
          <Quote>{quote}</Quote>
        </Fade>
      )}

      <TestimonialByHolder>
        <TestimonialBy>{byWho}</TestimonialBy>
        <TestimonialByDesignation>{designation}</TestimonialByDesignation>
      </TestimonialByHolder>
    </StyledCard>
  );
};

export default TestimonialCard;

const StyledCard = styled.div`
  padding: 10px;
  padding-bottom: 20px;
  width: 96%;
  height: 96%;
  margin-bottom: 10px;
  text-align: left;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  ${(props) =>
    props.index &&
    props.index % 2 == 0 &&
    `
    @media only screen and (min-width: 767px) {
        margin-top: 40px;
    }
  `};
`;

const IconHolder = styled(Image)`
  border-radius: 20px;
  overflow: hidden;
  width: 120px;
  height: auto;
`;

const Quote = styled.p`
  font-size: 15px;
  color: ${colors.textPrimary};
  font-weight: 300;
  margin-top: 20px;
`;

const TestimonialByHolder = styled.div`
  margin-top: 15px;

  &::before {
    border-top: 1px solid black;
    display: block;
    height: 1px;
    content: " ";
    width: 30px;
    position: relative;
    top: 0.8rem;
  }
`;

const TestimonialBy = styled.p`
  margin-left: 40px;
  color: ${colors.textSecondary};
  margin-bottom: 0;
  font-size: 15px;
  font-weight: 700;
`;

const TestimonialByDesignation = styled.p`
  margin: 0;
  margin-left: 40px;
  font-size: 13px;
  color: ${colors.textSecondary};
`;
