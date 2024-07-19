import styled from "styled-components";

export const NewsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  padding-left: 20px;
    margin: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    padding-left: 20px;
    margin-left: 70px;
  }
`;

export const NewsItem = styled.article`
  display: flex;
  gap: 1rem;
  line-height: 25px;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const NewsImage = styled.div`
  width: 70px;
  height: 100px;
  background-color: hsl(236, 13%, 42%);
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;

`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsHeader = styled.h3`
  margin: 0;
  font-weight: 800;
  color: hsl(5, 85%, 63%);
`;

export const NewsSubHeader = styled.span`
  font-weight: 700;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    color: hsl(5, 85%, 63%);
  }
`;

export const NewsDescription = styled.p`
  margin: 0;
  font-weight: 400;
  color: grey;
  width: 200px;

  @media(min-width: 768px) {
    width: 306px;
  }
`;
