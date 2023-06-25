import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Container } from "../Overrides";

import { colors } from "../../config";

const CoreValues = () => {
  return (
    <Holder>
      <StyledContainer>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Heading>Fostering innovation for tomorrow's buildings.</Heading>

            <Description>
              The Hipla brand and it's solutions are driven by 3-core
              principles:
            </Description>

            <List>
              <Fade bottom>
                <li>
                  <Tick src={"/vectors/tick.svg"} alt="tick-logo" />
                  <div>
                    <Title>Think Big</Title>
                    <p className="p-0">
                      To raise the bar for how a billion+ people interact with
                      their workplace - Think Big, build the unforgettable.
                    </p>
                  </div>
                </li>
                <li>
                  <Tick src={"/vectors/tick.svg"} alt="tick-logo" />

                  <div>
                    <Title>Work smart</Title>
                    <p className="p-0">
                      We hustle to give our community the best. Following
                      standard management and task charts just doesn't cut it.
                    </p>
                  </div>
                </li>
                <li>
                  <Tick src={"/vectors/tick.svg"} alt="tick-logo" />

                  <div>
                    <Title>Break things along the way</Title>
                    <p className="p-0">
                      Walking along unchartered woods, leave a trail of cut
                      branches. We encourage our team to swing, break, learn and
                      innovate.{" "}
                    </p>
                  </div>
                </li>
              </Fade>
            </List>
          </Col>

          <Col xs={12} md={6}>
            <Image
              src={"/gif/BANNER_2info.gif"}
              width="80%"
              alt="BANNER_2info-logo-hipla"
            />
          </Col>
        </Row>
      </StyledContainer>
    </Holder>
  );
};

export default CoreValues;

const Holder = styled.div`
  background-color: ${colors.bg};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 70px;
  padding-top: 100px;
  position: relative;
`;

const Heading = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: #2e59a8;
`;

const Description = styled.p`
  color: ${colors.textSecondary};
  font-size: 16px;
`;

const List = styled.ul`
  margin-left: 0;
  padding-left: 0px;
  list-style: none;
  color: ${colors.textSecondary};
  margin-top: 40px;

  li {
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;

    h5 {
      color: ${colors.textPrimary};
      line-height: 1;
    }

    p {
      font-size: 15px;
    }
  }
`;

const Tick = styled(Image)`
  height: 20px;
  width: 20px;
  margin-right: 20px;
`;

const StyledContainer = styled(Container)`
  position: relative;

  ${(props) =>
    props.isright &&
    `
    margin-left: auto;
    margin-right: 0;
    padding-right: 0;
  `}
`;

const Title = styled.h5`
  font-size: 17px;
  font-weight: 700;
`;
