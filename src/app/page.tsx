'use client';

import TopHeader from '@/components/layout/TopHeader';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import ProductsHeader from '@/components/home/ProductsHeader';
import CategoriesBar from '@/components/home/CategoriesBar';
import ProductsGrid from '@/components/home/ProductsGrid';
import InfoSection from '@/components/home/InfoSection';
import MapSection from '@/components/home/MapSection';
import TestimonialsSection from '@/components/home/TestimonialSection';
import FooterLinks from  '@/components/home/FooterLinks';
import Copyright from '@/components/home/Copyright';

import { useState } from 'react';

export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSection />
      <ProductsHeader />
      <CategoriesBar />
      <ProductsGrid />
      <InfoSection />  {/* ← Nuevo */}
      <MapSection />
      <TestimonialsSection />
      <FooterLinks />
      <Copyright />
    </>
  );
}