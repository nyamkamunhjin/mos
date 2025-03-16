import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        <div>
          <h3 className="text-sm font-bold mb-2">About us</h3>
          <ul className="text-xs space-y-1">
            <li><Link href="#" className="hover:underline">Mission</Link></li>
            <li><Link href="#" className="hover:underline">History</Link></li>
            <li><Link href="#" className="hover:underline">Structure</Link></li>
            <li><Link href="#" className="hover:underline">Staff</Link></li>
            <li><Link href="#" className="hover:underline">Board</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-2">Activities</h3>
          <ul className="text-xs space-y-1">
            <li><Link href="#" className="hover:underline">Tours</Link></li>
            <li><Link href="#" className="hover:underline">Research</Link></li>
            <li><Link href="#" className="hover:underline">Conservation</Link></li>
            <li><Link href="#" className="hover:underline">Education</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-2">Publications</h3>
          <ul className="text-xs space-y-1">
            <li><Link href="#" className="hover:underline">Bird Census</Link></li>
            <li><Link href="#" className="hover:underline">Field Guide</Link></li>
            <li><Link href="#" className="hover:underline">Brochures</Link></li>
            <li><Link href="#" className="hover:underline">Fact Sheets</Link></li>
            <li><Link href="#" className="hover:underline">Publications</Link></li>
            <li><Link href="#" className="hover:underline">Reports</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-2">Support</h3>
          <ul className="text-xs space-y-1">
            <li><Link href="#" className="hover:underline">Be a member</Link></li>
            <li><Link href="#" className="hover:underline">Donate</Link></li>
            <li><Link href="#" className="hover:underline">Shop for us</Link></li>
            <li><Link href="#" className="hover:underline">Volunteer</Link></li>
            <li><Link href="#" className="hover:underline">Partnerships</Link></li>
            <li><Link href="#" className="hover:underline">Corporate support</Link></li>
            <li><Link href="#" className="hover:underline">Book tours</Link></li>
          </ul>
        </div>
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
          <h3 className="text-sm font-bold mb-2">Address</h3>
          <p className="text-xs mb-2">
            Postal address: P.O.Box 537, Ulaanbaatar 210646A,
          </p>
          <p className="text-xs mb-4">
            11th floor, Astra building-19, Sukhbaatar district-8,
            Ulaanbaatar, MONGOLIA.
          </p>
          <p className="text-xs mb-2">
            Web site: <Link href="http://www.mos.mn" className="hover:underline">http://www.mos.mn</Link>
          </p>
          <p className="text-xs mb-2">
            E-mail: info@mos.mn; mongolianbirds@mail.com
          </p>
          <p className="text-xs mb-4">
            Phone: 976-9810 0148, 976-98092223
          </p>
          <p className="text-xs mt-4">
            Copyright © 2025 Mongolian Ornithological Society
          </p>
        </div>
      </div>
    </footer>
  );
} 