import Image from 'next/image';

import heartSvg from '@components/assets/heart.svg';

export default function ProductsInStock() {
  return (
    <section className="border-b-2 border-dashed border-[#814f2d] relative">
      <div className="max-w-[1200px] mx-auto py-25 text-center text-xl">
        <h3 className="uppercase text-4xl font-medium mb-4">
          products in stock
        </h3>{' '}
        <div className="flex justify-center gap-1">
          <p>
            Here you can see what items are currently available. Hopefully you
            could find yours!
          </p>
          <Image src={heartSvg} width={20} height={20} alt="icon heart" />
        </div>
      </div>

      <Image
        src="/cat-walking.svg"
        width={800}
        height={736}
        alt="image of cat walking"
        className="w-18 h-18 absolute bottom-[-6px] right-70"
      />
      <Image
        src="/sewing-machine.svg"
        width={512}
        height={469}
        alt="image of sewing machine"
        className="w-22 h-22 absolute bottom-[-4px] right-30"
      />
    </section>
  );
}
