'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

interface HeaderProps {
  onLoginClick?: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Recetas', href: '/recipes' },
    { label: 'Productos', href: '/productos' },
    { label: 'Rastrear Pedido', href: '/rastrear' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="bg-white font-inter sticky top-0 z-40">
      <div className="max-w-[90%] mx-auto px-4 md:px-6 py-3 lg:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href="/">
              <div className="relative w-16 h-14 md:w-20 md:h-16 lg:w-24 lg:h-20 rounded-full overflow-hidden cursor-pointer">
                <Image
                  src="/images/logo/pack-and-go-logo.jpg"
                  alt="Pack and Go Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition text-base ${
                    isActive(item.href)
                      ? 'bg-orange-500 text-white px-5 py-2 rounded-full'
                      : 'text-gray-900 hover:text-green-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Login Button */}
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition text-base font-medium flex-shrink-0"
            >
              <span>👤</span>
              Login/Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 mt-3 pt-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded transition text-sm ${
                  isActive(item.href)
                    ? 'bg-orange-500 text-white font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onLoginClick}
              className="w-full text-left px-3 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition text-sm font-medium mt-3"
            >
              👤 Login/Signup
            </button>
          </div>
        )}
      </div>
    </header>
  );
}