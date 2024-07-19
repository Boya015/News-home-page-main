import React from "react";
import MobileImage from "../../assets/images/image-web-3-mobile.jpg";
import DesktopImage from "../../assets/images/image-web-3-desktop.jpg";
import {
  MainContainer,
  MobileImageComponent,
  DesktopImageComponent,
  ContentContainer,
  Title,
  ContentDescription,
  Description,
  Button,
} from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <MainContainer>
      <MobileImageComponent src={MobileImage} alt="mobile image" />
      <DesktopImageComponent src={DesktopImage} alt="desktop image" />
      <ContentContainer>
        <Title>The Bright Future of Web 3.0</Title>
        <ContentDescription>
        <Description>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its purpose?
        </Description>
        <Button>READ MORE</Button>
        </ContentDescription>
      </ContentContainer>
    </MainContainer>
  );
};

export default HeroSection;
