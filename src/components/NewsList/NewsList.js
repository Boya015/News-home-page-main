import React from 'react';
import { NewsItem, NewsListContainer, NewsImage, NewsContent, NewsHeader, NewsSubHeader, NewsDescription } from './NewsList.styled';
import Retroimage from "../../assets/images/image-retro-pcs.jpg";
import Laptopimage from "../../assets/images/image-top-laptops.jpg";
import ControllerImage from "../../assets/images/image-gaming-growth.jpg";

const NewsList = () => {
  return (
    <NewsListContainer>
      <NewsItem>
        <NewsImage src={Retroimage} alt="retro image"/>
        <NewsContent>
          <NewsHeader>01</NewsHeader>
          <NewsSubHeader>Reviving Retro PCs</NewsSubHeader>
          <NewsDescription>What happens when old PCs are given modern upgrades?</NewsDescription>
        </NewsContent>
      </NewsItem>
      <NewsItem>
        <NewsImage src={Laptopimage} alt="laptop image"/>
        <NewsContent>
          <NewsHeader>02</NewsHeader>
          <NewsSubHeader>Top 10 Laptops of 2023</NewsSubHeader>
          <NewsDescription>Discover the best laptops that made the list this year.</NewsDescription>
        </NewsContent>
      </NewsItem>
      <NewsItem>
        <NewsImage src={ControllerImage} alt="gaming growth"/>
        <NewsContent>
          <NewsHeader>03</NewsHeader>
          <NewsSubHeader>The Growth of Gaming</NewsSubHeader>
          <NewsDescription>How gaming has evolved over the past decade.</NewsDescription>
        </NewsContent>
      </NewsItem>
    </NewsListContainer>
  )
}

export default NewsList
