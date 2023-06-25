import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from "react-reveal";

// import SATTVA from "@/public/images/sattva.png";
import APN from "../../../public/images/apn.png";
import WRITER from "../../../public/images/writer.png";
import YES from "../../../public/images/yes.png";
import AMAZON from "../../../public/images/amazon.png";
import LG from "../../../public/images/lg.png";
import PRESTIGE from "../../../public/images/prestige.png";
import AIPL from "../../../public/images/aipl.png";
import WHITE from "../../../public/images/white.png";
import FREE from "../../../public/images/freeman.png";
import MC from "../../../public/images/mc.png";
import SIMPLE from "../../../public/images/simple.png";
import KAPTURE from "../../../public/images/kapture.png";
import BREAD from "../../../public/images/bread.png";
import DPS from "../../../public/images/dps.png";
import PEOPLE from "../../../public/images/people.png";
import VEHERE from "../../../public/images/vehere.png";
import { colors } from "@/config";

const BRANDS = [
  "/images/aipl.png",
  "/images/prestige.png",
  "/images/writer.png",
  "/images/yes.png",
  "/images/amazon.png",
  "/images/lg.png",
  "/images/sattva.png",
  "/images/white.png",
  "/images/mc.png",
  "/images/simple.png",
  "/images/dps.png",
  "/images/apn.png",
  "/images/vehere.png",
  "/images/people.png",
  "/images/freeman.png",
  "/images/bread.png",
  "/images/kapture.png",
];

const Brands = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      <TextCenter>
        <Heading>We've Worked with Top Brands</Heading>
        <BrandsRow>
          {BRANDS.map((item, index) => (
            <Col>
              <Fade bottom cascade>
                <Image
                  src={item}
                  width="auto"
                  alt="brands-hipla"
                  height="65px"
                  lineHeight="5px"
                />
              </Fade>
            </Col>
          ))}
        </BrandsRow>
      </TextCenter>
    </div>
  );
};

export default Brands;

const StyledContainer = styled(Container)`
  position: relative;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;

  ${(props) =>
    props.isright &&
    `
    margin-left: auto;
    margin-right: 0;
    padding-right: 0;
  `}
`;

const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 64px;
  color: #2e59a8;
`;

const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
`;

const BrandsRow = styled(Row)`
  margin-top: 40px;
  margin-bottom: 40px;
`;
