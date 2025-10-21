import { getTranslations } from 'next-intl/server';

import { Link } from '@components/i18n/navigation';

export default async function notFound() {
  const t = await getTranslations('Not-found');

  return (
    <div className="h-screen flex flex-col items-center justify-center px-10 md:px-0">
      <h2 className="text-xl md:text-2xl mb-2 font-medium">{t('title')}</h2>
      <p className="text-lg md:text-xl mb-20">{t('paragraph')}</p>
      <Link
        href="/"
        className="hover:cursor-pointer bg-[#814f2d]/90 hover:bg-[#f3f3f3] hover:text-[#814f2d] text-[#f3f3f3] border-1 border-[#6D4023] text-lg md:text-xl px-5 py-5 rounded-md tracking-wider font-medium transition-all duration-200"
      >
        {t('link-home')}
      </Link>
    </div>
  );
}
