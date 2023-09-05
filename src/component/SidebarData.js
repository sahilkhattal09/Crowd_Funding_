import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
 

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />, 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "Donate",
    icon: <FaIcons.FaDonate />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Login",
        path: "/Login",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Register",
        path: "/Register",
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  }, 
  {
    title: "Need Donation",
    icon: <FaIcons.FaHandsHelping />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Login",
        path: "/DLogin",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Register",
        path: "/DRegister",
        icon: <IoIcons.IoIosPaper />,
      },
    ]

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
