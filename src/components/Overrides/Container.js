import styled from "styled-components";

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;

const StyledContainer = styled.div`
  width: 85% !important;
  margin: 0 auto;
`;
