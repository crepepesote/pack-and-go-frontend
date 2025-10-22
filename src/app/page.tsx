'use client';

import TopHeader from '@/components/layout/TopHeader';
import Header from '@/components/layout/Header';
import LandingHero from '@/components/home/LandingHero';
import FooterLinks from '@/components/home/FooterLinks';
import Copyright from '@/components/home/Copyright';
import PromoFiltersBar from '@/components/home/PromoFiltersBar';
import OfferCarousel from '@/components/home/OfferCarousel';
import PopularCategories from '@/components/home/PopularCategories';
import PopularBoxes from '@/components/home/PopularBoxes';
import OpportunityCards from '@/components/home/opportunity_cards';
import FAQSection from '@/components/home/faq_component';
import CounterStats from '@/components/home/counter_stats';
export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <LandingHero />
      <PromoFiltersBar />
      <OfferCarousel />
      <PopularCategories />
      <PopularBoxes />

      {/* Aquí está la imagen que querías agregar */}
      <section className="bg-white py-12">
        <div className="max-w-[90%] mx-auto flex justify-center">
          <img
            src="/images/inicio/OrderingAPP.png"
            alt="Descarga la app PacketGo"
            className="rounded-2xl shadow-lg w-full object-cover" // Cambiado a object-cover para llenar el espacio
            style={{ maxWidth: '100%', height: 'auto' }} // Asegura que la imagen sea responsiva
          />
        </div>
      </section>
      <OpportunityCards />
      <FAQSection />
      <CounterStats />
      <FooterLinks />
      <Copyright />
    </>
  );
}

