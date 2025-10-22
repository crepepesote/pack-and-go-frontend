import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const RecipeCard = ({ image, category, title, date, time, rotation, position }) => (
  <div 
    className={`absolute ${position} transform ${rotation} transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer group`}
  >
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-48 sm:w-56 md:w-64">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 sm:h-40 md:h-48 object-cover"
        />
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium text-gray-700">
          {category}
        </span>
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
        <h3 className="font-semibold text-sm sm:text-base text-gray-800 leading-snug">{title}</h3>
      </div>
    </div>
  </div>
);

// Card optimized for mobile (smaller vertically)
const MobileCard = ({ image, category, title, date, time }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden w-52 flex-shrink-0 scroll-snap-align-start">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-24 object-cover" />
      <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
        {category}
      </span>
    </div>
    <div className="p-2.5">
      <div className="text-xs text-gray-500 mb-1">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{time}</span>
      </div>
      <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">{title}</h3>
    </div>
  </div>
);

const CookaryHero = () => {
  const recipes = [
    {
      category: "Desayuno",
      title: "Fluffy Banana Pancakes with Maple Drizzle",
      date: "Sep 15, 2025",
      time: "30 mins",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
      rotation: "-rotate-[18deg]",
      position: "top-16 left-2 sm:left-4 md:left-8 lg:left-12"
    },
    {
      category: "Almuerzo",
      title: "Grilled Lemon Chicken with Quinoa Salad",
      date: "Sep 15, 2025",
      time: "45 mins",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      rotation: "-rotate-[8deg]",
      position: "top-4 left-36 sm:left-48 md:left-60 lg:left-80"
    },
    {
      category: "Cena",
      title: "Garlic Butter Shrimp with Rice Pilaf",
      date: "Sep 15, 2025",
      time: "30 mins",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop",
      rotation: "rotate-0",
      position: "top-0 left-1/2 -translate-x-1/2"
    },
    {
      category: "Snacks",
      title: "Spicy Roasted Garlic Hummus with Pita Chips",
      date: "Sep 15, 2025",
      time: "15 mins",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
      rotation: "rotate-[8deg]",
      position: "top-4 right-36 sm:right-48 md:right-60 lg:right-80"
    },
    {
      category: "Bebidas",
      title: "Strawberry Banana Delight Smoothie",
      date: "Sep 15, 2025",
      time: "10 mins",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",
      rotation: "rotate-[18deg]",
      position: "top-16 right-2 sm:right-4 md:right-8 lg:right-12"
    }
  ];

  // Drag-to-scroll state + ref for the mobile scroller
  const scrollerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const onMouseDown = (e) => {
    const scroller = scrollerRef.current;
    isDownRef.current = true;
    scroller.classList.add('cursor-grabbing');
    startXRef.current = e.pageX - scroller.offsetLeft;
    scrollLeftRef.current = scroller.scrollLeft;
  };

  const onMouseLeave = () => {
    const scroller = scrollerRef.current;
    isDownRef.current = false;
    scroller?.classList.remove('cursor-grabbing');
  };

  const onMouseUp = () => {
    const scroller = scrollerRef.current;
    isDownRef.current = false;
    scroller?.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e) => {
    const scroller = scrollerRef.current;
    if (!isDownRef.current || !scroller) return;
    e.preventDefault();
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startXRef.current) * 1; // scroll-fast factor
    scroller.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    // Remove forced full-screen on small devices to avoid elongated look
    <div className="min-h-0 md:min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Hide default scrollbar visually for the mobile scroller, and enable touch / mouse dragging */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .cursor-grabbing { cursor: grabbing !important; }
        .scroll-snap-align-start { scroll-snap-align: start; }
      `}</style>

      {/* Newsletter Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium text-center">
            Recibe Actualizaciones Semanales con Nuestro Boletín
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-6 sm:py-12 md:py-20">
        {/* Floating Recipe Cards */}
        <div className="relative h-40 sm:h-80 md:h-96 mb-6 sm:mb-12 md:mb-16">
          {/* Desktop / tablet: keep original absolute floating look */}
          <div className="hidden sm:block relative h-full">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>

          {/* Mobile: horizontal scroll list that doesn't overlap the heading; smaller vertical footprint */}
          <div
            ref={scrollerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="sm:hidden flex items-start gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 py-2 touch-pan-x scroll-snap-type-x"
            style={{ WebkitOverflowScrolling: 'touch', cursor: 'grab', scrollSnapType: 'x mandatory' }}
          >
            {recipes.map((recipe, i) => (
              <div key={i} className="scroll-snap-align-start">
                <MobileCard {...recipe} />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center relative z-10 px-4">
          <p className="text-xs sm:text-base text-gray-600 font-medium mb-2 sm:mb-4 tracking-wide">
            Bienvenido a Cookary
          </p>
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            Tu Compañero de Cocina
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              para Cada Comida
            </span>
          </h1>
        </div>
      </div>

      {/* Decorative Elements (hidden on smallest screens to reduce clutter) */}
      <div className="hidden sm:block absolute top-1/4 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-orange-200 rounded-full blur-3xl opacity-30" />
      <div className="hidden sm:block absolute bottom-1/4 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-red-200 rounded-full blur-3xl opacity-30" />
    </div>
  );
};

export default CookaryHero;
