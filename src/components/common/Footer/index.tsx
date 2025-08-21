import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import { Link } from '@components/i18n/navigation';

import { GITHUB_LINK, INSTAGRAM_LINK, FB_LINK } from './contants';
// import useFooterLinks from './hooks/useFooterLinks';

export default function Footer() {
  // const links = useFooterLinks();
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#e8e1d6] text-xl" id="contact">
      <div className="max-w-[1200px] py-3 md:pt-10 md:pb-5 md:mx-auto flex flex-col items-end md:items-stretch md:flex-row md:justify-between gap-8 md:gap-0 px-10 md:px-0">
        <Link
          href="/"
          className="cursor-pointer hover:scale-115 transition-transform duration-200"
        >
          <Image
            src="/logo-bird-with-title.svg"
            alt="logo bird with title"
            width={120}
            height={120}
            className="md:ml-[-17px] md:-mt-5 hidden md:block"
          />
        </Link>
        <div className="flex flex-col items-end md:items-start gap-3 hover:cursor-pointer md:mx-20">
          <h3 className="uppercase">{t('social-media')}</h3>
          <span className="flex gap-5">
            <a href={INSTAGRAM_LINK}>
              <FaInstagram
                className="hover:cursor-pointer hover:text-[#c36f4b] transition-transform duration-200 hover:scale-130"
                size={25}
              />
            </a>
            <a href={FB_LINK}>
              <FaFacebook
                className="hover:cursor-pointer hover:text-[#c36f4b] transition-transform duration-200 hover:scale-130"
                size={25}
              />
            </a>
          </span>
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
        <p className="md:flex-grow text-right md:text-right md:pb-8 text-sm md:text-base font-medium">
          {t('website-credits')}
          <br />
          <a
            href={GITHUB_LINK}
            className="hover:cursor-pointer hover:text-[#c36f4b] hover:underline"
          >
            {t('website-credits-name')}
          </a>
        </p>
      </div>
    </footer>
  );
}
