"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';
import { type CarouselApi } from "@/components/ui/carousel";

export default function Home() {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        const interval = setInterval(() => {
            api.scrollNext();
        }, 5000); // Autoplay interval in milliseconds

        return () => clearInterval(interval);
    }, [api]);

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Carousel Section */}
                <section className="relative bg-background">
                    <Carousel 
                        className="w-full" 
                        setApi={setApi}
                        opts={{
                            loop: true, // Enable looping
                            align: "start",
                        }}
                    >
                        <div className="absolute top-20 sm:top-20 left-3 sm:left-10 z-10 max-w-[70%] sm:max-w-[500px] text-white bg-black/10 rounded-lg">
                            <div className="p-2 sm:p-4">
                                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-3">Protecting Mongolia's Birds</h2>
                                <p className="text-xs sm:text-lg md:text-xl line-clamp-2 sm:line-clamp-none">Join our conservation efforts to preserve Mongolia's unique bird species and their natural habitats for future generations.</p>
                            </div>
                        </div>
                        <CarouselContent>
                            {[
                                { src: "/birds/Demoiselle Cranes with their chicks.jpg", alt: "Demoiselle Cranes with their chicks" },
                                { src: "/birds/Saker Falcon.jpg", alt: "Saker Falcon" },
                                { src: "/birds/Relict Gull.jpg", alt: "Relict Gull" },
                                { src: "/birds/Amur Falcon adult female, Fairly Common Breeding Visitor to Forest Steppe.JPG", alt: "Amur Falcon adult female" },
                                { src: "/birds/Bunting, Pallas's, adult male, Ugii lake, June, 2014 (9).jpg", alt: "Pallas's Bunting adult male" }
                            ].map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative h-[250px] sm:h-[350px] md:h-[600px] w-full">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute bottom-3 sm:bottom-10 right-3 sm:right-10 z-10 flex flex-col items-end gap-1 sm:gap-2">
                            <div className="bg-black/10 text-white p-2 sm:p-3 rounded-md max-w-[150px] sm:max-w-[250px] text-center">
                                <p className="font-semibold text-xs sm:text-xl">
                                    Give now and your gift goes twice as far
                                </p>
                            </div>
                            <Button size="sm" className="font-bold bg-red-600 text-xs sm:text-base">
                                DONATE NOW
                            </Button>
                        </div>
                    </Carousel>
                </section>

                {/* Footer Links */}
                {/* <section className="border-t py-4 bg-muted/30">
                    <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4">
                        {[
                            { icon: "member", text: "Become a member" },
                            { icon: "gift", text: "Get eNews" },
                            { icon: "contact", text: "Contact Us" },
                            { icon: "calendar", text: "Events" }
                        ].map((link, index) => (
                            <Button key={index} variant="ghost" size="sm" asChild className="h-auto p-2">
                                <Link href="#" className="flex items-center gap-2 text-xs sm:text-sm">
                                    <Image src="/placeholder.svg" alt={link.icon} width={16} height={16} className="sm:w-5 sm:h-5" />
                                    <span className="whitespace-nowrap">{link.text}</span>
                                </Link>
                            </Button>
                        ))}
                    </div>
                </section> */}

                {/* YouTube and Online Guide Section */}
                <section className="py-8 sm:py-12 px-4 bg-background">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Subscribe us on YOUTUBE:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative h-[150px] sm:h-[180px] w-full bg-muted/50 rounded-md overflow-hidden">
                                    <Image 
                                        src="/placeholder.svg" 
                                        alt="YouTube Channel" 
                                        fill 
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button variant="destructive" size="icon" className="h-12 w-12 rounded-full">
                                            <Icons.play className="h-6 w-6" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle>ONLINE GUIDE</CardTitle>
                                <CardDescription>Birds Mongolia</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-2">
                                    <Input type="text" placeholder="Search birds..." className="flex-1" />
                                    <Button size="icon" variant="outline">
                                        <Icons.search className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="relative h-[150px] w-full rounded-md overflow-hidden">
                                    <Image 
                                        src="/placeholder.svg" 
                                        alt="Bird Guide" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Recent News Section */}
                <section className="py-8 sm:py-12 bg-muted/20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Recent news</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <Card key={i} className="overflow-hidden">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="World Migratory Bird Day"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-base">World Migratory Bird Day 2019</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Migratory birds are passengers without a visa across many countries. These birds should not be by cooperative initiative between countries.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="link" size="sm" asChild className="px-0">
                                            <Link href="#">Read more →</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Discover Wild Birds Section */}
                <section className="py-8 sm:py-12 px-4 bg-background">
                    <div className="container mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Discover wild birds in Mongolia</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-800 rounded-t-lg p-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="text-white">
                                    <h3 className="text-md font-bold uppercase mb-2">Bird watching tours in Chingiss Khaan birth place</h3>
                                    <p className="text-sm opacity-90 mb-4">
                                        This will be a very general bird watching and birding tour. Eastern Mongolia has its lakes and rivers, big river valleys, nameless lakes and rivers, Kherlen, Balj, Khurkh, and Ikh nuur and many more.
                                    </p>
                                    <Button variant="link" size="sm" className="px-0 text-white">
                                        <Link href="#">Read more →</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-0 h-[200px] sm:h-[250px] relative rounded-b-lg overflow-hidden">
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
                <section className="py-8 sm:py-12 bg-muted/20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">How you can support us</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {['Shop now', 'Participate Events', 'Book Trips', 'Donate Us'].map((action, i) => (
                                <Card key={i} className="overflow-hidden">
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src="/placeholder.svg"
                                            alt={action}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-base">{action}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Migratory birds are passengers without a visa across many countries.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="link" size="sm" asChild className="px-0">
                                            <Link href="#">Read more →</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
