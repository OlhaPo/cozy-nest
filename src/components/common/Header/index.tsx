import Image from 'next/image';
import Link from 'next/link';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  return (
    <nav className="flex justify-center items-center gap-10 text-lg uppercase">
      <ul className="flex gap-6 hover:cursor-pointer">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Image src="./logo-bird.svg" width={150} height={150} alt="logo bird" />
      <ul className="flex gap-6 hover:cursor-pointer">
        <li>en</li>
        <li>pl</li>
        <li>ua</li>
      </ul>
    </nav>
  );
}
