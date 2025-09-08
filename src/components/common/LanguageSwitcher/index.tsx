'use client';

// eslint-disable-next-line import/named
import { Locale, useLocale } from 'next-intl';

import { usePathname, useRouter } from '@components/i18n/navigation';
import { routing } from '@components/i18n/routing';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // localStorage.setItem('mobileMenuOpen', 'true');

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <ul className="flex gap-6 justify-end md:justify-normal pt-20 md:pt-0 md:pl-28">
      {routing.locales.map((locale) => {
        const isActive = currentLocale === locale;

        return (
          <li key={locale}>
            <button
              onClick={() => handleLanguageChange(locale)}
              className={`hover:cursor-pointer ${
                isActive ? 'text-[#c36f4b] font-semibold' : ''
              }`}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
