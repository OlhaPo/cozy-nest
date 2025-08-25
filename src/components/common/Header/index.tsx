'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      className="text-xl relative shadow-custom-shadow"
      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
    >
      <div className="hidden max-w-[1200px] md:mx-auto md:flex md:items-center md:flex-wrap md:justify-between text-[#5a3620] font-medium uppercase">
        <ul className="flex gap-6 hover:cursor-pointer">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:cursor-pointer hover:text-[#c36f4b] hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Image src="/logo-bird.svg" width={150} height={150} alt="logo bird" />

        <ul className="flex gap-6 pl-28">
          <li className="hover:cursor-pointer hover:text-[#c36f4b]">en</li>
          <li className="hover:cursor-pointer hover:text-[#c36f4b]">pl</li>
          <li className="hover:cursor-pointer hover:text-[#c36f4b]">ua</li>
        </ul>
      </div>

      <div className="flex justify-between px-8 md:hidden">
        <Image src="/logo-bird.svg" width={90} height={90} alt="logo bird" />
        <button onClick={handleMobileMenu}>
          {!isMobileMenuOpen && <MdMenu size={35} />}
          {isMobileMenuOpen && <MdClose size={35} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full p-8 h-screen z-1000 flex flex-col border-t-2 border-[#814f2d]/80 border-dashed uppercase bg-[#e8e1d6]">
          <ul className="flex flex-col gap-4 text-right my-20">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:cursor-pointer hover:text-[#c36f4b] hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6 justify-end">
            <li className="hover:cursor-pointer hover:text-[#c36f4b]">en</li>
            <li className="hover:cursor-pointer hover:text-[#c36f4b]">pl</li>
            <li className="hover:cursor-pointer hover:text-[#c36f4b]">ua</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
