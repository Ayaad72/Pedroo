"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../public/pedro-logo.png";
import { Menu } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  const handleMobileLinkClick = (href: string) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-container right-0 z-50 flex items-center from-green-500 justify-between p-4 bg-transparent w-4/5 mx-auto pt-8">
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="PedroCoin Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            scroll={true}
            className="text-white hover:text-white/80 transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <Button
          variant="outline"
          className="bg-white  hover:text-[#7F1911] rounded-[100px] border-[#7F1911] text-[#7F1911]"
        >
          WHITE PAPER
        </Button>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#4A1D1D] border-none">
          <div className="flex flex-col items-center gap-4 mt-24">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMobileLinkClick(item.href)}
                className="text-white hover:text-white/80 transition-colors text-lg"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              className="bg-white  hover:text-[#7F1911] rounded-[100px] border-[#7F1911] text-[#7F1911]"
            >
              WHITE PAPER
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
