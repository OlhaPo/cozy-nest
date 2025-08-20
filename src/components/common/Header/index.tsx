import Image from 'next/image';
import Link from 'next/link';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  return (
    <nav
      className="text-xl uppercase z-10 relative shadow-custom-shadow"
      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center flex-wrap justify-between text-[#5a3620] font-medium">
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
        <Link href="/">
          <Image
            src="./logo-bird.svg"
            width={150}
            height={150}
            alt="logo bird"
          />
        </Link>

        <ul className="flex gap-6 pl-28">
          <li className="hover:cursor-pointer hover:text-[#c36f4b]">en</li>
          <li className="hover:cursor-pointer hover:text-[#c36f4b]">pl</li>
          <li className="hover:cursor-pointer hover:text-[#c36f4b]">ua</li>
        </ul>
      </div>
    </nav>
  );
}
