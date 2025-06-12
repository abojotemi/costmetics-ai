"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SaLeft = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex gap-4 text-gray-600 relative mt-8 text-center">
        <div className="relative p-2 flex justify-center">
          <Link
            href="/skin-analysis"
            className={cn(pathname === "/skin-analysis" && "text-primary")}
          >
            Face Scan
          </Link>
          {pathname === "/skin-analysis" && (
            <p className="h-1 w-full bg-primary absolute -bottom-1"></p>
          )}
        </div>
        <div className="relative p-2 flex justify-center">
          <Link
            href="/skin-analysis/texture-scan"
            className={cn(pathname === "/skin-analysis/texture-scan" && "text-primary")}
          >
            Texture Scan
          </Link>
          {pathname === "/skin-analysis/texture-scan" && (
            <p className="h-1 w-full bg-primary absolute -bottom-1"></p>
          )}
        </div>
        <div className="relative p-2 flex justify-center">
          <Link
            href="/skin-analysis/specific-areas"
            className={cn(pathname === "/skin-analysis/specific-areas" && "text-primary")}
          >
           Specific Areas
          </Link>
          {pathname === "/skin-analysis/specific-areas" && (
            <p className="h-1 w-full bg-primary absolute -bottom-1"></p>
          )}
        </div>
      </div>
      <hr className="" />
    </div>
  );
};

export default SaLeft;
