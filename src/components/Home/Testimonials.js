import { Container, Carousel, Card, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import { Fade } from "react-reveal";

const TESTIMONIAL = [
  {
    image: "../public/images/lg-bg.png",
    text: "We implemented Contatrack.ai in our corporate offices and plant - the Hipla team was very supportive throughout the process, and went the extra mile to deliver custom enhancement unique to our organisational needs at every step to ensure that our workspaces are operating at their highest levels of safety. We are continually impressed with their vision and commitment to understanding and delivering client needs, and are exploring new implementation opportunities with them as well.",
    by: {
      name: "AJAY RAMBAL",
      designation: "Head of IT, LG Electronics India",
    },
    about:
      "Hipla eco system helps AIPL to setup their smart workplace. Hipla eco system helps AIPL to setup their smart workplace.",
  },
  {
    image: "../public/images/vehere-bg.png",
    text: "We at Vehere are immensely pleased with The Visitor Management and Smart Office system from Hipla. It has made a substantial impact within our company on optimizing time, stepping up security, reviewing the number of meetings with exact time logs. It is like a keyless entry with all the required information and ingredients, working as an absolute customer delight and creating a wow experience for our visitors in an automated architecture.",
    by: {
      name: "Vijeta Rakesh",
      designation: "Procurement Manager, Vehere Interactive",
    },
    about:
      "Hipla eco system helps AIPL to setup their smart workplace. Hipla eco system helps AIPL to setup their smart workplace.",
  },
  {
    image: "../public/images/writer-bg.png",
    text: "Hipla team was amazing, patient and cooperative and the way they communicated, managed and ensured completion of the project is commendable. This is a truly appreciating engagement and we are content with you and your team and the way they managed to get things onboard. I am thankful to all the team Hipla to have spent time for a successful delivery at WSG.",
    by: {
      name: "Swapnil S Bagul",
      designation: "CTO, Writer",
    },
    about:
      "Hipla eco system helps AIPL to setup their smart workplace. Hipla eco system helps AIPL to setup their smart workplace.",
  },
];

const Testimonials = () => {
  return (
    <Holder>
      <Container>
        <Fade bottom>
          <Heading>We power the brands that power the world</Heading>
        </Fade>
      </Container>

      <CarouselHolder
        style={{
          background: "url(../../public/vectors/dotted-bg.svg",
        }}
      >
        <StyledContainer>
          <StyledCarousel
            slide={true}
            interval={100000}
            nextIcon={
              <IoIosArrowForward
                style={{
                  fontSize: 36,
                  color: colors.textPrimary,
                }}
              />
            }
            prevIcon={
              <IoIosArrowBack
                style={{
                  fontSize: 36,
                  color: colors.textPrimary,
                }}
              />
            }
          >
            {TESTIMONIAL.map((item) => (
              <Carousel.Item>
                <TestimonialCard>
                  <Row
                    noGutters
                    className="justify-content-between align-items-center"
                  >
                    <StyledCol xs={12} md={5} lg={4}>
                      <StyledImage src={item.image} alt="Testimonial- Hipla" />
                    </StyledCol>

                    <StyledCol xs={12} md={6} lg={7}>
                      <TestimonialHolder>
                        <Fade bottom>
                          <Testimonial>{item.text}</Testimonial>
                        </Fade>

                        <Fade bottom>
                          <TestimonialByHolder>
                            <TestimonialBy>{item.by.name}</TestimonialBy>
                            <TestimonialByDesignation>
                              {item.by.designation}
                            </TestimonialByDesignation>
                          </TestimonialByHolder>
                        </Fade>
                        {/* 
                        <Fade bottom>
                          <TestimonialText>{item.about}</TestimonialText>
                        </Fade> */}

                        {/* <TestimonialLink>
                          Read Full Case Study <Arrow />
                        </TestimonialLink> */}
                      </TestimonialHolder>
                    </StyledCol>
                  </Row>
                </TestimonialCard>
              </Carousel.Item>
            ))}
          </StyledCarousel>
        </StyledContainer>
      </CarouselHolder>

      <Container>
        <Fade bottom>
          <Link href="/testimonials">
            <StyledLink>
              Read all testimonials <Arrow />
            </StyledLink>
          </Link>
        </Fade>
      </Container>
    </Holder>
  );
};

export default Testimonials;

const Holder = styled.div`
  border-top: 1px solid ${colors.border};
  padding-top: 60px;
  padding-bottom: 80px;
  overflow: hidden;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const CarouselHolder = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: hidden;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-inner {
    overflow: visible;
  }

  .carousel-control-prev {
    position: absolute;
    left: 0px;
    top: 50%;
    z-index: 70;
    background-color: ${colors.white} !important;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${colors.textPrimary};
    }

    .carousel-control-next-icon {
      color: ${colors.textPrimary};
    }
  }

  .carousel-control-next {
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 70;
    background-color: ${colors.white};
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel-control-next-icon {
      color: ${colors.textPrimary};
    }
  }
`;

const StyledCol = styled(Col)`
  height: 100%;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

const TestimonialCard = styled(Card)`
  box-shadow: 0 8px 24px 0 rgb(104 115 125 / 15%) !important;
  border: 1px solid ${colors.border} !important;
  border-radius: 10px !important;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TestimonialHolder = styled.div`
  padding: 25px 85px 25px 0px;
  position: relative;

  @media only screen and (max-width: 767px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 70px;
  }

  &:before {
    content: url("../../public/images/quote-bg.png");
    position: absolute;
    left: -140px;
    top: -15px;

    @media only screen and (max-width: 767px) {
      left: 40px;
      top: -50px;
    }
  }
`;

const Testimonial = styled.h5`
  font-weight: 400 !important;
  margin-bottom: 10px;
  margin-top: 30px;
  position: relative;
  font-size: 15px;
  line-height: 1.8;
  color: ${colors.textSecondary};
`;

const TestimonialByHolder = styled.div`
  margin-top: 25px;

  &::before {
    border-top: 1px solid black;
    display: block;
    height: 1px;
    content: " ";
    width: 30px;
    position: relative;
    top: 0.8rem;
  }
`;

const TestimonialBy = styled.p`
  margin-left: 40px;
  color: ${colors.textPrimary};
  margin-bottom: 0;
`;

const TestimonialByDesignation = styled.p`
  margin: 0;
  margin-left: 40px;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: ${colors.textPrimary};
  margin-top: 50px;
  margin-bottom: 0;
`;

const TestimonialLink = styled.div`
  color: ${colors.primary};
  text-align: right;
  width: 100%;
  text-transform: uppercase;
  font-size: 15px;
  margin-top: 20px;
  position: absolute;
  bottom: 20px;
  right: 40px;
`;

const StyledLink = styled.a`
  color: ${colors.primary};
  margin-bottom: 20px;
  margin-top: 30px;
  display: block;
  cursor: pointer;
`;

const Heading = styled.h2`
  color: ${colors.textPrimary};
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 54px;
  margin-left: 20%;
`;

const Arrow = styled(CgArrowLongRight)`
  margin-left: 5px;
  font-size: 18px;
`;

const StyledContainer = styled(Container)`
  overflow: hidden;
`;
