import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import NavLink from "../components/Navlink";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="blue-bg">
      <div className="w-full flex flex-row justify-between px-3 bg-gray-800 text-gray-400 text-sm">
        <p className="text-sm">E: patkeenan316@gmail.com</p>
        <p className="text-sm">C: 908.721.6255</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-2 text-white">
        <div className="flex justify-between align-middle">
          {/* Logo */}
          <a href="https://www.heritagehousesothebysrealty.com/eng">
            <Image
              src={`/HHSIR_LOGO.webp`}
              height={57}
              width={250}
              priority
              alt={`Heritage House Sotheby's International Realty Logo`}
            />
          </a>

          <div className="flex justify-center flex-col ">
            <h2 className=" text-center mx-auto text-base font-bold ">
              Patrick Keenan
              <br className="md:hidden" />
              <span className=" opacity-0 md:opacity-100 font-light"> | </span>
              <span className="text-sm font-light">Sales Associate</span>
            </h2>
          </div>
        </div>
      </div>
      {router.pathname == "/login" ||
      router.pathname == "/listings/3-plymouth-rd/virtual-tour" ? (
        ""
      ) : (
        <div className="navigation bg-white blue-text shadow-md p-3">
          <ul className="flex  align-middle max-w-4xl justify-center mx-auto space-x-0 md:space-x-10 sm:space-x-7 space-x-0 lg:space-x-14">
            <NavLink link="/" linkTitle="Home" title="Home" disabled="false" />
            <NavLink
              link="/listings/3-plymouth-rd"
              linkTitle="Listings"
              title="listings"
            />
            <NavLink link="/blog" linkTitle="Blog" title="Coming Soon" />
            <NavLink link="/contact" linkTitle="Contact" title="Contact" />
            <NavLink link="/login" linkTitle="Login" title="Login" />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
