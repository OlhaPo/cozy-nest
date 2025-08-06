export default function Banner() {
  return (
    <section className="bg-[url('/banner-img.jpg')] shadow-custom-shadow relative bg-cover bg-center h-[600px] w-full">
      <header
        className="text-[#6D4023] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-medium bg-[#F4EFE9]/80 p-16 outline-[#814f2d]/80 outline-2 outline-dashed rounded-md outline-offset-[-16px]"
        style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
      >
        <h1 className="text-8xl">cozy nest</h1>
        <h2 className="text-4xl mt-6 font-semibold text-[#814f2d]">
          simple things with warmth and care
        </h2>
      </header>
    </section>
  );
}
