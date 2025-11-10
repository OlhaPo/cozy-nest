import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function AboutSection() {
  const t = await getTranslations('About');

  return (
    <section className="border-b-2 border-[#814f2d] relative" id="about">
      <div className="max-w-[1200px] flex flex-col md:flex-row gap-8 xl:gap-32 mx-auto pt-10 pb-30 px-10 md:px-20 xl:px-0 md:pt-25 md:pb-40 items-center md:items-start xl:items-center text-lg md:text-xl">
        <div className="md:w-1/2 space-y-2 md:space-y-4">
          <h3 className="text-[28px] font-medium mb-4">{t('title')}</h3>
          <p>{t('paragraph-1')}</p>
          <p>{t('paragraph-2')}</p>
          <p>{t('paragraph-3')}</p>
          <p>{t('paragraph-4')}</p>
          <p
            style={{
              fontFamily: 'var(--font-caveat), sans-serif',
            }}
            className="text-right md:text-left text-[40px]"
          >
            {t('ending')}
          </p>
        </div>

        <Image
          src="/about-section-img.jpg"
          width={675}
          height={445}
          alt="image of hands and sewing machine"
          className="md:w-2/3 rounded-s shadow-custom-shadow-img"
        />
      </div>
      <Image
        src="/yarn-ball.svg"
        width={545}
        height={708}
        alt="image of cat walking"
        className="w-8 h-8 md:w-10 md:h-10 absolute bottom-[-2px] right-[55%] xl:left-70"
      />
      <Image
        src="/cat-streching.svg"
        width={500}
        height={500}
        alt="image of cat streching"
        className="w-18 h-18 md:w-22 md:h-22 absolute bottom-[-2px] right-[73%] xl:left-30"
      />
    </section>
  );
}
