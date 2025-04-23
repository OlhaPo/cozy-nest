import Image from 'next/image';

import heartSvg from '@components/assets/heart.svg';

export default function ProductsInStock() {
  return (
    <section className="max-w-[1200px] mx-auto py-25 text-center text-lg">
      <h3 className="uppercase text-3xl font-medium mb-4">products in stock</h3>{' '}
      <div className="flex justify-center gap-1">
        <p>
          Here you can see what items are currently available. Hopefully you
          could find yours!
        </p>
        <Image src={heartSvg} width={20} height={20} alt="icon heart" />
      </div>
    </section>
  );
}
