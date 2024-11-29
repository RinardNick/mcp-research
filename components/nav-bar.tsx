'use client';

import React from 'react';
import { Menu } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { MSCI_COLORS } from '@/lib/brand';

export const NavBar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Future of Wealth', 
      path: '/future-of-wealth', 
      color: MSCI_COLORS.primary,
      description: 'AI-powered wealth management solutions'
    },
    { 
      name: 'Model Context Protocol', 
      path: '/mcp-research', 
      color: MSCI_COLORS.secondary,
      description: 'Building a common language for wealth management'
    },
  ];

  return (
    <div 
      className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center px-4 shadow-sm"
      style={{ backgroundColor: MSCI_COLORS.gray[50] }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
                <Menu className="h-6 w-6" style={{ color: MSCI_COLORS.primary }} />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle 
                  className="text-xl font-medium"
                  style={{ color: MSCI_COLORS.primary }}
                >
                  MSCI Research
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      href={item.path}
                      className={`group rounded-lg border p-4 transition-all hover:shadow-md ${
                        pathname.startsWith(item.path) 
                          ? 'border-gray-300 bg-gray-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-10 w-10 rounded-full transition-transform group-hover:scale-110"
                          style={{ 
                            backgroundColor: item.color,
                            transform: pathname.startsWith(item.path) ? 'scale(1.1)' : 'scale(1)'
                          }}
                        ></div>
                        <div>
                          <div className={`text-base font-medium ${
                            pathname.startsWith(item.path)
                              ? 'text-gray-900' 
                              : 'text-gray-600'
                          }`}>
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          
          <div className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center gap-2"
              >
                <div 
                  className="h-8 w-8 rounded-full transition-transform hover:scale-110"
                  style={{ 
                    backgroundColor: item.color,
                    transform: pathname.startsWith(item.path) ? 'scale(1.1)' : 'scale(1)'
                  }}
                ></div>
                <span 
                  className={`text-lg font-normal ${
                    pathname.startsWith(item.path)
                      ? 'text-gray-800' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: MSCI_COLORS.primary }}>
            MSCI
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;