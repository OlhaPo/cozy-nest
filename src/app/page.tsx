import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';

// import AboutSection from '@components/components/AboutSection';
// import Banner from '@components/components/Banner';
// import ProductsInStock from '@components/components/ProductsInStock';

import { client } from './sanity/client';
import { urlFor } from './sanity/image';

const PRODUCTS_QUERY = `*[
  _type == "product"
]|order(publishedAt desc)[0...12]{_id, title, productCode, price, image}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const products = await client.fetch<SanityDocument[]>(
    PRODUCTS_QUERY,
    {},
    options
  );
  return (
    <main style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
      {/* <Banner />
      <ProductsInStock />
      <AboutSection /> */}

      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.productCode}</p>
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>
      ))}
    </main>
  );
}
