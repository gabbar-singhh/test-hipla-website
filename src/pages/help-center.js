import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { colors } from "../config";
import { Container, Input } from "../components/Overrides";

const HelpCenterPage = () => {
  return (
    <>
      <Hero>
        <Heading>Search what troubles you</Heading>
        <SearchInput>
          <StyledInput
            size="sm"
            type="text"
            placeholder="Start entering your problem..."
          />
        </SearchInput>

        <Text>
          If your problem is not found. Please get in touch with us from Contact
          Us
        </Text>
      </Hero>

      <Container>
        <StyledRow>
          <Col xs={12} md={4}>
            <Card>
              <img src={"/vectors/contact.svg"} className="img-x1 img-fluid" />
              <p className="line-x1 m-0">
                For any sales query, get in touch with us from <br />
                <span style={{ color: "#2D59A8", fontWeight: "bold" }}>
                  Contact sales team
                </span>
                page.
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <img src={"/vectors/contact.svg"} className="img-x1 img-fluid" />
              <p className="line-x1 m-0">
                For any press related query, write to us on{" "}
                <span style={{ color: "#2D59A8", fontWeight: "bold" }}>
                  press@hipla.io
                </span>
              </p>
            </Card>
          </Col>
        </StyledRow>
      </Container>
    </>
  );
};

export default HelpCenterPage;

const Hero = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.bg};
  padding: 80px 40px;
  text-align: center;
`;

const Heading = styled.h3`
  color: ${colors.textPrimary};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: ${colors.textSecondary};
  font-size: 16px;
  margin-top: 20px;
`;

const SearchInput = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 5px 15px;
  box-shadow: 0 0 2rem rgb(0 0 0 / 20%);
  max-width: 550px;
  margin: 0 auto;
`;

const StyledInput = styled(Input)`
  border: 0;
  margin: 0;
  padding: 0;
  padding-top: 8px;
  padding-bottom: 8px;

  &:active {
    box-shadow: none;
    outline: 0;
  }
`;

const StyledRow = styled(Row)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 4px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
