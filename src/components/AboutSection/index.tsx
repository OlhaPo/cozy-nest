import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="max-w-[1200px] flex gap-32 mx-auto py-25 items-center text-lg">
      <div className="w-1/2 space-y-4">
        <h3 className="text-2xl font-medium mb-4">Welcome to cozy nest!</h3>
        <p>
          Here handmade items come to life — recycled fabrics transform into
          tote, drawstring, cosmetic bags and flaxseed pillows, and yarn turns
          into socks, scarves, collars and amigurumi.
        </p>
        <p>
          I put care into every detail, sewing and crocheting in my cozy corner
          while gazing at the thuja trees outside my window.
        </p>
        <p>Inspired by nature, people, cats, and… Pinterest.</p>
        <p>May you feel cozy!</p>
        <div>
          <span>— Olya</span>
        </div>
      </div>
      <Image
        src="/about-section-img.jpg"
        width={675}
        height={445}
        alt="image of hands and sewing machine"
        className="w-1/2 rounded-s"
      />
    </section>
  );
}
