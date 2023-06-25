import { Col, Container, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";

const FocusFeatures = ({ data }) => (
  <StyledContainer>
    <Row className="justify-content-between">
      {data.map((item) => (
        <StyledCol xs={12} md={4}>
          {item.icon && <StyledImage src={item.icon} />}
          <p>{item.title}</p>
        </StyledCol>
      ))}
    </Row>
  </StyledContainer>
);

export default FocusFeatures;

const StyledContainer = styled(Container)`
  margin-top: 10px;
  margin-bottom: 60px;
`;

const StyledCol = styled(Col)`
  text-align: center;
  margin-bottom: 30px;

  p {
    margin-top: 10px;
    color: ${colors.textSecondary};
  }
`;

const StyledImage = styled(Image)`
  height: 200px;
  width: auto;
  margin-bottom: 10px;
`;
