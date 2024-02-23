import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navigation flex flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center m-auto">
        <Image
          src="/assets/images/logo1.png"
          alt="Filmovita logo"
          width={70}
          height={69}
        ></Image>
        <p className="text-2xl p-2 pl-0 filmovita ml-3">Filmovita</p>
      </div>
      <ul className="flex flex-col md:flex-row mx-auto text-xl ">
        <Link className="nav_btn" href="/">
          Home
        </Link>
        <Link className="nav_btn" href="/soon">
          Coming Soon
        </Link>
        <Link className="nav_btn" href="/top">
          Top Rated
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
