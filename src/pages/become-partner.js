import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { colors } from "../config";
import { Button } from "../components/Overrides";

const BecomePartner = () => {
  return (
    <Holder>
      <Container>
        <Heading>Partner with Hipla</Heading>
        <Description>
          We partner with the best, to bring you powerful solutions.
        </Description>
      </Container>

      <Row>
        <Col xs={12} md={6}>
          <Card
            style={{
              backgroundImage: `url(/images/technology-partner.png)`,
            }}
          >
            <Content>
              <Title>Technology Partner</Title>
              <Text>
                Integrate your software/hardware with Hipla. Build holistic
                building solutions.
              </Text>

              <div>
                <Button>Contact Sales</Button>
              </div>
            </Content>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card
            style={{
              backgroundImage: `url(/images/channel-partner.png)`,
            }}
          >
            <Content>
              <Title>Channel Partner</Title>
              <Text>
                Partner and provide our solutions through your network.
              </Text>

              <div>
                <Button>Talk with team</Button>
              </div>
            </Content>
          </Card>
        </Col>
      </Row>
    </Holder>
  );
};

export default BecomePartner;

const Holder = styled.div`
  padding-top: 80px;
`;

const Heading = styled.h3`
  color: ${colors.textPrimary};
  font-size: 30px;
  line-height: 1.5;
  font-weight: 700;
`;

const Description = styled.p`
  color: ${colors.textSecondary};
  font-size: 18px;
  margin-bottom: 80px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  left: 60px;
  bottom: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 60px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  cursor: pointer;

  div {
    display: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);

    div {
      display: block;
    }
  }
`;

const Title = styled.h4`
  color: ${colors.white};
  font-size: 22px;
  font-weight: 700;
`;

const Text = styled.p`
  color: ${colors.white};
  margin-top: 5px;
  font-size: 18px;
`;
