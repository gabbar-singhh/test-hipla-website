import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
import colors from "../../config/colors";
import ServiceCard from "../Cards/ServiceCard";
import { NavLink as Link, Container } from "../Overrides";
import { CgArrowLongRight } from "react-icons/cg";
import { Fade } from "react-reveal";

const Products = () => {
  return (
    <Holder>
      <StyledContainer>
        <Row>
        <HeadingContainer>
          <Fade bottom>
            <Heading>Product Module</Heading>
            <Description>
            Powerful features built to create unforgettable experiences with our Visitor Management Solution secure your workplace with digital check-in system.
            </Description>
          </Fade>
        </HeadingContainer>

        
          <Col noGutters={true}>
            <Col xs={12} md={12}>
              <ServiceCard
                title="Visitor Management"
                description="Contractors, Visitors & Customers. 5-seconds check-in. Automated notifications and workflows."
                icon={"/vectors/visitor-management.svg"}
                href="/products/access-cloud#first"
              />
            </Col> 
            <Col xs={12} md={12}>
              <ServiceCard
                title="Meeting Room Management"
                description="Master meeting-room bookings, access-sharing and notifications. Easier meeting room occupancy reports and suggestions."
                icon={"/vectors/meeting-management.svg"}
                href="/products/access-cloud#employee-attendance"
              />
            </Col>
            
            <Col xs={12} md={12}>
              <ServiceCard
                 title="Digital Access Control"
                description="Master meeting-room bookings, access-sharing and notifications. Easier meeting room occupancy reports and suggestions."
                icon={"/vectors/meeting-management.svg"}
                href="/products/access-cloud#employee-attendance"
              />
              
            </Col>
            <Fade bottom>
            <LinkHolder>
              <Link href="/products/access-cloud">
                Explore all access cloud features <Arrow />
              </Link>
            </LinkHolder>
          </Fade>
          </Col>
          <Col xs={12} md={6}>
            <Image
             style={{marginTop:"10%"}}
              src={"/gif/visitormanagementsystemsoftware.webp"}
              width="100%"
              alt="visitormanagementsystemsoftware-logo-hipla"
              // height="70%"
            />
          </Col>
        </Row> 
        </StyledContainer>
    </Holder>
  );
};

export default Products;

const Holder = styled.div`
  background-color: ${colors.bg};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 50px;
  padding-top: 10px;
  position: relative;
  display:flex;
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

const List = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  ${(props) =>
    props.isright &&
    `
    padding-right: 0;
    margin-right: 0;
    margin-left: auto;  
  `}
`;

const HeadingContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  color:#4e62a9;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  ${(props) =>
    props.isright &&
    `
    padding-right: 0;
    margin-right: 0;
    margin-left: auto;  
  `}
`;

const Heading = styled.h4`
font-family: 'Poppins';
  display: flex;
  justify-content: center;
  align-items: center;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 64px;
color: #2E59A8;
@media only screen and (max-width:767px)
{
  line-height:40px;
  font-size:26px;
}
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #333333;

`;

const LinkHolder = styled.div`
  margin-top: 20px;
`;

const Arrow = styled(CgArrowLongRight)`
  margin-left: 5px;
  font-size: 18px;
`;
const StyledImage = styled(Image)`
  width: 50%;
  margin-top: 20px;
  position: relative;
  margin-left:600px;
  margin-top:-800px;
  margin-right: 300px;
}
`;