'use client';

import React from 'react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// Datos de los enlaces para mantener el código limpio
const copyrightLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Do not sell or share my personal information', href: '#' },
];

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#192D1D] font-inter">
      <div className="max-w-[90%] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Texto de Copyright */}
          <p className="text-sm text-gray-300 text-center md:text-left">
            Pack and Go Copyright {currentYear}, All Rights Reserved.
          </p>

          {/* Enlaces de Copyright */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {copyrightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white hover:underline transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>
      </div>
    </div>
  );
}