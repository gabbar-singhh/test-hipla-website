import React, { useEffect } from "react";
import colors from "../../config/colors";
import styled from "styled-components";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Fade } from "react-reveal";

const FeaturesList = ({ data, isTwoGrids = false }) => {
  useEffect(() => {
    // if (scrollToElement) {
    //   scroller.scrollTo(scrollToElement, {
    //     duration: 800,
    //     delay: 0,
    //     smooth: "easeInOutQuart",
    //   });
    // }
  }, []);

  return (
    <>
      <a id="first"></a>
      {(() => {
        return data.map((feature, index) => {
          return (
            <Container>
              {index % 2 === 0 ? (
                <Holder>
                  <StyledRow className="align-items-center justify-content-between">
                    <Col xs={12} md={isTwoGrids ? 6 : 7}>
                      <Fade bottom>
                        <Image
                          src={feature.imageURL}
                          width="100%"
                          height="auto"
                        />
                      </Fade>
                    </Col>

                    <Col xs={12} md={isTwoGrids ? 6 : 5}>
                      <Fade bottom>
                        <Heading>{feature.title}</Heading>
                      </Fade>
                      <Fade bottom>
                        <Description>{feature.description}</Description>
                      </Fade>
                      <ListHolder isTwoGrids={isTwoGrids}>
                        {feature.list.map((item) => (
                          <Fade bottom>
                            <li>
                              <Tick src={"/vectors/tick.svg"} />
                              <FeatureText>{item}</FeatureText>
                            </li>
                          </Fade>
                        ))}
                      </ListHolder>
                    </Col>
                  </StyledRow>
                  <a id={`${feature.value}`}></a>
                </Holder>
              ) : (
                <Holder>
                  <StyledRow className="align-items-center justify-content-between">
                    <Col
                      xs={12}
                      md={isTwoGrids ? 6 : 5}
                      className="order-2 order-md-1"
                    >
                      <Fade bottom>
                        <Heading>{feature.title}</Heading>
                      </Fade>
                      <Fade bottom>
                        <Description>{feature.description}</Description>
                      </Fade>

                      <ListHolder isTwoGrids={isTwoGrids}>
                        {feature.list.map((item) => (
                          <Fade bottom>
                            <li>
                              <Tick src={"/vectors/tick.svg"} />
                              <FeatureText>{item}</FeatureText>
                            </li>
                          </Fade>
                        ))}
                      </ListHolder>
                    </Col>

                    <Col
                      xs={12}
                      md={isTwoGrids ? 6 : 7}
                      className="order-1 order-md-2"
                    >
                      <Fade bottom>
                        <Image
                          src={feature.imageURL}
                          width="100%"
                          height="auto"
                        />
                      </Fade>
                    </Col>
                  </StyledRow>
                  <a id={`${feature.value}`}></a>
                </Holder>
              )}
            </Container>
          );
        });
      })()}
    </>
  );
};

export default FeaturesList;

FeaturesList.getInitialProps = ({ query }) => {
  return { url: { query } };
};

const Heading = styled.h4`
  color: #2e59a8;
  font-weight: 700;

  @media only screen and (max-width: 767px) {
    margin-top: 30px;
  }
`;

const Description = styled.p`
  color: ${colors.textSecondary};
  margin-bottom: 25px;
  font-size: 18px;
`;

const ListHolder = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;

  li {
    color: ${colors.textSecondary};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    ${(props) =>
      props.isTwoGrids &&
      `
      margin-bottom: 10px;
      margin-right: 15px;
    `}
  }

  ${(props) =>
    props.isTwoGrids &&
    `
      display: grid;
      grid-template-rows: repeat(5, min-content);
      grid-auto-flow: column;
      grid-gap: 10px;

      @media only screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
      }
  `}
`;

const Holder = styled.div`
  padding-bottom: 100px;
`;

const StyledRow = styled(Row)``;

const Tick = styled(Image)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: block;
`;

const FeatureText = styled.p`
  display: block;
  width: calc(100% - 20px);
  margin-bottom: 0;
  line-height: 1.3;
`;
