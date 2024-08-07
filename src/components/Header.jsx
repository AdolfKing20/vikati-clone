"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../images/logo-vikati-300x81.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInicio, setisOpenInicio] = useState(false);
  const [isOpenAbout, setisOpenAbout] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () =>{
    setisOpenInicio(!isOpenInicio)
  }
  const toggleDropdown2 = () =>{
    setisOpenAbout(!isOpenAbout)
  }
  return (
    <>
      <header className='bg-white'>
        <nav className="flex justify-between px-4 items-center py-2">
          <div>
            <button className="border-none " onClick={toggleDropdown}>
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

            {isOpen && (
              <aside className=' fixed w-96 left-0 h-full bg-slate-200 z-20 md:z-[-1]'>
                <ul className='mt-4 flex flex-col gap-4'>
                  <li className='font-semibold text-2xl uppercase flex flex-col pl-4'>
                     <Link href="/">Inicio</Link>
                  </li>
                  <li className='font-semibold text-2xl uppercase flex flex-col pl-4'>
                     <span className='botonmenu'>
                     <Link href={"/allproducts"}>Productos</Link>
                      <button onClick={toggleDropdown1}>
                      <svg  class="icon icon-tabler icon-tabler-selector" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l4 -4l4 4" />
  <path d="M16 15l-4 4l-4 -4" />
</svg>
                      </button>
                     </span>

                      {isOpenInicio && (
                        <ul className='flex flex-col gap-2 mt-2'>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">Ver Todos</a>
                          </li>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">Remeras</a>
                          </li>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">Pantalones y Shorts</a>
                          </li>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">Shorts de baño</a>
                          </li>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">Hoodies / buzos</a>
                          </li>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">Accesorios</a>
                          </li>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/productos">boxers</a>
                          </li>
                            
                        </ul>
                      )}
                  </li>
                  <li className='font-semibold text-2xl uppercase flex flex-col pl-4'>
                     <span className='botonmenu'>
                     <Link href={"/allproducts"}>Institucional</Link>
                      <button onClick={toggleDropdown2}>
                      <svg  class="icon icon-tabler icon-tabler-selector" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l4 -4l4 4" />
  <path d="M16 15l-4 4l-4 -4" />
</svg>
                      </button>
                     </span>

                      {isOpenAbout && (
                        <ul className='flex flex-col gap-2 mt-2'>
                          <li className='px-5 text-[#202020] hover:text-black uppercase'>
                            <a href="/about">sobre nosotros</a>
                          </li>
                        </ul>
                      )}
                  </li>
                  <li className='font-semibold text-2xl uppercase flex flex-col pl-4'>
                     <span className='botonmenu'>
                     <Link href={"/contacto"}>Contacto</Link>
                     </span>
                  </li>
                </ul>
              </aside>
            )}
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
