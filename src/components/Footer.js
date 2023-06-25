import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col, Image } from "react-bootstrap";
import { Fade } from "react-reveal";

import colors from "../config/colors";
import { Button, Container } from "../components/Overrides";

const FIRST_ROW = [
  {
    url: "/about-hipla",
    title: "About Hipla",
  },
  {
    url: "/legal/privacy-policy",
    title: "Privacy policy",
  },
  {
    url: "/legal/terms-of-use",
    title: "Terms of use",
  },
  {
    url: "/contact",
    title: "Contact",
  },
  // {
  //   url: "/help-center",
  //   title: "Help Center",
  // },
];

const SECOND_ROW = [
  {
    url: "/testimonials",
    title: "Testimonials",
  },
  {
    url: "/resources/press-releases",
    title: "Press Releases",
  },
  {
    url: "/success-stories",
    title: "Success Stories",
  },
  // {
  //   url: "/hipla-blog",
  //   title: "Hipla Blog",
  // },
  // {
  //   url: "/become-partner",
  //   title: "Partner with us",
  // },
];

const THIRD_ROW = [
  {
    url: "/products/access-cloud",
    title: "Access Cloud",
  },
];

const Footer = () => {
  const _onAppClick = (type) => {
    if (type == "playstore") {
      window.open(
        "https://play.google.com/store/apps/developer?id=Hipla+Technologies+Pvt+Ltd",
        "_blank"
      );
    } else if (type == "appstore") {
      window.open(
        "https://apps.apple.com/in/developer/hipla-technologies-pte-ltd/id1518577252",
        "_blank"
      );
    } else if (type == "instagram") {
      window.open("https://www.instagram.com/hiplatechnologies", "_blank");
    } else if (type == "facebook") {
      window.open("https://www.facebook.com/hiplaio", "_blank");
    } else if (type == "linkdin") {
      window.open(
        "https://www.linkedin.com/company/hiplatechnologies",
        "_blank"
      );
    } else if (type == "twitter") {
      window.open("https://twitter.com/HiplaHQ", "_blank");
    } else if (type == "youtube") {
      window.open("https://www.youtube.com/@hiplatechnologies", "_blank");
    } else if (type == "whatsapp") {
      window.open("https://wa.me/+918527718300 ", "_blank");
    }
  };

  return (
    <Holder>
      <SubFooter
        style={{
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "321px",
          boxSizing: "border-box",
          backgroundImage: "url(/images/background.png",
        }}
      >
        <div class="container-fluid">
          {/* <Row className="align-items-center justify-content-between"> */}
          {/* <Col xs={12} md={8}> */}
          <Fade bottom>
            <Heading>Start leveraging Our Products today.</Heading>
            <Description>
              Learn more about our ready-to-use solutions or build custom-use
              cases according to your premises.
            </Description>
          </Fade>
          {/* </Col> */}
          {/* </Row>   */}

          <ButtonHolder>
            <Link href="/contact-sales">
              <VideoButton variant="onClick" href="#">
                Free Demo
              </VideoButton>
            </Link>

            <Link href="/get-started">
              <VideoButton variant="onClick">Get Started</VideoButton>
            </Link>
          </ButtonHolder>
        </div>
      </SubFooter>

      <Main>
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={3}>
              <Row className="align-items-center py-1">
                <Col xs={8}>
                  <Image
                    src="/images/ossa.png"
                    alt="OSSA logo"
                    className="img-fluid"
                  />
                </Col>
                <Col xs={4}>
                  <Image
                    src="/images/duns.png"
                    alt="DUNS logo"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>

            <Col xs={4} md={2}>
              <FooterLinks>
                <li className="heading">Products</li>
                {THIRD_ROW.map((item) => (
                  <li>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </FooterLinks>
            </Col>

            <Col xs={6} md={2}>
              <FooterLinks>
                <li className="heading">Company</li>
                {FIRST_ROW.map((item) => (
                  <li>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </FooterLinks>
            </Col>

            <Col xs={6} md={2}>
              <FooterLinks>
                <li className="heading">Useful Links</li>
                {SECOND_ROW.map((item) => (
                  <li>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </FooterLinks>
            </Col>

            <Col xs={6} md={3}>
              <p
                style={{
                  color: "#2E59A8",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Download Hipla One app
              </p>
              <AppLinksHolder>
                <AppImageOld
                  src={"/vectors/Group 113.svg"}
                  width="40%"
                  alt="group-hipla"
                  style={{ marginRight: 10 }}
                  onClick={() => _onAppClick("playstore")}
                />

                <AppImageOld
                  src={"/vectors/Group 114.svg"}
                  width="40%"
                  alt="group-hipla"
                  onClick={() => _onAppClick("appstore")}
                />
              </AppLinksHolder>
            </Col>
          </Row>
          <hr />
          <Row className="d-flex justify-content-between">
            <Col xs={6} md={3}>
              <Row className="d-flex justify-content-start">
                <Image
                  src="/vectors/hipla-logo.svg"
                  width="90"
                  height="41"
                  alt="Hipla logo"
                />
                <p style={{ marginTop: "3%", marginLeft: "2%" }}>
                  © 2023. All Rights Reserved.
                </p>
              </Row>
            </Col>
            <Col xs={6} md={3}>
              <AppLinksHolder>
                <AppImage
                  src={"/images/linkdin.png"}
                  width="10%"
                  alt="group-hipla"
                  style={{ marginRight: 15 }}
                  onClick={() => _onAppClick("linkdin")}
                />
                <AppImage
                  src={"/images/insta.png"}
                  width="10%"
                  alt="group-hipla"
                  style={{ marginRight: 15 }}
                  onClick={() => _onAppClick("instagram")}
                />

                <AppImage
                  src={"/images/fb.png"}
                  width="10%"
                  alt="group-hipla"
                  style={{ marginRight: 15 }}
                  onClick={() => _onAppClick("facebook")}
                />
                <AppImage
                  src={"/images/twitter.png"}
                  width="10%"
                  alt="group-hipla"
                  style={{ marginRight: 15 }}
                  onClick={() => _onAppClick("twitter")}
                />
                <AppImage
                  src={"/images/youtube.png"}
                  width="10%"
                  alt="group-hipla"
                  style={{ marginRight: 15 }}
                  onClick={() => _onAppClick("youtube")}
                />
                <AppImage
                  src={"/images/whatsapp.png"}
                  width="10%"
                  alt="group-hipla"
                  style={{ marginRight: 15 }}
                  onClick={() => _onAppClick("whatsapp")}
                />
              </AppLinksHolder>
            </Col>
          </Row>
        </Container>
      </Main>
    </Holder>
  );
};

export default Footer;

const Holder = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

const SubFooter = styled.div`
  // background: ${colors.bg};
  // padding-top: 40px;
  // padding-bottom: 40px;
  // border-top: 1px solid ${colors.border};
  // border-bottom: 1px solid ${colors.border};
  // background-size: cover;
  // background-repeat: no-repeat;
  // padding: 80px 8%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 59px 8%;
  border-radius: 20px 20px 20px 20px;

  @media only screen and (max-width: 767px) {
    text-align: center;
    width: 40%;
    height: 361px;
    padding: 36px 8%;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  @media only screen and (max-width: 767px) {
    margin-left: 0px;
    margin: opx;
  }
`;

const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 64px;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767px) {
    margin-top: -2px;
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-width: 350px) {
    margin-top: -8%;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #ffffff;
  margintop: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 120%;
  }
`;

const Main = styled.div`
  padding-top: 80px;
  padding-bottom: 60px;
`;

const PrivacyLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding-left: 0;
  margin-left: 0;

  li {
    margin-right: 15px;
    font-size: 14px;
    color: ${colors.textSecondary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;

  li {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333333;

    &.heading {
      text-transform: uppercase;
      color: #2e59a8;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`;

const AppLinksHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
`;

const Center = styled.div`
  margin-top: 10%;
  display: flex;
  margin-left: 90%;
`;

const AppImageOld = styled(Image)`
  cursor: pointer;
`;

const AppImage = styled(Image)`
  cursor: pointer;
  transition: transform 0.2s; /* Animation */

  &:hover {
    transform: scale(
      1.5
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`;
const VideoButton = styled(Button)`
  text-transform: uppercase !important;
  font-size: 18px;
  display: flex !important;
  align-items: center !important;
  padding: 10px 10px !important;
  font-weight: 700;
  // transition: transform 0.3s !important;
  @media only screen and (max-width: 767px) {
    font-size: 8px;
  }

  &:hover {
    background: "#ff0000";
  }
`;
