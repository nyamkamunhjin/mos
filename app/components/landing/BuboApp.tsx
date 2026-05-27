import Image from 'next/image';

export function BuboApp() {
  const appImgError = true;
  const qrImgError = true;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-[#001f6e]/5 blur-2xl rounded-full" />
            {!appImgError ? (
              <Image
                src="/test-landing/stitch/app-mockup.jpg"
                alt="Bubo mobile app"
                width={320}
                height={640}
                className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-2xl"
              />
            ) : (
              <div className="relative z-10 w-[280px] h-[560px] mx-auto drop-shadow-2xl rounded-[2.5rem] border-8 border-[#1a1b21] bg-gradient-to-b from-[#001f6e] to-[#1a368d] flex items-center justify-center">
                <span className="text-white text-6xl font-bold font-[Newsreader,serif]">
                  Bubo
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2 space-y-8">
          <div>
            <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-3 block">
              Digital Field Guide
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-[#001f6e] font-semibold mb-4">
              Download our mobile application
            </h2>
            <h3 className="font-[Manrope,sans-serif] text-3xl text-[#1a368d] font-bold tracking-tight mb-6">
              Bubo
            </h3>
          </div>
          <p className="text-[#444652] text-lg leading-relaxed">
            Identify birds in the field instantly. Bubo provides offline maps,
            professional bird calls, and real-time sighting reporting for every
            species in Mongolia.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="p-4 bg-white border border-[#c5c5d4]/30 rounded-2xl shadow-sm">
              {!qrImgError ? (
                <Image
                  src="/test-landing/stitch/qr-code.png"
                  alt="QR Code to download Bubo App"
                  width={96}
                  height={96}
                  className="w-24 h-24"
                />
              ) : (
                <div className="w-24 h-24 bg-[#f4f2fb] rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#001f6e]">
                    qr_code_scanner
                  </span>
                </div>
              )}
              <p className="text-[10px] text-center font-bold text-[#757683] uppercase tracking-tighter mt-2">
                Scan to Download
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=mn.gosmart.bubo"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/test-landing/stitch/google-play.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-12"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/birds-of-mongolia/id1598051113"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/test-landing/stitch/app-store.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
