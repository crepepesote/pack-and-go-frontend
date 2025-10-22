import React from 'react';

const CategoryCard = ({ image, title }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="relative mb-4 overflow-hidden rounded-full w-44 h-44 transition-transform duration-300 group-hover:scale-110 shadow-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
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
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What's on Your Plate Today?
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;