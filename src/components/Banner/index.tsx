import { getTranslations } from 'next-intl/server';

export default async function Banner() {
  const t = await getTranslations('Banner');

  return (
    <section className="bg-[url('/banner-img.jpg')] shadow-custom-shadow relative bg-cover bg-center h-[500px] md:h-[600px]">
      <header
        className="text-[#6D4023] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-medium bg-[#F4EFE9]/80 px-10 py-12 md:p-16 outline-[#814f2d]/80 outline-2 outline-dashed rounded-md outline-offset-[-16px] w-[70%] md:w-[40%]"
        style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
      >
        <h1 className="text-[40px] md:text-6xl lg:text-8xl tracking-wide text-shadow-lg">
          cozy nest
        </h1>
        <h2 className="text-[22px] md:text-3xl lg:text-4xl mt-6 font-semibold text-[#814f2d] text-shadow-sm">
          {t('subtitle')}
        </h2>
      </header>
    </section>
  );
}
