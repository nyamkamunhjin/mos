import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TelescopeIcon as Binoculars, Calendar, Heart, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/placeholder.svg`}
              alt="Mongolian Bird Society"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="hidden font-bold sm:inline-block">Mongolian Bird Society</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/birds" className="text-sm font-medium transition-colors hover:text-primary">
              Birds
            </Link>
            <Link href="/expeditions" className="text-sm font-medium transition-colors hover:text-primary">
              Expeditions
            </Link>
            <Button>Donate Now</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/40" />
          <div className="relative h-[70vh] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mos%20web%20site_page-0001%20(1).jpg-PEMJWJQO44CseWgnqQHhQb65873r87.jpeg"
              alt="Mongolian Birds"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Mongolia's Birds
              </h1>
              <p className="mx-auto mb-8 max-w-[600px] text-lg text-gray-200">
                Join us in our mission to protect and preserve Mongolia's unique bird species
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" variant="default">
                  Support Our Cause
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Binoculars className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Bird Watching Tours</h3>
                <p className="text-sm text-muted-foreground">Experience guided tours with expert ornithologists</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Calendar className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Upcoming Events</h3>
                <p className="text-sm text-muted-foreground">Join our educational workshops and field trips</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Heart className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Conservation</h3>
                <p className="text-sm text-muted-foreground">Support our bird conservation initiatives</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Membership</h3>
                <p className="text-sm text-muted-foreground">Become a member and support our mission</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="border-t bg-muted/50">
          <div className="container py-24">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Latest News</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/placeholder.svg`}
                    alt="News"
                    width={400}
                    height={300}
                    className="aspect-video w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">World Migratory Bird Day 2023</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Join us in celebrating the annual migration of birds across continents
                    </p>
                    <Button variant="link" className="p-0">
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container py-24 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Support Our Mission</h2>
            <p className="mx-auto mb-8 max-w-[600px] text-muted-foreground">
              Your contribution helps us protect Mongolia's unique bird species and their habitats
            </p>
            <Button size="lg">Donate Now</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Bird Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Get Involved</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Mongolian Bird Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

