"use client"

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

interface HeaderProps {
  isAbsolute?: boolean;
}

export function Header({ isAbsolute = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<{[key: string]: boolean}>({});
  
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Define menu items with their children for reuse in both desktop and mobile
  const menuItems = [
    {
      id: "introduction",
      title: "INTRODUCTION",
      children: [
        { title: "Overview", description: "Overview of the Mongolian Ornithological Society", href: "/overview" },
        { title: "Message", description: "Message from the Director of the Mongolian Ornithological Society", href: "/message" },
        { title: "Members", description: "Join our community of bird enthusiasts", href: "/members" },
        { title: "Education", description: "Educational resources and programs", href: "#" },
        { title: "Research", description: "Research and publications", href: "#" },
        { title: "Events", description: "Upcoming events and activities", href: "#" }
      ]
    },
    {
      id: "birds-mongolia",
      title: "BIRDS MONGOLIA",
      children: [
        { title: "Bird Identification", description: "Identify birds across Mongolia", href: "#" },
        { title: "Habitat", description: "Birds organized by their natural habitats", href: "#" },
        { title: "Rarity", description: "Discover rare and endangered species", href: "#" },
        { title: "Taxonomic Order", description: "Browse birds by scientific classification", href: "#" },
        { title: "Publication", description: "Reference materials and field guides", href: "#" },
        { title: "Reports", description: "Research findings and annual reports", href: "#" }
      ]
    },
    {
      id: "expeditions",
      title: "EXPEDITIONS",
      children: [
        { title: "Steppe Landscape", description: "Explore the rich birdlife of the Mongolian steppes", href: "#" },
        { title: "High Mountain", description: "Discover birds in Mongolia's mountainous terrain", href: "#" },
        { title: "Taiga & Dads", description: "Bird expeditions in northern forest regions", href: "#" },
        { title: "Guided Tours", description: "Join expert-led birding expeditions", href: "#" },
        { title: "Custom Trips", description: "Design your own birding adventure", href: "#" },
        { title: "Photography Tours", description: "Specialized tours for bird photographers", href: "#" },
        { title: "Research Expeditions", description: "Participate in scientific field work", href: "#" }
      ]
    },
    {
      id: "bird-forum",
      title: "BIRD FORUM",
      href: "#",
      noChildren: true
    },
    {
      id: "blog-news",
      title: "BLOG NEWS",
      href: "#",
      noChildren: true
    }
  ];

  return (
<header className={cn(
  "w-full shadow-sm",
  isAbsolute && "absolute top-0 left-0 right-0 z-50"
)}>
      {/* Main header with logo, navigation and action buttons */}
      <div className={cn(
        "w-full py-2 px-4 sm:px-6",
        !isAbsolute && "bg-gradient-to-r from-blue-600 to-blue-800",
        isAbsolute && "bg-black/30 backdrop-blur-sm"
      )}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            {/* Logo and action buttons */}
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-2">
                    <Image
                      src="/logo.png"
                      alt="Mongolian Ornithological Society"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 40px, 48px"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap text-white font-bold tracking-tight text-sm sm:text-base">
                      <span className="mr-1">Mongolian</span>
                      <span className="mr-1">Ornithological</span>
                      <span>Society</span>
                    </div>
                    <p className="text-[10px] text-white/80 mt-0.5 italic">Conserving wild birds for people.</p>
                  </div>
                </div>
              </Link>
              
              {/* Mobile menu toggle */}
              <div className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-white/10 h-8 w-8"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <Icons.close className="h-4 w-4" /> : <Icons.menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block flex-grow">
              <NavigationMenu className="mx-auto">
                <NavigationMenuList className="justify-center gap-1">
                  {menuItems.map((item) => 
                    item.noChildren ? (
                      <NavigationMenuItem key={item.id}>
                        <NavigationMenuLink href={item.href} className={cn(
                          "px-2 py-1.5 font-medium text-white hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 tracking-wide text-sm"
                        )}>
                          {item.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.id}>
                        <NavigationMenuTrigger className="px-2 py-1.5 font-medium text-white hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 tracking-wide text-sm bg-transparent data-[state=open]:bg-white/10">
                          {item.href ? (
                            <Link href={item.href} className="focus:outline-none">
                              {item.title}
                            </Link>
                          ) : (
                            item.title
                          )}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className={`grid gap-4 p-6 md:w-[400px] lg:w-[500px] bg-white rounded-lg shadow-lg border border-slate-100 ${item.id === 'birds-mongolia' || item.id === 'expeditions' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            <div className="col-span-1">
                              <h3 className="font-medium mb-3 text-sm text-slate-500 uppercase tracking-wider">Overview</h3>
                              <ul className="space-y-2">
                                {item.children?.map((child, idx) => (
                                  <MenuItem 
                                    key={idx} 
                                    href={child.href} 
                                    title={child.title}
                                  >
                                    {child.description}
                                  </MenuItem>
                                ))}
                              </ul>
                            </div>
                            {item.id === 'birds-mongolia' && (
                              <div className="col-span-1">
                                <div className="flex flex-col space-y-3 h-full">
                                  <div className="overflow-hidden rounded-lg shadow-md bg-blue-50 w-full">
                                    <div className="relative aspect-[1.8/1]">
                                      <Image 
                                        src="/placeholder.svg" 
                                        fill
                                        alt="Bird identification guide"
                                        className="object-cover hover:scale-105 transition-transform duration-500" 
                                      />
                                    </div>
                                  </div>
                                  <div className="text-sm mt-2">
                                    <h4 className="font-medium mb-1 text-slate-800">Bird Identification</h4>
                                    <p className="text-slate-500 leading-relaxed">Learn to identify the birds of Mongolia with our comprehensive guide</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Action Buttons */}
            {/* <div className="hidden md:flex space-x-2">
              <Button variant="outline" className="bg-red-500 border-0 font-medium px-4 py-1 h-8">
                Donate
              </Button>
              <Button variant="outline" className="bg-red-500 border-0 font-medium px-4 py-1 h-8">
                Take action
              </Button>
            </div> */}
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-2 pb-2 animate-in fade-in slide-in-from-top-5 duration-300">
              <nav className="flex flex-col space-y-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-white/10 last:border-b-0">
                    {item.noChildren ? (
                      <Link 
                        href={item.href || "#"} 
                        className="block py-2 px-3 text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-200 text-left text-sm"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div>
                        <button 
                          onClick={() => toggleSection(item.id)}
                          className="flex w-full justify-between items-center py-2 px-3 text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-200 text-left text-sm"
                        >
                          {item.href ? (
                            <Link href={item.href} className="flex-grow text-left" onClick={(e) => e.stopPropagation()}>
                              {item.title}
                            </Link>
                          ) : (
                            item.title
                          )}
                          <Icons.close className={`h-4 w-4 transition-transform duration-300 ${openSections[item.id] ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        
                        {openSections[item.id] && (
                          <div className="ml-4 pl-2 border-l border-white/20 animate-in fade-in slide-in-from-left-5 duration-300">
                            {item.children?.map((child, idx) => (
                              <Link 
                                key={idx} 
                                href={child.href}
                                className="block py-1.5 px-3 text-xs text-white/90 hover:bg-white/10 rounded-md transition-colors duration-200"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* <div className="mt-4 pt-2 border-t border-white/10 flex gap-4">
                <Button size="sm" variant="outline" className="w-1/2 border-0 bg-red-500 font-medium h-8">Donate</Button>
                <Button size="sm" variant="outline" className="w-1/2 border-0 bg-red-500 font-medium h-8">Take Action</Button>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Component used for menu items with simpler styling for dropdown menus
const MenuItem = ({ 
  href, 
  title, 
  children 
}: { 
  href: string; 
  title: string; 
  children: React.ReactNode 
}) => {
  return (
    <li>
      <Link 
        href={href} 
        className="block rounded-md px-3 py-2 text-sm no-underline outline-none transition-colors hover:bg-blue-50 text-slate-700 hover:text-blue-700 group"
      >
        <div className="font-medium group-hover:translate-x-0.5 transition-transform duration-200">{title}</div>
        {children && (
          <div className="text-xs text-slate-500 line-clamp-1 group-hover:text-slate-600 transition-colors">
            {children}
          </div>
        )}
      </Link>
    </li>
  );
};

// Component used for featured menu items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:translate-x-0.5 transition-transform duration-200">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 group-hover:text-slate-600 transition-colors">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"; 