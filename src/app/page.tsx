import AboutSection from '@components/components/AboutSection';
import Banner from '@components/components/Banner';

export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
      <Banner />
      <section className="shadow-custom-shadow relative h-screen">
        header products in stock. paragrap what products are represented. sanity
        + cloudinary
      </section>
      <AboutSection />
    </main>
  );
}
