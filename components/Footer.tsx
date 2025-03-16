import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        <div>
          <h3 className="text-base font-bold mb-3 uppercase tracking-wide">About us</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Mission</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">History</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Structure</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Staff</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Board</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold mb-3 uppercase tracking-wide">Activities</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Tours</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Research</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Conservation</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Education</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold mb-3 uppercase tracking-wide">Publications</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Bird Census</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Field Guide</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Brochures</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Fact Sheets</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Publications</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Reports</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold mb-3 uppercase tracking-wide">Support</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Be a member</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Donate</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Shop for us</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Volunteer</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Partnerships</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Corporate support</Link></li>
            <li><Link href="#" className="hover:underline hover:text-white/90 transition-colors">Book tours</Link></li>
          </ul>
        </div>
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
          <h3 className="text-base font-bold mb-3 uppercase tracking-wide">Address</h3>
          <p className="text-sm mb-3">
            Postal address: P.O.Box 537, Ulaanbaatar 210646A,
          </p>
          <p className="text-sm mb-4">
            11th floor, Astra building-19, Sukhbaatar district-8,
            Ulaanbaatar, MONGOLIA.
          </p>
          <p className="text-sm mb-3">
            Web site: <Link href="http://www.mos.mn" className="hover:underline hover:text-white/90 transition-colors">http://www.mos.mn</Link>
          </p>
          <p className="text-sm mb-3">
            E-mail: info@mos.mn; mongolianbirds@mail.com
          </p>
          <p className="text-sm mb-4">
            Phone: 976-9810 0148, 976-98092223
          </p>
          <p className="text-sm mt-6 border-t border-white/20 pt-4">
            Copyright © 2025 Mongolian Ornithological Society
          </p>
        </div>
      </div>
    </footer>
  );
} 