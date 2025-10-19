'use client';

import React from 'react';
import Image from 'next/image';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// Datos para los enlaces
const socialLinks = [
  {
    name: 'Pack and Go',
    href: '#',
    icon: '/images/icons/facebook.png',
  },
  {
    name: 'packandgo',
    href: '#',
    icon: '/images/icons/instagram.png',
  },
  {
    name: 'packandgo',
    href: '#',
    icon: '/images/icons/tiktok.png',
  },
];

const legalLinks = [
  { name: 'Terms and conditions', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Cookies', href: '#' },
  { name: 'Modern Slavery Statement', href: '#' },
];

const importantLinks = [
  { name: 'Get help', href: '#' },
  { name: 'Add your restaurant', href: '#' },
  { name: 'Sign up to deliver', href: '#' },
  { name: 'Create a business account', href: '#' },
];

export default function FooterLinks() {
  return (
    <footer className="bg-[#E9E9E9] font-inter">
      <div className="max-w-[90%] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-center">
          
          {/* Columna del Logo */}
          {/* ✅ CAMBIO AQUÍ: Añadido `lg:pl-8` para mover el logo a la derecha en pantallas grandes */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start lg:pl-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/images/logo/logo2.png"
                alt="Pack and Go Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Columna de Redes Sociales */}
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 transition hover:opacity-80"
              >
                <div className="relative w-8 h-8">
                  <Image src={link.icon} alt={`${link.name} icon`} fill className="object-contain" />
                </div>
                <span className="font-bold text-gray-800">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Columna de Páginas Legales */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Legal Pages</h4>
            {legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-sm text-gray-600 underline hover:text-gray-900">
                {link.name}
              </a>
            ))}
          </div>

          {/* Columna de Enlaces Importantes */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Important Links</h4>
            {importantLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-sm text-gray-600 underline hover:text-gray-900">
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </div>
      <div className="border-t border-gray-300"></div>
    </footer>
  );
}