import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <header
      className="relative h-[480px] sm:h-[560px] md:h-[921px] w-full overflow-hidden flex flex-col justify-center items-center text-center px-6"
      style={{ clipPath: 'ellipse(85% 100% at 50% 0%)' }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/test-landing/hero.jpg"
          alt="Majestic White-naped Crane standing in golden Mongolian marshland at sunrise"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="relative z-10 max-w-4xl">
        <span className="text-white font-[Manrope,sans-serif] tracking-[0.2em] text-sm uppercase mb-4 block [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_1px_10px_rgba(0,0,0,0.3)]">
          Est. 1999 &bull; Ulaanbaatar
        </span>
        <h1 className="font-[Newsreader,serif] text-3xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight font-medium [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_1px_10px_rgba(0,0,0,0.3)]">
          Give now and your gift goes twice as far
        </h1>
        <p className="text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_1px_10px_rgba(0,0,0,0.3)]">
          Your support helps us protect Mongolia&apos;s birds and their habitats.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/donate" variant="outline" size="pill" className="bg-[#faf8ff] text-[#001f6e] border-0 hover:bg-[#1a368d] hover:text-white shadow-lg">
            DONATE NOW
          </Button>
          <span className="bg-white/10 border border-white/40 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold cursor-default select-none">
            Learn More
          </span>
        </div>
      </div>
    </header>
  );
}
