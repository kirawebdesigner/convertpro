import React from 'react';
import { Category } from '../types';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for unit types or conversion types..."
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={`group relative flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 ${
              selectedCategory.id === category.id
                ? 'bg-purple-500/20 text-purple-400 scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:scale-105'
            }`}
          >
            <div className={`text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
              selectedCategory.id === category.id ? 'scale-110' : ''
            }`}>
              {category.icon}
            </div>
            <span className="text-sm font-medium">{category.name}</span>
            <div className={`absolute inset-0 rounded-xl ring-2 transition-all duration-300 ${
              selectedCategory.id === category.id
                ? 'ring-purple-500/50'
                : 'ring-transparent group-hover:ring-gray-600/30'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;