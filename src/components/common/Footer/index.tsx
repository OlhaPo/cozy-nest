import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaInstagram, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';

import { Link } from '@components/i18n/navigation';

import {
  LINKEDIN_LINK,
  INSTAGRAM_LINK,
  FB_LINK,
  EMAIL,
  FB_MESSENGER,
} from './contants';
// import useFooterLinks from './hooks/useFooterLinks';

export default function Footer() {
  // const links = useFooterLinks();
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#e8e1d6] text-base lg:text-xl" id="contacts">
      <div className="max-w-[1200px] py-10 md:py-6 lg:py-10 md:mx-auto flex flex-col items-end md:items-stretch md:flex-row md:justify-between gap-8 md:gap-0 px-10 md:px-20 xl:px-0">
        <Link
          href="/"
          className="cursor-pointer hover:scale-115 transition-transform duration-200 hidden md:block"
        >
          <Image
            src="/logo-with-title.svg"
            alt="logo cat with title"
            width={100}
            height={100}
            className="lg:w-30 lg:h-30 xl:w-36 xl:h-36 md:ml-[-17px] md:-mt-2 lg:-mt-5"
          />
        </Link>
        <div className="flex flex-col items-end md:items-start gap-2 md:gap-3 hover:cursor-pointer md:mx-5 lg:mx-10 xl:mx-20">
          <h3 className="uppercase">{t('social-media')}</h3>
          <span className="flex gap-5 md:gap-4 lg:gap-5">
            <a href={INSTAGRAM_LINK}>
              <FaInstagram
                className="hover:cursor-pointer hover:text-[#c36f4b] transition-transform duration-200 hover:scale-130 lg:w-6.5 lg:h-6.5"
                size={20}
              />
            </a>
            <a href={FB_LINK}>
              <FaFacebook
                className="hover:cursor-pointer hover:text-[#c36f4b] transition-transform duration-200 hover:scale-130 lg:w-6.5 lg:h-6.5"
                size={20}
              />
            </a>
            <a href={FB_MESSENGER}>
              <FaFacebookMessenger
                className="hover:cursor-pointer hover:text-[#c36f4b] transition-transform duration-200 hover:scale-130 lg:w-6.5 lg:h-6.5"
                size={20}
              />
            </a>
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:cursor-pointer hover:text-[#c36f4b] text-base md:text-[12px] lg:text-base"
          >
            {' '}
            {EMAIL}
          </a>
        </div>

        {/* <ul className="flex flex-col gap-1"> */}
        <Link
          href="/how-to-order"
          className="hover:cursor-pointer hover:text-[#c36f4b] hover:underline uppercase"
        >
          {t('how-to-order')}
        </Link>
        {/* <div className="uppercase"><ul>
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
        </ul> </div>*/}
        <p className="md:flex-grow text-right md:text-right text-[12px] lg:text-base font-medium  md:mt-1">
          {t('website-credits')}
          <br />
          <a
            href={LINKEDIN_LINK}
            className="hover:cursor-pointer text-[#814f2d] hover:text-[#c36f4b] underline"
          >
            {t('website-credits-name')}
          </a>
        </p>
      </div>
    </footer>
  );
}
