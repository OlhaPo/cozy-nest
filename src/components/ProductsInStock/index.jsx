import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from "next/link";
import getProductsFromStrapi from './hooks/getProductsFromStrapi.hook.js';
import ImagesWrapper from '@components/components/common/ImagesWrapper/index.jsx';

export default async function ProductsInStock() {
  const products = await getProductsFromStrapi();
  const t = await getTranslations('In-stock');

  return (
    <section className="border-b-2 border-dashed border-[#814f2d] relative" id="in-stock">
      <div className="max-w-[1200px] mx-auto px-10 pt-10 pb-30 md:px-0 md:py-25 text-lg text-center md:text-xl">
        <h3 className="uppercase text-[28px] md:text-4xl font-medium mb-4">
          {t('title')}
        </h3>{' '}
        <div className="mb-10">
          <p>
           {t('paragraph-1')}
            <Image
              src="/heart.svg"
              width={16}
              height={16}
              alt="icon heart"
              className="md:w-[20px] md:h-[20px] inline-block ml-2 mb-1"
            />
          </p>          
        </div>
        <ImagesWrapper
          options={{
            // theme: "light",
              Carousel: {
                infinite: true,
          },
        }}>       
            {products.map((product) => (<div key={product.id} className='w-full aspect-[1/1] md:w-[350px] shadow-custom-shadow-img' >
             <Link href={product.images[0].formats.large.url} data-fancybox="gallery"><Image src={product.images[0].formats.large.url} width={500} height={350} className='w-full h-full object-cover' alt={product.name} /></Link></div>
            ))}
          </ImagesWrapper>
     
      </div>

      <Image
        src="/cat-walking.svg"
        width={800}
        height={736}
        alt="image of cat walking"
        className="w-15 h-15 md:w-18 md:h-18 absolute bottom-[-6px] right-[75%] md:right-70"
      />
      <Image
        src="/sewing-machine.svg"
        width={512}
        height={469}
        alt="image of sewing machine"
        className="w-19 h-19 md:w-22 md:h-22 absolute bottom-[-4px] right-[10%] md:right-30"
      />
    </section>
  );
}
