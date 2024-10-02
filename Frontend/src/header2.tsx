import * as React from "react";
// import Link from "next/link"

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu";

export function Header2() {
  return (
    <>
      <div className="relative z-10 border-b py-4 bg-gray-50 flex items-center justify-center">
        {/* Centered Logo and Title */}
        <div className="flex items-center mr-5 ml-5">
          <img src="/logo2.svg" alt="Logo" className="h-7 mr-4" /> {/* Logo */}
          <span className="text-xl font-bold text-teal-950 font-mono    ">Sketch Calculator</span> 
        </div>
        
        
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
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
