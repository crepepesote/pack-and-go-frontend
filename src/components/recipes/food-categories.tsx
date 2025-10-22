import React from 'react';

const CategoryCard = ({ image, title }) => (
  // El contenedor principal de la tarjeta
  <div className="flex flex-col items-center group cursor-pointer text-center">
    {/* Contenedor de la imagen: ahora su tamaño cambia con la pantalla */}
    <div className="relative mb-3 overflow-hidden rounded-full 
                   w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 
                   transition-transform duration-300 group-hover:scale-110 shadow-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </div>
    {/* Título: El tamaño del texto también es responsive */}
    <h3 className="text-base md:text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
      {title}
    </h3>
  </div>
);

const FoodCategories = () => {
  const categories = [
    {
      title: "Desayuno",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop"
    },
    {
      title: "Almuerzo",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop"
    },
    {
      title: "Cena",
      image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=400&h=400&fit=crop"
    },
    {
      title: "Snacks",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=400&fit=crop"
    },
    {
      title: "Keto",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop"
    },
    {
      title: "Vegano",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
    }
  ];

  return (
    // Ajustamos el padding vertical para que sea menos agresivo en móviles
    <div className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título principal: ajustamos su tamaño para móviles */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-12">
          Que te apetéce hoy?
        </h2>

        {/* Grid de Categorías: ajustamos los gaps y las columnas */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-8 sm:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;