import styled from "styled-components";
import colors from "../../config/colors";
import Link from "next/link";

const NavLink = ({ href, children }) => (
  <StyledNextLink href={href}>
    <A>{children}</A>
  </StyledNextLink>
);

export default NavLink;

const StyledNextLink = styled(Link)`
  color: ${colors.primary};
`;

const A = styled.a`
  color: ${colors.primary};
  cursor: pointer;
`;
