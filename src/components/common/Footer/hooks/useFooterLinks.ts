import { useTranslations } from 'next-intl';

const useFooterLinks = () => {
  const t = useTranslations('Footer');

  const links = [
    { label: t('how-to-order'), href: '/how-to-order' },
    // { label: 'shipping & returns', href: '/shipping-and-returns' },
  ];
  return links;
};

export default useFooterLinks;
