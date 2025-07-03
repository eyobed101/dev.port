'use client'

import { Button } from "@/components/ui/button";
import { GithubLogo, XLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="container h-16 flex items-center justify-between px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex rounded-full hover:bg-accent/20"
            asChild
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <XLogo className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-accent/20"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubLogo className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden ml-2">
            <NavigationSheet />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;