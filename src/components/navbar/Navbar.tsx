'use client'

import React from "react";
import { Typography, Link } from "@mui/material";
import logo from "../../../public/logo_medium.png";
import Image from "next/image";
import NavbarLink from "./NavbarLink";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import IconLink from "./IconLink";
import {useEffect,useState} from 'react'
import Search from "./Search";
import Menu from "./Menu";
import NavCart from "./NavCart";
import UpperHeader from "./UpperHeader";
const Navbar = () => {
  const navbarObject = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: "About",
      link: "/about",
    },
    // Add more items as needed
  ];
  

  return (
    <div
    className={`w-full border-b-[1px]   bg-white`}
    >
      <div className="bg-black  py-2">
        <UpperHeader />
      </div>

      <div className="h-[80px] px-[25px] max-w-[1100px] m-auto  bg-transparent flex items-center justify-between">
        <Link href="/" className="w-[40px] md:w-[60px]  logo">
          <Image src={logo} alt="" />
        </Link>

        <div className="hidden md:flex gap-[25px]">
          {navbarObject.map((link) => (
            <NavbarLink link={link.link} title={link.name} />
          ))}
        </div>
        <NavbarLast />
      </div>
    </div>
  );
};

const NavbarLast = () => {
  return (
    <div className="flex items-center gap-3">
      <Search />
      <NavCart />
      <Menu />
    </div>
  );
};

export default Navbar;
