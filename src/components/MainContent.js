import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContent = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default MainContent;