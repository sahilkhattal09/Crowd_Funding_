import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as VscIcons from "react-icons/vsc";
 
export const ASidebarData = [
  {
    title: "Check Users",
    path: "/ListUsers",
    icon: <BiIcons.BiUser />, 
    iconClosed: <RiIcons.RiArrowDownSFill />, 
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "verify users",
    path: "/averify",
    icon: <BiIcons.BiUser />, 
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

  }, 
  {
    title: "check Donator",
    path: "/Donator",
    icon: <FaIcons.FaDonate />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 
  

  {
    title: "User Feedbacks",
    path: "/UserFeedback",
    icon: <VscIcons.VscFeedback />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 

  {
    title: "Donator User",
    path: "/Dusers",
    // icon: <AiIcons.AiOutlineLogin />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 



];
