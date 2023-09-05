import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
 

export const UsidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />, 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "Donate",
    path: "/Donate",
    icon: <FaIcons.FaDonate />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 
  {
    title: "Blog",
    path: "/blog",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Support",
    path: "/Support",
    icon: <BiIcons.BiSupport />,
  },
];
