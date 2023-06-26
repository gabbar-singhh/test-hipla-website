import React, { useState } from "react";
import { Card, Col, Row, Form, Image, Alert, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from "react-reveal";

import { colors } from "../config";
import { Container, Input, Button } from "../components/Overrides";
import { send } from "@emailjs/browser";

import SATTVA from "../public/images/sattva.png";
import APN from "../public/images/apn.png";
import WRITER from "../public/images/writer.png";
import YES from "../public/images/yes.png";
import AMAZON from "../public/images/amazon.png";
import LG from "../public/images/lg.png";
import PRESTIGE from "../public/images/prestige.png";
import AIPL from "../public/images/aipl.png";
import WHITE from "../public/images/white.png";
import FREE from "../public/images/freeman.png";
import MC from "../public/images/mc.png";
import SIMPLE from "../public/images/simple.png";
import BREAD from "../public/images/bread.png";
import DPS from "../public/images/dps.png";
import PEOPLE from "../public/images/people.png";
import VEHERE from "../public/images/vehere.png";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-number-input';
import Head from "next/head";
import "../styles/phone.css";

const BRANDS = [AIPL,PRESTIGE,WRITER,YES,AMAZON, LG,SATTVA,WHITE,MC,SIMPLE,DPS,APN,PEOPLE,FREE,BREAD];

const CONTACT_REASONS = [
  "Product Discussion",
  "Price discussion",
  "General Talk",
];

const INITIAL_STATE = {
  fullName: "",
  email: "",
  message: "",
  country: "",
  phone: "",
  company: "",
  role: "",
  help: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [state,setState]= useState({ phone: "" })
  const router = useRouter();

  const submitForm = async () => {
    setErrors(null);

    if (
      !form.company ||
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.help
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
    })
      .then((value) => {
        console.log(value);
        setIsSubmitted(true);
        setIsSubmitting(false);
        setForm(INITIAL_STATE);
        router.push("/success/thank-you");
      })
      .catch((err) => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setErrors(err);
        console.log(err);
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
    setForm((prevValue)=>({
      ...prevValue,
      phone:values
    }))
  }

  return (
    <>
    <Head>
    <title>Book Demo - Hipla</title>
    <link rel="icon" href="/favicon.jpg" />
    <meta
      name="description"
      content="Learn about Hipla’s 360° solutions for facility management and HSE protocols. 
      Get a demo session of our visitor management system solution. Learn about Hipla’s 360° solutions for facility management and HSE protocols."
    />
    <meta
    name="keywords"
    content="get quote for demo, free demo, Hipla"
    />
    <link rel="canonical" href="https://hipla.io/contact-sales" />
  </Head>

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
                    required
                    placeholder="Country *"
                    value={form.country}
                    onChange={(e) => _onInputChange("country", e)}
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
                 <PhoneInput
                  type="text"
                  value={form.phone}
                  // placeholder="Phone Number"
                  onChange={handlePhoneNumber}
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
                    placeholder="Your Role *"
                    required
                    value={form.role}
                    onChange={(e) => _onInputChange("role", e)}
                  />
                </Col>

                <Col xs={12}>
                  <Label>How can our sales team help you? *</Label>

                  <Input
                    as="select"
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    required
                    value={form.help}
                    onChange={(e) => _onInputChange("help", e)}
                  >
                    <option selected default>
                      No option selected
                    </option>

                    {CONTACT_REASONS.map((item) => (
                      <option>{item}</option>
                    ))}
                  </Input>
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
                    By clicking on “Submit”, you are accepting with our privacy
                    policy.
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
            <Heading>Get instant access to a solution trusted by</Heading>

            <BrandsRow>
          {BRANDS.map((item, index) => (
            <Col>
              <Fade bottom cascade>
                <Image src={item} width="auto" height="65px"/>
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

const Main = styled.div`
  background-color: ${colors.bg};
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Heading = styled.h3`
  font-size: 28px;
  color: ${colors.textPrimary};
  font-weight: 700;
  line-height: 1.4;
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
`;

const Tag = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.border};
  transition-duration: 0.2s;
  padding: 10px 15px;
  color: ${colors.textSecondary};
  width: auto;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 10px;
  float: left;

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
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
`;

const Terms = styled.p`
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const Tick = styled(Image)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const BrandsRow = styled(Row)`
  margin-top: 40px;
  margin-bottom: 40px;
`;
