/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Carousel Section */}
                <section className="relative bg-white">
                    <div className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full">
                        <Image
                            src="/placeholder.svg"
                            alt="Cranes in Mongolia"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-bold">
                            DONATE NOW
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <div className="flex justify-center space-x-1">
                                {[1, 2, 3, 4, 5].map(dot => (
                                    <div 
                                        key={dot} 
                                        className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Links */}
                <section className="border-t border-gray-200 py-4">
                    <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-8 px-4">
                        <Link href="#" className="flex items-center text-xs sm:text-sm text-blue-700">
                            <Image src="/placeholder.svg" alt="Member" width={16} height={16} className="mr-1 sm:w-5 sm:h-5" />
                            <span className="whitespace-nowrap">Become a member</span>
                        </Link>
                        <Link href="#" className="flex items-center text-xs sm:text-sm text-blue-700">
                            <Image src="/placeholder.svg" alt="Gift" width={16} height={16} className="mr-1 sm:w-5 sm:h-5" />
                            <span className="whitespace-nowrap">Get eNews</span>
                        </Link>
                        <Link href="#" className="flex items-center text-xs sm:text-sm text-blue-700">
                            <Image src="/placeholder.svg" alt="Contact" width={16} height={16} className="mr-1 sm:w-5 sm:h-5" />
                            <span className="whitespace-nowrap">Contact Us</span>
                        </Link>
                        <Link href="#" className="flex items-center text-xs sm:text-sm text-blue-700">
                            <Image src="/placeholder.svg" alt="Calendar" width={16} height={16} className="mr-1 sm:w-5 sm:h-5" />
                            <span className="whitespace-nowrap">Events Us</span>
                        </Link>
                    </div>
                </section>

                {/* YouTube and Online Guide Section */}
                <section className="py-6 sm:py-8 px-4">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="border border-gray-200 p-3 sm:p-4">
                            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Subscribe us on YOUTUBE:</h2>
                            <div className="relative h-[120px] sm:h-[150px] w-full bg-gray-200">
                                <Image 
                                    src="/placeholder.svg" 
                                    alt="YouTube Channel" 
                                    fill 
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-red-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-10 sm:border-l-12 border-l-white border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 p-3 sm:p-4">
                            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">ONLINE GUIDE</h2>
                            <h3 className="text-base sm:text-lg mb-3 sm:mb-4">Birds Mongolia</h3>
                            <div className="flex mb-3 sm:mb-4">
                                <input type="text" className="border border-gray-300 px-2 py-1 w-full" />
                                <Button size="sm" variant="default" className="bg-gray-200 text-black border border-gray-300 ml-1">
                                    <Icons.search className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="relative h-[120px] sm:h-[150px] w-full">
                                <Image 
                                    src="/placeholder.svg" 
                                    alt="Bird Guide" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent News Section */}
                <section className="py-6 sm:py-8 bg-white px-4">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Recent news</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="border border-gray-200">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="World Migratory Bird Day"
                                        width={400}
                                        height={200}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-sm font-bold mb-2">World Migratory Bird Day 2019</h3>
                                        <p className="text-xs mb-4">
                                            Migratory birds are passengers without a visa across many countries. These birds should not be by cooperative initiative between countries.
                                        </p>
                                        <Link href="#" className="text-xs text-blue-700">
                                            Read more ≫≫
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Discover Wild Birds Section */}
                <section className="py-6 sm:py-8 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Discover wild birds in Mongolia</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-gray-700">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 text-white">
                                    <h3 className="text-md font-bold uppercase mb-2">Bird watching tours in Chingiss Khaan birth place</h3>
                                    <p className="text-xs mb-4">
                                        This will be a very general bird watching and birding tour. Eastern Mongolia has its lakes and rivers, big river valleys, nameless lakes and rivers, Kherlen, Balj, Khurkh, and Ikh nuur and many more.
                                    </p>
                                    <Link href="#" className="text-xs text-white">
                                        Read more ≫≫
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 sm:mt-8 h-[150px] sm:h-[200px] relative">
                            <Image 
                                src="/placeholder.svg" 
                                alt="Mongolian Bird" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* How You Can Support Us Section */}
                <section className="py-6 sm:py-8 bg-white px-4">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">How you can support us</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {['Shop now', 'Participate Events', 'Book Trips', 'Donate Us'].map((action, i) => (
                                <div key={i} className="border border-gray-200">
                                    <Image
                                        src="/placeholder.svg"
                                        alt={action}
                                        width={300}
                                        height={150}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-sm font-bold mb-2">{action}</h3>
                                        <p className="text-xs mb-4">
                                            Migratory birds are passengers without a visa across many countries.
                                        </p>
                                        <Link href="#" className="text-xs text-blue-700">
                                            Read more ≫≫
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
