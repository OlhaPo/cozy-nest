import { useTranslations } from 'next-intl';

const useNavLinks = () => {
  const t = useTranslations('Navigation');

  const links = [
    { label: t('about'), href: '/#about' },
    { label: t('in-stock'), href: '/#in-stock' },
    { label: t('contact'), href: '/#contacts' },
  ];
  return links;
};

export default useNavLinks;
