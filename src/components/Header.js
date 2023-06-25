import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import styles from "../styles/Header.module.css";
import { Row, Col, Image } from "react-bootstrap";
import colors from "../config/colors";
import { Button, NavLink, Container } from "../components/Overrides";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isMobileMenuActive) {
      _closeMobileMenu();
    }
  }, [router.asPath]);

  const _onHeaderLinkHover = (value) => setActiveDropdown(value);

  const _onHeaderLinkHoverOut = () => setActiveDropdown(null);

  const _onHeaderLinkClick = (url) => {};

  const _showMobileMenu = () => setIsMobileMenuActive(true);

  const _closeMobileMenu = () => setIsMobileMenuActive(false);

  const renderGetStartedButton = () => (
    <>
      <Link href="/contact-sales">
        <Button href="#" variant="outline-primary">
          Book Demo
        </Button>
      </Link>

      <Link href="/get-started">
        <Button variant="primary">Get Started</Button>
      </Link>
    </>
  );

  const renderProductsList = () => (
    <ul>
      <li>
        <NavLink href="/products/access-cloud">
          <ListWithIcon>
            <div>
              <Icon
                src={"/vectors/access-cloud.svg"}
                alt="access-cloud-hipla"
                width="40"
                height="auto"
              />
            </div>

            <div>
              <Heading>Access Cloud</Heading>
              <Description>Amaze visitor, employees & contractors.</Description>
            </div>
          </ListWithIcon>
        </NavLink>
      </li>
    </ul>
  );

  const renderResourceList = (from = "mobile") => (
    <ul>
      {from === "mobile" ? (
        <>
          <li>
            <Link href="/about-hipla">
                <Heading>Success stories</Heading>
                <Description>Learn more about who we are</Description>
            </Link>
          </li>

          <li>
            <Link href="/about-hipla">
                <Heading>Help Center</Heading>
                <Description>
                  Get quick help from thousands of questions.
                </Description>
            </Link>
          </li>
        </>
      ) : null}

      {/* <li>
        <Link href="/resources/blogs">
          <a>
            <Heading>Blog</Heading>
            <Description>Learn more about who we are</Description>
          </a>
        </Link>
      </li> */}

      <li>
        <Link href="/resources/press-releases">
            <Heading>Press Releases</Heading>
            <Description>Stay up-to-date with our Coverage</Description>
        </Link>
      </li>

      <li>
        <Link href="/testimonials">
            <Heading>Testimonials</Heading>
            <Description>What customers has said about hipla</Description>
        </Link>
      </li>
      <li>
        <Link href="/success-stories">
            <Heading>Success Stories</Heading>
            <Description>
              Take a look into how leading brands have made measurable
              improvements in their workspace.
            </Description>
        </Link>
      </li>
    </ul>
  );

  const renderCompanyList = () => (
    <ul>
      <li>
        <Link href="/about-hipla">
            <Heading>About Hipla</Heading>
            <Description>Learn more about who we are</Description>
        </Link>
      </li>

      <li>
        <Link href="/contact">
            <Heading>Contact</Heading>
            <Description>Get in touch with us</Description>
        </Link>
      </li>

      <li>
        <Link href="/blog">
            <Heading>Blog</Heading>
            <Description>Read our blogs</Description>
        </Link>
      </li>

      {/* <li>
        <Link href="/become-partner">
          <a>
            <Heading>Become our Partner</Heading>
            <Description>Learn more about who we are</Description>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/careers">
          <a>
            <Heading>Careers</Heading>
            <Description>Learn more about who we are</Description>
          </a>
        </Link>
      </li> */}
    </ul>
  );

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
    }
  };

  return (
    <>
      <Main>
        <Container>
          <Row
            className={[
              styles.height64,
              "justify-content-between align-items-center",
            ]}
          >
            <Col xs={12} lg={8}>
              <Row
                noGutters={true}
                className="justify-content-start align-items-center"
              >
                <Col xs={6} lg={2}>
                  <Link href="/">
                    <Logo src="/vectors/hipla-logo.svg" alt="Hipla logo" />
                  </Link>
                </Col>

                <Col xs={10} className="d-none d-lg-block">
                  <HeaderLinksContainer className={styles.headerLinksContainer}>
                    <DropdownList
                      className={styles.list}
                      onMouseOver={() => _onHeaderLinkHover("products")}
                      onMouseOut={() => _onHeaderLinkHoverOut()}
                    >
                      <NavText>
                        Products
                        <DropdownArrow />
                      </NavText>

                      <ProductDropdown
                        active={activeDropdown && activeDropdown === "products"}
                        width="350px"
                      >
                        {renderProductsList()}

                        <ExtraInfo>
                          <Heading>Experience on Mobile</Heading>
                          <Description>
                            Easily access your experience on your smartphone.
                          </Description>

                          <AppLinksHolder>
                            <AppImage
                              src={"/images/playstore.png"}
                              width="35%"
                              alt="playstore-logo-hipla"
                              style={{ marginRight: 10 }}
                              onClick={() => _onAppClick("playstore")}
                            />

                            <AppImage
                              src={"/images/appstore.png"}
                              width="35%"
                              alt="appstore-logo-hipla"
                              onClick={() => _onAppClick("appstore")}
                            />
                          </AppLinksHolder>
                        </ExtraInfo>
                      </ProductDropdown>
                    </DropdownList>

                    {/* <li
                      className={styles.list}
                      onClick={() => _onHeaderLinkClick("")}
                    >
                      <Link href="/success-stories">
                        <a>
                          <NavText style={{ marginRight: 15 }}>
                            Success Stories
                          </NavText>
                        </a>
                      </Link>
                    </li> */}

                    <DropdownList
                      className={styles.list}
                      onMouseOver={() => _onHeaderLinkHover("resources")}
                      onMouseOut={() => _onHeaderLinkHoverOut()}
                    >
                      <NavText>
                        Resources <DropdownArrow />
                      </NavText>

                      <ProductDropdown
                        active={
                          activeDropdown && activeDropdown === "resources"
                        }
                      >
                        {renderResourceList("desktop")}
                      </ProductDropdown>
                    </DropdownList>

                    <DropdownList
                      className={styles.list}
                      onMouseOver={() => _onHeaderLinkHover("company")}
                      onMouseOut={() => _onHeaderLinkHoverOut()}
                    >
                      <NavText>
                        Company <DropdownArrow />
                      </NavText>

                      <ProductDropdown
                        active={activeDropdown && activeDropdown === "company"}
                      >
                        {renderCompanyList()}
                      </ProductDropdown>
                    </DropdownList>
                  </HeaderLinksContainer>
                </Col>

                <Col xs={6} className="d-block d-lg-none text-right">
                  <GiHamburgerMenu
                    size={25}
                    onClick={() => _showMobileMenu()}
                    className={isMobileMenuActive && "d-none"}
                  />

                  <GrClose
                    size={25}
                    onClick={() => _closeMobileMenu()}
                    className={!isMobileMenuActive && "d-none"}
                  />

                  <MobileMenu active={isMobileMenuActive}>
                    <p className="heading">Products</p>

                    {renderProductsList()}

                    <MobileAppLinksHolder>
                      <p className="heading-1">Experience on Mobile</p>
                      <p className="description">
                        Easily access your experience on your smartphone.
                      </p>

                      <AppLinksHolder>
                        <Image
                          src={"/images/playstore.png"}
                          width="35%"
                          alt="playstore-logo-hipla"
                          style={{ marginRight: 10 }}
                        />

                        <Image
                          src={"/images/appstore.png"}
                          alt="appstore-logo-hipla"
                          width="35%"
                        />
                      </AppLinksHolder>
                    </MobileAppLinksHolder>

                    <p className="heading">Resources</p>

                    {renderResourceList()}

                    <p className="heading">Company</p>

                    {renderCompanyList()}

                    <MobileGetStarted>
                      {renderGetStartedButton()}
                    </MobileGetStarted>
                  </MobileMenu>
                </Col>
              </Row>
            </Col>

            <Col
              lg={4}
              style={{
                textAlign: "right",
                marginRight: "-7%",
              }}
              className="d-none d-lg-block"
            >
              {renderGetStartedButton()}
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Header;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid var(--border-color);
  z-index: 100;
  height: 85px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 6px;
  height: 38px;
  width: auto;
  cursor: pointer;
`;

const HeaderLinksContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 3px;
  margin-left: 30px;
`;

const DropdownList = styled.li`
  position: relative;
`;

const NavText = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const DropdownArrow = styled(RiArrowDropDownLine)`
  color: #aaa;
  padding-top: 5px;
  font-size: 28px;
`;

const ProductDropdown = styled.div`
  position: absolute;
  top: 28px;
  width: ${(props) => props.width || "300px"};
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 15%), 0 8px 8px 0 rgb(0 0 0 / 5%);
  border: 1px solid ${colors.border};
  border-radius: 8px;
  display: none;

  ul {
    list-style: none;
    padding: 20px;

    li {
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ${(props) =>
    props.active &&
    `
    display: block; 
  `}
`;

const ExtraInfo = styled.div`
  background-color: ${colors.bgGrey};
  border-top: 1px solid ${colors.border};
  padding: 20px 20px;
`;

const AppLinksHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
`;

const Heading = styled.h6`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${colors.textPrimary};
`;

const Description = styled.p`
  font-size: 12px;
  color: ${colors.textSecondary};
  margin-bottom: 0;
`;

const ListWithIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled(Image)`
  width: 40px;
  height: auto;
  margin-right: 20px;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 85px;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(100vh - 85px);
  width: 100vw;
  z-index: 200px;
  background-color: ${colors.bg};
  display: none;
  overflow: hidden;
  overflow-y: scroll;
  text-align: left;
  padding-bottom: 80px;

  p.heading {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.primary};
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 30px;
  }

  ul {
    list-style: none;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;

    li {
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ${(props) =>
    props.active &&
    `
    display: block;
  `}
`;

const MobileAppLinksHolder = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 20px;
  background-color: ${colors.white};

  p.heading-1 {
    color: ${colors.textPrimary};
    margin-bottom: 0 !important;
  }

  p.description {
    color: ${colors.textSecondary};
    font-size: 14px;
  }
`;

const MobileGetStarted = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${colors.border};
  background-color: ${colors.white};
`;

const AppImage = styled(Image)`
  cursor: pointer;
`;

const Tab = styled.div``;
