import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: column;
    padding-left: 70px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 

  @media (min-width: 768px) {
   flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  width: 336px;
  font-weight: 800;
  color: hsl(240, 100%, 5%);

  @media (min-width: 768px) {
    font-size: 56px;
    padding-left: 20px;
  }
`;

export const ContentDescription = styled.div`
 display: flex;
 flex-direction: column;

 @media (min-width: 768px) {
  flex-direction: column;
  padding-top: 13px;
  padding-bottom: 20px;
  margin-left: 60px;
 }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  width: 300px;
  color: grey;
  padding-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 17px;
    
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: hsl(5, 85%, 63%);
  color: black;
  border: none;
  width: 10rem;
  height: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: hsl(240, 100%, 5%);
    color: white;
  }
`;

export const MobileImageComponent = styled.img`
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopImageComponent = styled.img`
  display: none;
  

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    padding-left: 20px;
    margin: 1px;
  }
`;

// ../../assets/svg/icons8-x-outline.svg