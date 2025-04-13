import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative shadow-custom-shadow">
      <Image
        src="/banner-img.jpg"
        width={1440}
        height={400}
        alt="banner image"
        className="w-full"
      />
      <header
        className="text-[#4C4A3F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
      >
        <h1 className="text-[100px] text-8xl">cozy nest</h1>
        <h2 className="text-4xl mt-6 font-semibold">
          simple things with warmth and care
        </h2>
      </header>
    </section>
  );
}
