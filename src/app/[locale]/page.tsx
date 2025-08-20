import AboutSection from '@components/components/AboutSection';
import Banner from '@components/components/Banner';
import ProductsInStock from '@components/components/ProductsInStock';

export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
      <Banner />
      <AboutSection />
      <ProductsInStock />
    </main>
  );
}
