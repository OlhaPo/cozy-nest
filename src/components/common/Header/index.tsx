import Image from 'next/image';
import Link from 'next/link';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  return (
    <nav
      className="text-lg uppercase z-10 relative shadow-custom-shadow"
      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center flex-wrap justify-between">
        <ul className="flex gap-6 hover:cursor-pointer">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/">
          <Image
            src="./logo-bird.svg"
            width={150}
            height={150}
            alt="logo bird"
          />
        </Link>

        <ul className="flex gap-6 hover:cursor-pointer pl-28">
          <li>en</li>
          <li>pl</li>
          <li>ua</li>
        </ul>
      </div>
    </nav>
  );
}
