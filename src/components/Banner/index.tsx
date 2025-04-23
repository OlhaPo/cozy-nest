export default function Banner() {
  return (
    <section className="bg-[url('/banner-img.jpg')] shadow-custom-shadow relative bg-cover bg-center h-[400px] w-full">
      <header
        className="text-[#65483F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-medium"
        style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
      >
        <h1 className="text-8xl">cozy nest</h1>
        <h2 className="text-4xl mt-6 font-semibold">
          simple things with warmth and care
        </h2>
      </header>
    </section>
  );
}
