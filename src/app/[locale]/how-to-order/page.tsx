import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HowToOrderPage() {
  const t = useTranslations('How-to-order');
  return (
    <div className="max-w-[1200px] flex-grow py-15 px-10 md:px-20 xl:px-0 md:py-30 mx-auto text-lg md:text-xl">
      <p>{t('paragraph-1')}</p>
      <div className="text-[15px] md:text-[20px] my-5 md:mt-15">
        <div className="order-step">
          <div className="step-number">
            <Image
              src="/number-1.svg"
              width={15}
              height={15}
              alt="number 1"
              className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
          </div>
          <p>{t('step-1')}</p>
        </div>
        <div className="order-step">
          <div className="step-number">
            <Image
              src="/number-2.svg"
              width={15}
              height={15}
              alt="number 2"
              className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
          </div>
          <p>{t('step-2')}</p>
        </div>
        <div className="order-step">
          <div className="step-number">
            <Image
              src="/number-3.svg"
              width={15}
              height={15}
              alt="number 3"
              className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
          </div>
          <p>{t('step-3')}</p>
        </div>
      </div>
      <p className="pb-5">{t('paragraph-2')}</p>
      <p>{t('paragraph-3')}</p>
    </div>
  );
}
