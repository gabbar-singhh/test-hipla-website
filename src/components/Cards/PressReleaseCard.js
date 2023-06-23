import React from "react";
import styled from "styled-components";
import { Card, Image } from "react-bootstrap";
import colors from "../../config/colors";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Fade } from "react-reveal";
import Link from "next/link";

const PressReleaseCard = ({
  image,
  quote,
  width = "100%",
  title,
  description,
  url,
  index,
  company,
}) => {
  return (
    <A href={url} target="_blank">
      <StyledCard
        style={{
          width,
        }}
        index={index}
      >
        {image && (
          <Fade bottom>
            <IconHolder>
              <Image src={image} width="100%" alt="image-logo-hipla"/>
            </IconHolder>
          </Fade>
        )}

        {company && (
          <Fade bottom>
            <Tag>{company}</Tag>
          </Fade>
        )}

        {title && (
          <Fade bottom>
            <Heading>{title}</Heading>
          </Fade>
        )}

        {description && (
          <Fade bottom>
            <Description>{description}</Description>
          </Fade>
        )}

        <StyledArrow />
      </StyledCard>
    </A>
  );
};

export default PressReleaseCard;

const A = styled.a`
  text-decoration: none !important;
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  border: 1px solid ${colors.border};
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 30px;
  width: 96%;
  height: 93%;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.3s;
  text-align: left;
  z-index: 10;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
    z-index: 20;
    box-shadow: 0 0 2rem rgb(0 0 0 / 20%);
  }

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

const Heading = styled.h3`
  font-size: 17px;
  color: ${colors.textPrimary};
  font-weight: 700;
  line-height: 1.4;
  width: 90%;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  width: 90%;
  margin: 10px auto;
`;

const StyledArrow = styled(HiOutlineArrowNarrowRight)`
  color: ${colors.textPrimary};
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 28px;
`;

const IconHolder = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const Quote = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  font-style: italic;
  font-weight: 300;
  margin-top: 20px;
  margin-left: 7%;
  margin-right: 7%;
`;

const Tag = styled.p`
  font-size: 14px;
  color: ${colors.primary};
  width: 90%;
  margin: 0 auto;
  margin-bottom: 10px;
`;
