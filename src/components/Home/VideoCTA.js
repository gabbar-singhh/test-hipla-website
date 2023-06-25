import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";
import { AiFillPlayCircle } from "react-icons/ai";
import { Fade } from "react-reveal";
import { Col, Row, Image } from "react-bootstrap";
const VideoCTA = ({ forModalOpen }) => {
  return (
    <Holder
      style={{
        backgroundRepeat:"no-repeat",
        width:"100%",
        height:"321px",
        boxSizing:"border-box",
        backgroundImage:
          "url(/images/background.png",
      }}
    >
      <div class="container-fluid">
      {/* <Container> */}
        <Fade bottom>
          <Heading>Visitor management system is actively supporting in</Heading>
        </Fade>

        <ListHolder>
          <List>
            <Fade bottom>- Reduce operational costs and down-time.</Fade>
          </List>
          <List>
            <Fade bottom>- Increase office productivity</Fade>
          </List>
        </ListHolder>
        {/* <div class="col-xs-12 col-md-12"> */}
        <ButtonHolder>
          <Fade bottom>
            {/* <a href="https://youtu.be/pl3cLKaty7w" target="_blank"> */}
            {/* <VideoButton name="btn-xs btn-sm btn-lg" variant="primary" style={{background: "#2E59A8",borderColor:"#FFFFFF"}}>Learn more</VideoButton> */}
            <VideoButton name="btn-xs btn-sm btn-lg" variant="outline" onClick={forModalOpen} style={{background:"#2E59A8",color:"#FFFFFF",marginLeft:"5%"}}>
              <VideoIcon style={{margin:"7px"}}/>
              IntroVideo
            </VideoButton>  
          </Fade>
        </ButtonHolder>
        {/* </div> */}
      {/* </Container> */}
      </div>
    </Holder>
  );
};

export default VideoCTA;

const Holder = styled.div`
background-size: cover;
background-repeat: no-repeat;
padding: 49px 6%;
border-radius:20px 20px 20px 20px;
@media only screen and (max-width:767px)
{
  height:361px;
  padding: 36px 6%;
}
`;

const Container = styled.div`
  width: 50%;
  float: left;
    margin-left: 20%;
    text-align:center;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  margin-bottom: 5px;
  color: ${colors.white};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:34px;
  @media only screen and (max-width: 767px){
  font-size:20px;
}
  @media only screen and (max-width:350px){
    margin-top:-8%;
  }
`;


const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:30px;
  @media only screen and (max-width: 767px){
    margin-left:0%;
  }
`;

const VideoButton = styled(Button)`
  margin-right: 15px !important;
  text-transform: uppercase !important;
  font-size: 14px !important;
  display: flex !important;
  align-items: center !important;
  padding: 10px 10px !important;
  font-weight: 700 !important;
  transition: transform 0.3s !important;

  &:hover {
    background-color: ${colors.white} !important;
    color: ${colors.primary} !important;
    border-color: #FFFFFF !important;
    transform: scale(1.05) !important;
    transition: transform 0.3s !important;
  }
 
`;

const VideoIcon = styled(AiFillPlayCircle)`
  font-size: 32px;
  @media only screen and (max-width:767px)
  {
    font-size:20px;
  }
`;

const ListHolder = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  margin-top: 25px;
  margin-bottom: 15px;
  
  // @media only screen and (max-width: 767px){
  // margin-left:-15%;
  
  // }
`;

const List = styled.li`
  color: ${colors.white};
  margin-bottom: 10px;
  font-size:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767px){
    font-size:16px;
  }
`;
