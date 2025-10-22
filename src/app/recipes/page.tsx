'use client';

import TopHeader from '@/components/layout/TopHeader';
import Header from '@/components/layout/Header';
import FooterLinks from '@/components/home/FooterLinks';
import Copyright from '@/components/home/Copyright';
import CookaryHero from '@/components/recipes/cookary-hero';
import FoodCategories from '@/components/recipes/food-categories';
export default function ProductosPage() {
  return (
    <>
      <TopHeader />
      <Header />
      <CookaryHero />
      <FoodCategories />
      <FooterLinks />
      <Copyright />
    </>
  );
}