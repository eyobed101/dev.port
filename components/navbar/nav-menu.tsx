// components/nav-menu.tsx
'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function NavMenu({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn("data-[orientation=vertical]:items-start", className)}>
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="group relative px-4 py-2 font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span
                  className="absolute inset-0 z-0 rounded-full bg-accent/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                />
                <motion.span
                  className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ 
                    width: "calc(100% - 2rem)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}