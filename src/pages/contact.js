import React, { useState } from "react";
import { Card, Col, Row, Form, Image, Spinner, Alert } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { useRouter } from "next/router";

import { colors } from "../config";
import { Container, Input, Button } from "../components/Overrides";
import { send } from "@emailjs/browser";

import SATTVA from "../../public/images/sattva.png";
import APN from "../../public/images/apn.png";
import WRITER from "../../public/images/writer.png";
import YES from "../../public/images/yes.png";
import AMAZON from "../../public/images/amazon.png";
import LG from "../../public/images/lg.png";
import PRESTIGE from "../../public/images/prestige.png";
import AIPL from "../../public/images/aipl.png";
import WHITE from "../../public/images/white.png";
import FREE from "../../public/images/freeman.png";
import MC from "../../public/images/mc.png";
import SIMPLE from "../../public/images/simple.png";
import BREAD from "../../public/images/bread.png";
import DPS from "../../public/images/dps.png";
import PEOPLE from "../../public/images/people.png";
import VEHERE from "../../public/images/vehere.png";
import PhoneInput from "react-phone-number-input";
import Head from "next/head";

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

const TOPICS = [
  "Press Enquiry",
  "Product Details",
  "Pricing",
  "Demo Request",
  "Technical Error",
  "Job opportunities",
];

const INITIAL_STATE = {
  fullName: "",
  email: "",
  message: "",
  country: "",
  phone: "",
  company: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [errors, setErrors] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();

  const addToTopics = (val) => {
    if (val != selectedTopic) {
      setSelectedTopic(val);
    } else {
      setSelectedTopic("");
    }
  };

  const submitForm = async () => {
    setErrors(null);
    if (
      !form.company ||
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !selectedTopic
    ) {
      setErrors(["Please fill all the feilds."]);
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      setErrors(["Please enter a valid email address!"]);
      return;
    }
    if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(form.phone)) {
      setErrors(["Please enter a valid phone number!"]);
      return;
    }

    setIsSubmitting(true);

    await send("default_service", "template_h7ytcku", {
      ...form,
      help: setSelectedTopic,
    })
      .then((value) => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setForm(INITIAL_STATE);
        setSelectedTopic("");
        router.push("/success/thank-you");
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setErrors(err);
        console.log(err);
        window.scrollTo(0, 0);
      });
  };

  const _onInputChange = (from, e) => {
    setErrors("");
    const { value } = e.target;
    setForm((prevValue) => ({
      ...prevValue,
      [from]: value,
    }));
  };
  const handlePhoneNumber = (values) => {
    setForm((prevValue) => ({
      ...prevValue,
      phone: values,
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Us - Hipla</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta
          name="description"
          content="We love hearing from you! From support requests and sales inquiries, to access control and vision cloud products feedback and questions—we’re here and happy to help."
        />
        <meta
          name="keywords"
          content="Hipla, contact us, visitor management system"
        />
        <link rel="canonical" href="https://hipla.io/contact" />
      </Head>

      <HeadingHolder>
        <h1>Contact Us</h1>
      </HeadingHolder>
      <Main>
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={7}>
              <StyledCard>
                <Row>
                  {isSubmitted && (
                    <Col xs={12}>
                      <Alert variant="success">
                        Thank you for contacting. Our team will be in touch with
                        you soon.
                      </Alert>
                    </Col>
                  )}

                  <Col xs={12} md={6}>
                    <Input
                      size="lg"
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.fullName}
                      onChange={(e) => _onInputChange("fullName", e)}
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <Input
                      size="lg"
                      type="text"
                      placeholder="Company Name *"
                      required
                      value={form.company}
                      onChange={(e) => _onInputChange("company", e)}
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <Input
                      size="lg"
                      type="text"
                      placeholder="Work email address *"
                      required
                      value={form.email}
                      onChange={(e) => _onInputChange("email", e)}
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <Input
                      size="lg"
                      type="text"
                      placeholder="Phone Number *"
                      required
                      value={form.phone}
                      onChange={(e) => _onInputChange("phone", e)}
                    />
                  </Col>

                  <Col xs={12}>
                    <Label>Select a topic:</Label>

                    <TagsHolder>
                      {TOPICS.map((item) => (
                        <Tag
                          value={item}
                          selected={selectedTopic == item}
                          onClick={() => addToTopics(item)}
                        >
                          {selectedTopic && selectedTopic == item && (
                            <Tick src={"/vectors/tick.svg"} />
                          )}
                          {item}
                        </Tag>
                      ))}
                    </TagsHolder>
                  </Col>

                  <Col xs={12}>
                    <Label>Any Message?</Label>
                    <Input
                      as="textarea"
                      rows={3}
                      size="lg"
                      type="text"
                      placeholder="What challenges you are looking to overcome with Hipla?"
                      required
                      style={{
                        width: "100%",
                      }}
                      value={form.message}
                      onChange={(e) => _onInputChange("message", e)}
                    />
                  </Col>
                  <Col xs={12}>
                    <Terms>
                      By clicking on “Submit”, you are accepting with our
                      privacy policy.
                    </Terms>
                  </Col>
                  {errors && errors.length && (
                    <Col xs={12}>
                      <Alert variant="danger">
                        {errors[0] ??
                          "We are unable to process your request. Please try again after some time."}
                      </Alert>
                    </Col>
                  )}
                  <Col xs={12}>
                    <Button
                      onClick={submitForm}
                      disabled={(errors && errors.length > 0) || isSubmitting}
                    >
                      {isSubmitting ? (
                        <Spinner animation="border" size="sm">
                          <span className="sr-only">
                            Submitting, Please wait...
                          </span>
                        </Spinner>
                      ) : (
                        "SUBMIT"
                      )}
                    </Button>
                  </Col>
                </Row>
              </StyledCard>
            </Col>
            <Col xs={12} md={4}>
              <Description>
                Get instant access to a solution trusted by
              </Description>

              <BrandsRow>
                {BRANDS.map((item, index) => (
                  <Col>
                    <Fade bottom cascade>
                      <Image src={item} width="auto" height="50px" />
                    </Fade>
                  </Col>
                ))}
              </BrandsRow>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Contact;

const HeadingHolder = styled.div`
  background-color: ${colors.bg};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding-top: 100px;
  mrgin-left: 10px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  background-color: ${colors.bg};
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Heading = styled.h3`
  font-size: 28px;
  color: ${colors.textPrimary};
  font-weight: 700;
  line-height: 1.4;
`;

const Description = styled.h3`
  font-size: 28px;
  color: ${colors.textPrimary};
  font-weight: 500;
  line-height: 1.1;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: 25px;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  text-align: left;
  z-index: 10;
`;

const TagsHolder = styled.div`
  clear: both;
  display: block;
`;

const Tag = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.border};
  transition-duration: 0.2s;
  padding: 5px 15px;
  color: ${colors.textSecondary};
  width: auto;
  height: 30px;
  margin-right: 15px;
  margin-bottom: 10px;
  float: left;
  font-size: 13px !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.selected &&
    `
    background: ${colors.primary};
    border-color: ${colors.border};
    transition-duration: .2s;
    color: ${colors.white};
  `}
`;

const Label = styled(Form.Label)`
  font-size: 12px;
  color: ${colors.textSecondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Terms = styled.p`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin: 5px;
`;

const Tick = styled(Image)`
  height: 15px;
  width: 15px;
  margin-right: 8px;
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  border: 1px solid ${colors.white};
  border-radius: 50%;
`;

const BrandsRow = styled(Row)`
  margin-top: 40px;
  margin-bottom: 40px;
`;
