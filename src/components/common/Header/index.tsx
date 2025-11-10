'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { Link } from '@components/i18n/navigation';

import LanguageSwitcher from '../LanguageSwitcher';
import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('Mobile-menu');

  // useEffect(() => {
  //   const saveOpenMenuState = localStorage.getItem('mobileMenuOpen');
  //   if (saveOpenMenuState === 'true') {
  //     setIsMobileMenuOpen(true);
  //     localStorage.removeItem('mobileMenuOpen');
  //   }
  // }, []);

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
      className="text-base lg:text-xl relative shadow-custom-shadow"
      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
    >
      <div className="hidden max-w-[1200px] md:px-20 xl:px-0 md:mx-auto md:flex md:items-center md:flex-wrap md:justify-between text-[#5a3620] font-medium uppercase py-6">
        <ul className="flex gap-4 lg:gap-6 hover:cursor-pointer">
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
        <Image src="/logo.svg" width={90} height={90} alt="logo cat" />
        <LanguageSwitcher />
      </div>

      <div className="flex justify-between px-8 md:hidden py-4">
        <Image src="/logo.svg" width={70} height={70} alt="logo cat" />
        <button onClick={handleMobileMenu}>
          {!isMobileMenuOpen && <MdMenu size={35} />}
          {isMobileMenuOpen && <MdClose size={35} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full p-8 h-[calc(100vh-90px)] justify-between z-1000 flex flex-col border-t-2 border-[#814f2d]/80 border-dashed uppercase bg-[#e8e1d6]">
          <div>
            <ul className="flex flex-col gap-4 text-right pt-10">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:cursor-pointer hover:text-[#c36f4b] hover:underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>

          <div className="flex justify-center gap-2">
            <Image
              src="/pawprints.svg"
              width={25}
              height={25}
              alt="cat paw print"
            />
            <p className="normal-case">{t('mobile-menu-footer')}</p>
          </div>
        </div>
      )}
    </nav>
  );
}
