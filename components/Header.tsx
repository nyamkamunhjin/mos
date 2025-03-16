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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

export function Header() {
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
        { title: "About Us", description: "Learn about our mission and history", href: "#" },
        { title: "Members", description: "Join our community of bird enthusiasts", href: "#" },
        { title: "Education", description: "Educational resources and programs", href: "#" },
        { title: "Contact", description: "Get in touch with our team", href: "#" },
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
    <>
      {/* Top Bar with Donate and Take Action buttons */}
      <div className="bg-blue-700 w-full py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-2 mb-2 sm:mb-0">
          <Button size="sm" variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
            Donate
          </Button>
          <Button size="sm" variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
            Take action
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="icon" variant="ghost" className="text-white">
            <Image src="/placeholder.svg" alt="English" width={24} height={24} />
          </Button>
          <Button size="icon" variant="ghost" className="text-white">
            <Image src="/placeholder.svg" alt="Mongolian" width={24} height={24} />
          </Button>
          <div className="relative hidden sm:block">
            <input type="text" className="py-1 px-2 rounded text-sm w-32" placeholder="Search..." />
            <Icons.search className="w-4 h-4 absolute right-2 top-1.5 text-gray-500" />
          </div>
          <div className="flex items-center space-x-1">
            <Link href="#" className="text-white">
              <Image src="/placeholder.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="text-white">
              <Image src="/placeholder.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#" className="text-white">
              <Image src="/placeholder.svg" alt="YouTube" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo and Contact Info */}
      <div className="bg-white py-4 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-3 sm:mb-0">
          <Image
            src="/logo.png"
            alt="Mongolian Ornithological Society"
            width={80}
            height={80}
          />
          <div className="ml-4">
            <h1 className="text-lg font-bold text-blue-700">Mongolian</h1>
            <h2 className="text-lg font-bold text-blue-700">Ornithological</h2>
            <h3 className="text-lg font-bold text-blue-700">Society</h3>
            <p className="text-xs text-gray-600">Conserving wild birds for people.</p>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-600">+ 976 - 98100148</p>
          <p className="text-sm text-gray-600">info@mos.mn</p>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <div className="border-y border-gray-200 bg-white hidden md:block">
        <div className="container mx-auto py-1">
          <NavigationMenu>
            <NavigationMenuList className="justify-start">
              {menuItems.map((item) => 
                item.noChildren ? (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink href={item.href} className={cn(
                      navigationMenuTriggerStyle(),
                      "font-medium text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                    )}>
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuTrigger className="font-medium text-blue-700 hover:text-blue-800 hover:bg-blue-50">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className={`grid gap-4 p-4 md:w-[400px] lg:w-[500px] ${item.id === 'birds-mongolia' || item.id === 'expeditions' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                        <div className="col-span-1">
                          <h3 className="font-medium mb-2 text-sm">Overview</h3>
                          <ul className="space-y-1.5">
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
                            <div className="flex flex-col space-y-3">
                              <div className="overflow-hidden rounded-md">
                                <Image 
                                  src="/placeholder.svg" 
                                  width={300}
                                  height={180}
                                  alt="Bird identification guide"
                                  className="aspect-[1.8/1] object-cover" 
                                />
                              </div>
                              <div className="text-sm">
                                <h4 className="font-medium mb-1">Bird Identification</h4>
                                <p className="text-muted-foreground">Learn to identify the birds of Mongolia with our comprehensive guide</p>
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
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-y border-gray-200 bg-white py-2 px-4">
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-blue-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
          </Button>
          
          <div className="sm:hidden relative">
            <input type="text" className="py-1 px-2 rounded text-sm w-32" placeholder="Search..." />
            <Icons.search className="w-4 h-4 absolute right-2 top-1.5 text-gray-500" />
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="pt-4 pb-2">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                  {item.noChildren ? (
                    <Link 
                      href={item.href || "#"} 
                      className="block py-2 px-3 text-blue-700 font-medium rounded-md hover:bg-blue-50"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <button 
                        onClick={() => toggleSection(item.id)}
                        className="flex w-full justify-between items-center py-2 px-3 text-blue-700 font-medium rounded-md hover:bg-blue-50"
                      >
                        {item.title}
                        <Icons.close className={`h-4 w-4 transition-transform duration-200 ${openSections[item.id] ? 'rotate-45' : 'rotate-0'}`} />
                      </button>
                      
                      {openSections[item.id] && (
                        <div className="ml-4 pl-2 border-l border-blue-100">
                          {item.children?.map((child, idx) => (
                            <Link 
                              key={idx} 
                              href={child.href}
                              className="block py-2 px-3 text-sm text-blue-600 hover:bg-blue-50 rounded"
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
            
            <div className="mt-4 pt-4 border-t flex gap-2">
              <Button size="sm" className="w-1/2 bg-orange-500 hover:bg-orange-600">Donate</Button>
              <Button size="sm" className="w-1/2 bg-blue-700 hover:bg-blue-800">Take Action</Button>
            </div>
          </div>
        )}
      </div>
    </>
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
        className="block rounded-md px-2 py-1.5 text-sm no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700"
      >
        <div className="font-medium">{title}</div>
        {children && (
          <div className="text-xs text-muted-foreground line-clamp-1">
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"; 