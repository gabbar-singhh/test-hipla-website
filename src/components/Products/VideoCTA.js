import styled from "styled-components";
import { Image } from "react-bootstrap";
import colors from "../../config/colors";
import { BsPlayFill } from "react-icons/bs";
import { Fade } from "react-reveal";

const VideoCTA = ({ imageURL }) => {
  return (
    <Holder
      style={{
        background:
          "url(/vectors/dotted-bg.svg)",
      }}
    >
      <ImageHolder>
        <Fade bottom>
          <Image src={imageURL} width="100%" />
        </Fade>

        {/* <PlayButton>
          <BsPlayFill
            style={{
              fontSize: 44,
            }}
          />
        </PlayButton> */}
      </ImageHolder>
    </Holder>
  );
};

export default VideoCTA;

const Holder = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
`;

const ImageHolder = styled.div`
  width: 80%;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
  transition: transform 0.3s;

  @media only screen and (max-width: 767px) {
    width: 90%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const PlayButton = styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4px;
  transition-duration 0.3s;

  &:hover {
    transform: scale(1.4);
    transition-duration 0.3s;
  }
`;
