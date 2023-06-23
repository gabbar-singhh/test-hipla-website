import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from "react-reveal";

// import SATTVA from "../public/images/sattva.png";
// import APN from "../public/images/apn.png";
// import WRITER from "../public/images/writer.png";
// import YES from "../public/images/yes.png";
// import AMAZON from "../public/images/amazon.png";
// import LG from "../public/images/lg.png";
// import PRESTIGE from "../public/images/prestige.png";
// import AIPL from "../public/images/aipl.png";
// import WHITE from "../public/images/white.png";
// import FREE from "../public/images/freeman.png";
// import MC from "../public/images/mc.png";
// import SIMPLE from "../public/images/simple.png";
// import BREAD from "../public/images/bread.png";
// import DPS from "../public/images/dps.png";
// import PEOPLE from "../public/images/people.png";
// import VEHERE from "../public/images/vehere.png";
import { colors } from "../../config";

const BRANDS = [AIPL,PRESTIGE,WRITER,YES,AMAZON, LG,SATTVA,WHITE];
const BRANDS1=[MC,SIMPLE,DPS,APN,VEHERE,PEOPLE,FREE,BREAD]

const Clients = () => {
  return (
    <div>
      <TextCenter>
        <Heading>Trusted by top brands</Heading>
        <Description> Top brands have chosen our Visitor Management System and Meeting Room Management Software to connect digitally with their guests:</Description>
        <BrandsRow>
          {BRANDS.map((item, index) => (
            <Col className="brnd">
              <Fade bottom cascade>
                <Image src={item} width="auto" height="65px" alt="brands-visiter management"/>
              </Fade>
            </Col>
          ))}
          {BRANDS1.map((item, index) => (
            <Col className="brnd1">
              <Fade bottom cascade>
                <Image src={item} width="auto" height="65px" alt="brands-visiter management"/>
              </Fade>
            </Col>
          ))}
        </BrandsRow>
      </TextCenter>
    </div>
  );
};


export default Clients;
const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 10px;
  margin-top: -40px;
  line-height:4;
`;

const Heading = styled.p`
  color: #333333;
  text-transform: uppercase;
  font-size: 16px;
  padding-top: 30px;
  font-weight:200;

  &:before,
  &:after {
    background-color: ${colors.border};
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 40%;
  }

  &:before {
    right: 10px;
    margin-left: -50%;
  }

  &:after {
    left: 10px;
    margin-right: -50%;
  }
`;

const BrandsRow = styled(Row)`
  margin-top: 8px;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    
      float: none;
      width: 100%;
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
