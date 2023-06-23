import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";
import { Container } from "../Overrides";
import { Fade } from "react-reveal";
// import  download  from "../../public/vectors/download.svg";

const TabsView = () => {
  // const [activeTab, setActiveTab] = useState("office");

  // const _onTabChange = (value) => setActiveTab(value);

  return (
    <Holder>
      <Container>
        <div class="container-fluid" style={{ paddingTop: "5%" }}>
          <div>
            <Fade bottom>
              <Heading>
                Strategically curated solutions to match your workflow
              </Heading>
            </Fade>
          </div>
          <div
            class="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "8%",
            }}
          >
            <div>
              <Col>
                <Col xs={12} md={12}>
                  <Fade bottom>
                    <Tab style={{ marginRight: "40%", marginLeft: "-3%" }}>
                      <Fade bottom>
                        <StyledImage
                          src={
                            "../public/vectors/smart-office-bcc8d2fd1b3f37bfa62031dd0dbdee2d.svg"
                          }
                          alt="smart-office-logo"
                          height="34px"
                        />
                        <p
                          style={{
                            fontSize: 28,
                            fontWeight: 600,
                            color: "#2D59A8",
                            marginTop: "4%",
                          }}
                        >
                          Smart Office
                        </p>
                      </Fade>
                    </Tab>
                    <Description>
                      Let visitors, employees and contractors <br></br>interact
                      with your brand seamlessly.
                    </Description>
                  </Fade>

                  <List style={{ marginLeft: "-5%" }}>
                    <Fade bottom>
                      <li>
                        <Tick
                          src={"../public/vectors/iconT.svg"}
                          alt="smart-office-logo"
                        />
                        Improve meeting room effectively
                      </li>
                      <li>
                        <Tick
                          src={"../public/vectors/iconT.svg"}
                          alt="smart-office-logo"
                        />
                        Increase brand visibility, with customized forms and
                        kiosks
                      </li>
                      <li>
                        <Tick
                          src={"../public/vectors/iconT.svg"}
                          alt="smart-office-logo"
                        />
                        Increase efficiency by cutting attendance<br></br> and
                        check-in times by 90%
                      </li>
                    </Fade>
                  </List>
                </Col>
              </Col>
            </div>
            {/* </TabContent>

        <TabContent active={activeTab === "factories"}> */}
            <div>
              <Row>
                <Col xs={12} md={12}>
                  <Fade bottom>
                    <Tab1>
                      <Fade bottom>
                        <StyledImage
                          src={
                            "../public/vectors/smart-office-bcc8d2fd1b3f37bfa62031dd0dbdee2d.svg"
                          }
                          alt="smart-office-logo"
                          height="30px"
                        />
                        <p
                          style={{
                            fontSize: 28,
                            fontWeight: 600,
                            color: "#2D59A8",
                            marginTop: "5%",
                          }}
                        >
                          Smart Factories
                        </p>
                      </Fade>
                    </Tab1>
                    <Description1>Safer is smarter.</Description1>
                  </Fade>

                  <List1>
                    <Fade bottom>
                      <li>
                        <Tick
                          src={"../public/vectors/iconT.svg"}
                          alt="smart-office-logo"
                        />
                        Predict and prevent any safety hazards.
                      </li>
                      <li>
                        <Tick
                          src={"../public/vectors/iconT.svg"}
                          alt="smart-office-logo"
                        />
                        Minimize downtime.
                      </li>
                      <li>
                        <Tick
                          src={"../public/vectors/iconT.svg"}
                          alt="smart-office-logo"
                        />
                        Track SOP compliance.
                      </li>
                    </Fade>
                  </List1>
                </Col>
              </Row>
            </div>
          </div>
          {/* </TabContent> */}
        </div>
      </Container>
    </Holder>
  );
};

export default TabsView;

const Holder = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;
const Heading = styled.h3`
  color: ${colors.textPrimary};
  margin-left: 20%;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 54px;
  @media only screen and (max-width: 1500px) {
    margin-left: 15%;
  }
  @media only screen and (max-width: 767px) {
    font-size: 26px;
    text-align: start;
    line-height: 40px;
    margin-left: 0%;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  margin: 40px 0 40px 0;
`;

const Tab = styled.div`
  margin-right: 30px;
  color: ${colors.textPrimary};
  font-size: 17px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid transparent;
  @media only screen and (max-width: 767px) {
    margin: 1%;
  }

  ${(props) =>
    props.active &&
    `
    color: ${colors.primary};
    background-color: ${colors.bg};
    border: 1px solid ${colors.primary};
  `};
`;
const Tab1 = styled.div`
  margin-right: 30px;
  margin-left: 26%;
  color: ${colors.textPrimary};
  font-size: 17px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid transparent;
  @media only screen and (max-width: 1500px) {
    margin-left: -20%;
  }
  @media only screen and (max-width: 767px) {
    margin-left: -5%;
  }

  ${(props) =>
    props.active &&
    `
    color: ${colors.primary};
    background-color: ${colors.bg};
    border: 1px solid ${colors.primary};
  `};
`;

const StyledImage = styled(Image)`
  margin-right: 10px;
  margin-bottom: 5px;
`;

const TabContent = styled.div`
  display: none;
  padding-left: 20px;

  ${(props) =>
    props.active &&
    `
    display: block;
  `}
`;

const Description = styled.p`
  color: #333333;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
`;
const Description1 = styled.p`
  color: #333333;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin-left: 30%;
  @media only screen and (max-width: 1500px) {
    margin-left: -15%;
  }
  @media only screen and (max-width: 767px) {
    margin-left: 8%;
  }
`;

const List = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
`;
const List1 = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-left: 20%;
  li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 1500px) {
    margin-left: -25%;
  }
  @media only screen and (max-width: 767px) {
    margin-left: 1%;
  }
`;

const Tick = styled(Image)`
  height: 48px;
  width: 48px;
  margin-right: 10px;
`;
