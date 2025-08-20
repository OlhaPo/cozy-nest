import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import { GITHUB_LINK } from './contants';
import useFooterLinks from './hooks/useFooterLinks';

export default function Footer() {
  const links = useFooterLinks();
  return (
    <footer
      className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between flex-wrap py-5 text-xl text-[#5a3620]"
      id="contact"
    >
      <Image
        src="./logo-bird-with-title.svg"
        alt="logo bird with title"
        width={100}
        height={100}
        className="ml-[-17px]"
      />
      <div className="flex flex-col gap-2 hover:cursor-pointer mx-20">
        <h3>Let&apos;s connect</h3>
        <span className="flex gap-4">
          <FaInstagram className="hover:cursor-pointer hover:text-[#c36f4b] hover:scale-120" />
          <FaFacebook className="hover:cursor-pointer hover:text-[#a0522d] hover:scale-120" />
        </span>
      </div>
      <div className="uppercase">
        <ul className="flex flex-col gap-1">
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
      </div>

      <p className="flex-grow text-right pb-8 text-sm">
        Website design & development
        <br /> by {''}
        <a
          href={GITHUB_LINK}
          className="hover:cursor-pointer hover:text-[#c36f4b] hover:underline"
        >
          Olya Po
        </a>
      </p>
    </footer>
  );
}
