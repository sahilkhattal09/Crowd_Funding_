import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as GrIcons from "react-icons/gr"
 
const id = localStorage.getItem('userId');

export const DsidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />, 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "Need Donation",
    path: `/verification/${id}`,
    icon: <FaIcons.FaHandsHelping />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Check status",
    path: `/dview/${id}`,
    icon: <GrIcons.GrStatusInfo />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FaIcons.FaMicroblog />,
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
