"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const loggedIn: boolean = false;
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <>
      <div className="h-16" />
      <div className="shadow bg-muted/50 lg:px-20 fixed top-0 w-full backdrop-blur-lg *:text-white z-50">
        <div className="flex justify-between items-center pt-2 px-6 h-16">
          <div className="flex flex-1 space-x-8 items-center">
            <p className="text-primary   text-2xl font-bold">GlowScan</p>
            <ul className="flex space-x-6 text-raisin-black font-medium max-md:hidden *:text-center">
              <Link
                href="/"
                className={cn(
                  pathname === "/"
                    ? "relative text-primary after:border-1 after:absolute after:w-full after:-bottom-2 after:left-0"
                    : "",
                  "hover:text-primary transition-colors duration:100"
                )}
              >
                Home
              </Link>
              <Link
                href="/skin-analysis"
                className={cn(
                  pathname === "/skin-analysis"
                    ? "relative text-primary after:border-1 after:absolute after:w-full after:-bottom-2 after:left-0"
                    : "",
                  "hover:text-primary transition-colors duration:100"
                )}
              >
                Skin Analysis
              </Link>
              <Link
                href="/products"
                className={cn(
                  pathname === "/products"
                    ? "relative text-primary after:border-1 after:absolute after:w-full after:-bottom-2 after:left-0"
                    : "",
                  "hover:text-primary transition-colors duration:100"
                )}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={cn(
                  pathname === "/about"
                    ? "relative text-primary after:border-1 after:absolute after:w-full after:-bottom-2 after:left-0"
                    : "",
                  "hover:text-primary transition-colors duration:100"
                )}
              >
                About
              </Link>
            </ul>
          </div>
          {loggedIn ? (
            <div className="bg-white/30 p-1 rounded-full cursor-pointer">
              <User className="text-white" />
            </div>
          ) : (
            <div className="flex space-x-2 md:space-x-1">
              <Button
                variant={"outline"}
                className="border-none shadow-none text-primary hover:text-primary/90 hover:bg-primary/10 max-md:p-0.5"
              >
                Login
              </Button>
              <Button
                variant={"outline"}
                className="border-primary text-primary hover:text-primary/90 hover:bg-primary/10 max-md:px-1.5"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
        <div className="relative md:hidden">
          <ul
            className={cn(
              "flex flex-col items-center transition-all duration-300 ease-in-out",
              openNav
                ? "max-h-48 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            )}
          >
            <Link
              href="/"
              className={cn(
                "w-full pl-4 py-2 hover:text-white hover:bg-primary text-primary tracking-wide font-medium"
              )}
            >
              Home
            </Link>
            <Link
              href="/skin-analysis"
              className="w-full pl-4 py-2 hover:text-white hover:bg-primary text-primary tracking-wide font-medium"
            >
              Skin Analysis
            </Link>
            <Link
              href="/products"
              className="w-full pl-4 py-2 hover:text-white hover:bg-primary text-primary tracking-wide font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="w-full pl-4 py-2 hover:text-white hover:bg-primary text-primary tracking-wide font-medium"
            >
              About
            </Link>
          </ul>
          <div
            className="flex justify-center md:hidden cursor-pointer rounded-b-xl hover:bg-primary hover:text-white group transition-all"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <ChevronUp className="text-primary group-hover:text-white" />
            ) : (
              <ChevronDown className="text-primary group-hover:text-white" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
