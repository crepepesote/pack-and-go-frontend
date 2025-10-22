import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const RecipeCard = ({ image, category, title, date, time, rotation, position }) => (
  <div 
    className={`absolute ${position} transform ${rotation} transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer group`}
  >
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-64">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {category}
        </span>
        <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
        <h3 className="font-semibold text-gray-800 leading-snug">{title}</h3>
      </div>
    </div>
  </div>
);

const CookaryHero = () => {
  const recipes = [
    {
      category: "Desayuno",
      title: "Panqueques de plátano con sirope de arce",
      date: "15 sept 2025",
      time: "30 min",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
      rotation: "-rotate-[18deg]",
      position: "top-16 left-4 md:left-12"
    },
    {
      category: "Almuerzo",
      title: "Pollo a la plancha con limón y ensalada de quinoa",
      date: "15 sept 2025",
      time: "45 min",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      rotation: "-rotate-[8deg]",
      position: "top-4 left-60 md:left-80"
    },
    {
      category: "Cena",
      title: "Camarones en mantequilla de ajo con arroz",
      date: "15 sept 2025",
      time: "30 min",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop",
      rotation: "rotate-0",
      position: "top-0 left-1/2 -translate-x-1/2"
    },
    {
      category: "Aperitivos",
      title: "Hummus de ajo asado con chips de pita",
      date: "15 sept 2025",
      time: "15 min",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
      rotation: "rotate-[8deg]",
      position: "top-4 right-60 md:right-80"
    },
    {
      category: "Bebidas",
      title: "Batido de fresa y plátano",
      date: "15 sept 2025",
      time: "10 min",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",
      rotation: "rotate-[18deg]",
      position: "top-16 right-4 md:right-12"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Newsletter Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
          {/* chulo en color naranja */}
          <CheckCircle2 className="w-5 h-5 text-orange-500" />
          <span className="text-gray-700 font-medium">Mira nuestras nuevas recetas cada semana</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Floating Recipe Cards */}
        <div className="relative h-96 mb-16">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center relative z-10">
          <p className="text-gray-600 font-medium mb-4 tracking-wide">Bienvenido a PacketRecetas</p>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
            Tu compañero de cocina
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              para cada comida
            </span>
          </h1>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-30" />
    </div>
  );
};

export default CookaryHero;
