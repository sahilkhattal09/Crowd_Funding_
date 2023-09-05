import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
 
const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:5px;
  padding: 30px;
  border-style: outset 1px;
  list-style: none;
  height: 5px;
  text-decoration: none;
  font-size: 14px;
 
  &:hover {
    background: white;
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    border-left: 4px solid blue;
    border-radius:20px;
    cursor: pointer;
  }
`;
 
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
 
const DropdownLink = styled(Link)`
  background: #252831;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
 
  &:hover {
    background: white;
    cursor: pointer;
    border-radius:20px;
  }
`;
 
const ASubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
 
  const showSubnav = () => setSubnav(!subnav);
 
  return (
    <>
      <SidebarLink to={item.path}
      onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
 
export default ASubMenu;