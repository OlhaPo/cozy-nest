import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="border-b-2 border-[#814f2d] relative">
      <div className="max-w-[1200px] flex flex-col md:flex-row gap-8 md:gap-32 mx-auto pt-10 pb-30 px-10 md:px-0 md:py-25 items-center text-xl">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-3xl font-medium mb-4">Welcome to cozy nest!</h3>
          <p>
            Here handmade items come to life — recycled fabrics transform into
            tote, drawstring, cosmetic bags and flaxseed pillows, and yarn turns
            into socks, scarves, collars and amigurumi.
          </p>
          <p>
            I put care into every detail, sewing and crocheting in my cozy
            corner while gazing at the thuja trees outside my window.
          </p>
          <p>Inspired by nature, people, cats, and… Pinterest.</p>
          <p>May you feel cozy!</p>
          <div
            style={{
              fontFamily: 'var(--font-caveat), sans-serif',
              fontSize: '40px',
            }}
          >
            <span>— Olya</span>
          </div>
        </div>

        <Image
          src="/about-section-img.jpg"
          width={675}
          height={445}
          alt="image of hands and sewing machine"
          className="md:w-2/3 rounded-s shadow-custom-shadow-img"
        />
      </div>
      <Image
        src="/yarn-ball.svg"
        width={545}
        height={708}
        alt="image of cat walking"
        className="w-8 h-8 md:w-10 md:h-10 absolute bottom-[-2px] right-10 md:left-70"
      />
      <Image
        src="/cat-streching.svg"
        width={500}
        height={500}
        alt="image of cat streching"
        className="w-18 h-18 md:w-22 md:h-22 absolute bottom-[-2px] right-30 md:left-30"
      />
    </section>
  );
}
