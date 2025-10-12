"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/deals', label: 'Deals' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
            <Cake className="h-6 w-6 text-orange-500" aria-hidden="true" />
            <span className="text-xl font-bold text-gray-900">Flourish</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <a
                href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order cake via WhatsApp"
              >
                Order Now
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20cake"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order cake via WhatsApp"
                  >
                    Order Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
