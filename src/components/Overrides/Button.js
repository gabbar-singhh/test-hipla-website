import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";

const Button = ({
  isOutline = false,
  variant = "primary",
  children,
  onClick,
  size = "md",
  disabled = false,
}) => (
  <StyledButton
    onClick={onClick}
    variant={variant}
    isOutline={isOutline}
    size={size}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled(BootstrapButton)`
  border-color: ${colors.secondry};
  color: ${colors.primary} ;
  background-color: #FFFFFF;
  padding: 8px 30px !important;
  text-transform: uppercase !important;
  font-size: 16px;
  margin: 5px 5px !important;
  transition-duration: 0.3s !important;
  border-radius: 10px !important;
  font-weight: 600 !important;
  letter-spacing: 0.3px !important;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.white} !important;
    transition-duration: 0.3s !important;
  }
  @media only screen and (max-width:767px){
    font-size:10px;
  }

  ${(props) =>
    !props.isOutline &&
    `
      background-color: ${colors.primary} !important;
      color: ${colors.white} !important;

      &:hover {
        background-color: transparent !important;
        color: ${colors.primary} !important;
      }
  `}

  ${(props) =>
    props.size === "sm" &&
    `
      padding: 8px 20px;
      margin-left: 0;
  `}
`;
