import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function DiscoverBirds() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] text-center mb-16 font-semibold">
        Discover wild birds in Mongolia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            img: '/test-landing/taiga.jpg',
            alt: 'Aerial drone shot of the Khuvsgul Taiga forest',
          },
          {
            img: '/test-landing/altai.jpg',
            alt: 'Rugged mountain pass in the Altai range',
          },
          {
            img: '/test-landing/gobi.jpg',
            alt: 'Sun-baked clay dunes of the Gobi desert',
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-[Newsreader,serif] text-2xl text-[#001f6e] uppercase text-sm font-bold tracking-tight">
              BIRD WATCHING TOURS IN CHINGGIS KHAAN BIRTH PLACE
            </h3>
            <p className="text-[#444652] leading-relaxed text-sm">
              {i === 0 &&
                'This will be a very general bird watching and filming tours Eastern Mongolian forest, forest steppe, plain, steppe lakes and rivers, big river valleys namely Onon, Balj, Khurkh, and Ulz rivers and Chingis khaan birth place.'}
              {i === 1 &&
                'Explore the majestic landscapes of Eastern Mongolia and witness the diverse birdlife that calls this historic region home.'}
              {i === 2 &&
                'Professional guided tours through the heart of the Mongolian wilderness, specifically designed for ornithologists and nature photographers.'}
            </p>
            <Button
              href="/birds"
              variant="link"
              className="text-xs tracking-wide"
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
