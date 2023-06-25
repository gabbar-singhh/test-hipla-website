import Link from "next/link";
import styled from "styled-components";

import { Button } from "../../components/Overrides";
import { colors } from "../../config";

const Thankyou = () => {
  return (
    <TextCenter>
      <img src="/vectors/thank-you.svg" height="150px" width="auto" />
      <Heading>
        Thank you for submitting your query. <br />
        We will be in touch with you soon.
      </Heading>

      <Link href="/">
        <Button>Go back to homepage</Button>
      </Link>
    </TextCenter>
  );
};

export default Thankyou;

const TextCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
`;

const Heading = styled.h3`
  font-size: 30px;
  color: ${colors.textPrimary};
  margin-bottom: 30px;
  margin-top: 30px;
`;
