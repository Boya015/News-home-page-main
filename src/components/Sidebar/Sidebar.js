import React from 'react';
import { SidebarHeading, SidebarContainer, SidebarItem, SidebarContent, SidebarHeader, SidebarDescription } from './Sidebar.styled';

const Sidebar = () => {
  return (
    
<SidebarContainer>
    <SidebarHeading>
        New
    </SidebarHeading>
      <SidebarItem hasBorder>
        <SidebarContent>
          <SidebarHeader>Hydrogen VS Electric Cars</SidebarHeader>
          <SidebarDescription>Will hydrogen-fueled cars ever catch up to EVs?</SidebarDescription>
        </SidebarContent>
      </SidebarItem>
      <SidebarItem hasBorder>
        <SidebarContent>
          <SidebarHeader>The Downside of AI Artistry</SidebarHeader>
          <SidebarDescription>what are the possible adverse effects of on-demand AI image generation?</SidebarDescription>
        </SidebarContent>
      </SidebarItem>
      <SidebarItem>
        <SidebarContent>
          <SidebarHeader>Is VC Funding Drying Up?</SidebarHeader>
          <SidebarDescription>Private funding by VC firms is down 50% YOY. We take a look at what that means</SidebarDescription>
        </SidebarContent>
      </SidebarItem>
      {/* Add more SidebarItem components as needed */}
    </SidebarContainer>
    
    
  );
};

export default Sidebar;
