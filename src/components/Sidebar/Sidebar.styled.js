import styled from 'styled-components';




export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 306px;
  margin-left: 16px;
  margin-right: 100px;
  gap: 2.1rem;
  padding: 1rem;
  background-color: hsl(240, 100%, 5%);

  @media (min-width: 768px) {
    margin-top: 16px;
    width:533px;
  }
  
`;

export const SidebarItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: ${({ hasBorder }) => (hasBorder ? '1px solid hsl(233, 8%, 79%)' : 'none')};;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color: hsl(240, 100%, 5%);
  
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(240, 100%, 5%);
  
`;

export const SidebarHeading = styled.h2`
  margin: 0;
  font-weight: 800;
  color: hsl(35, 77%, 62%);
  background-color: hsl(240, 100%, 5%);
`;

export const SidebarHeader = styled.h4`
  margin: 0;
  font-weight: 800;
  color: white;
  background-color: hsl(240, 100%, 5%);
  cursor: pointer;

  &:hover,
  &:focus {
    color: hsl(35, 77%, 62%);
  }
`;

export const SidebarDescription = styled.p`
  margin: 0;
  font-weight: 400;
  color: white;
  background-color: hsl(240, 100%, 5%);
`;
