/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "../images/logo-vikati-300x81.webp";
import Image from "next/image";
function Header() {
  return (
    <>
      <header>
        <nav className="flex justify-between px-4 items-center py-2">
          <div>
            <button className="border-none ">
              <svg
                class="icon icon-tabler icon-tabler-menu-2 "
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>

            <ul>
              <li></li>
            </ul>
          </div>

          <Image
            src={logo}
            alt="Logo Vikati"
            width={300}
            height={81}
            className="w-32 md:w-72"
          />
          <button className="border-none ">
            <svg
              class="icon icon-tabler icon-tabler-shopping-cart"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
