import React from "react";
import styled from "styled-components";
import { Card, Image } from "react-bootstrap";
import colors from "../../config/colors";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Fade } from "react-reveal";
import Link from "next/link";

const ServiceCard = ({ icon, title, description, smallCard = false, href }) => {
  return (
    <Link href={href}>
      <StyledCard sm={smallCard}>
        {icon && (
          <Fade bottom>
            <IconHolder>
              <Icon src={icon} alt="icon-logo-hipla"/>
            </IconHolder>
          </Fade>
        )}
        <Fade bottom>
          <Heading>{title}</Heading>
        </Fade>
        <Fade bottom>
          {!smallCard && <Description>{description}</Description>}
        </Fade>

        <StyledArrow />
      </StyledCard>
    </Link>
  );
};

export default ServiceCard;

const StyledCard = styled(Card)`
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  border: 1px solid ${colors.border};
  border-radius: 4px;
  padding: 25px;
  padding-bottom: 30px;
  width: 96%;
  height: 93%;
  margin-bottom: 5px;
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
    props.sm &&
    `
    height: 85%;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  `};
`;

const Heading = styled.h3`
  font-size: 19px;
  color: #2E59A8;
  font-weight: 700;
  line-height: 1.4;
  width: 80%;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
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

const Icon = styled(Image)`
  height: 40px;
  width: auto;
`;
