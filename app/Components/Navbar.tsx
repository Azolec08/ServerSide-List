"use client";
import { useState } from "react";
import "../Style/navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="grid  grid-cols-2  p-4 bg-gray-400 z-10 relative shadow-sm shadow-black
      md:grid-cols-6 text-white
      "
      >
        <div className="">
          <img
            className="w-12 h-12 ml-2 rounded-full transition-all hover:w-14 hover:h-14  "
            src="/next.svg"
            alt=""
          />
        </div>
        <ul
          className="hidden  col-span-3 justify-evenly items-center text-md 
        md:col-span-3 md:flex
        "
        >
          <Link href="/">
            <li>View List</li>
          </Link>
          <Link href="../create/">
            <li>Create List</li>
          </Link>
          <li>About</li>
        </ul>
        <div
          className=" flex justify-end items-center gap-x-4 mr-8
          md:col-span-2 
          "
        >
          <span className="cursor-pointer">
            <ShoppingCartIcon />
          </span>
          <span
            className="cursor-pointer flex gap-x-4 mt-1 md:hidden"
            onClick={handleShow}
          >
            <MenuIcon />
          </span>
        </div>
      </div>
      <div
        className={
          show
            ? "show_animation bg-gray-400 text-white transition-all duration-500"
            : "hidden_animation text-white transition-all duration-500"
        }
      >
        <ul>
          <li
            className="hover:bg-gray-200 hover:text-black h-9 flex items-center cursor-pointer "
            onClick={handleShow}
          >
            <span className="px-4">Home</span>
          </li>
          <li
            className="hover:bg-gray-200 hover:text-black h-9 flex items-center cursor-pointer"
            onClick={handleShow}
          >
            <span className="px-4">Store</span>
          </li>
          <li
            className="hover:bg-gray-200 hover:text-black h-9 flex items-center cursor-pointer"
            onClick={handleShow}
          >
            <span className="px-4">About</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
