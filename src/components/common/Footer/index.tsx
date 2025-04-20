import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import { GITHUB_LINK } from './contants';
import useFooterLinks from './hooks/useFooterLinks';

export default function Footer() {
  const links = useFooterLinks();
  return (
    <footer className="max-w-[1200px] mx-auto flex flex-cols items-center justify-between flex-wrap">
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
          <FaInstagram />
          <FaFacebook />
        </span>
      </div>
      <div className="uppercase">
        <ul className="flex flex-col hover:cursor-pointer">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="flex-grow text-right pb-8 text-xs">
        Website design & development
        <br /> by {''}
        <a href={GITHUB_LINK}>Olya Po</a>
      </p>
    </footer>
  );
}
