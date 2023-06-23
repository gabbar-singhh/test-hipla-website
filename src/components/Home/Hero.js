import styled from "styled-components";
import colors from "../../config/colors";
import { Image, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { Fade } from "react-reveal";
import { Container as ReactContainer, Button } from "../Overrides";

const Hero = () => {
  return (
    <Holder>
      <div
        className="animatedrow"
        style={{ marginLeft: "8%", marginRight: "2%" }}
      >
        <div class="container-fluid">
          <div className="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Image
                style={{ width: "110%", marginTop: "23%" }}
                src={"../public/gif/animation.webp"}
                alt="animation-logo-hipla"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Fade bottom>
                <StyledImage
                  style={{ width: "100%", marginLeft: "13%" }}
                  src={"../public/gif/animation.webp"}
                  alt="BANNER_2info-logo-hipla"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Holder>
  );
};

export default Hero;

const Holder = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Container = styled(ReactContainer)`
  padding-top: 0;
`;

const Heading = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 44px;
  text-align: right;
  color: #2e59a8;
  width: 100%;
  margin-top: 65%;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
    margin-right: 10%;
    line-height: 18px;
  }
`;

const Descirption = styled.p`
  color: ${colors.textSecondary};
  font-size: 18px;
  margin-top: 35px;
  margin-bottom: 40px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  margin-top: 20%;
  // @media only screen and (max-width: 767px) {
  //   width: 100%;
  // }
  // @media only screen and (max-width: 996px) {
  //   position:relative;
  //   display:"flex";
  // }
`;
