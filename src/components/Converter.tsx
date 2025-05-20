import React, { useState, useEffect } from 'react';
import { Clipboard, RefreshCw } from 'lucide-react';
import CategorySelector from './CategorySelector';
import ConversionForm from './ConversionForm';
import RecentConversions from './RecentConversions';
import { Category, Conversion } from '../types';
import { categories } from '../utils/conversionData';

const Converter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [recentConversions, setRecentConversions] = useState<Conversion[]>([]);
  
  // Load recent conversions from localStorage on mount
  useEffect(() => {
    const savedConversions = localStorage.getItem('recentConversions');
    if (savedConversions) {
      try {
        setRecentConversions(JSON.parse(savedConversions));
      } catch (e) {
        console.error('Failed to parse recent conversions');
      }
    }
  }, []);

  // Save recent conversions to localStorage when they change
  useEffect(() => {
    localStorage.setItem('recentConversions', JSON.stringify(recentConversions));
  }, [recentConversions]);

  const addToRecent = (conversion: Conversion) => {
    setRecentConversions(prev => {
      // Limit to 5 recent conversions and avoid duplicates
      const filtered = prev.filter(c => 
        !(c.fromUnit === conversion.fromUnit && 
          c.toUnit === conversion.toUnit && 
          c.categoryId === conversion.categoryId)
      );
      return [conversion, ...filtered].slice(0, 5);
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Unit Converter
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-colors duration-300">
        <CategorySelector 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="mt-6">
          <ConversionForm 
            category={selectedCategory} 
            onConversion={addToRecent} 
          />
        </div>
      </div>
      
      {recentConversions.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Recent Conversions
          </h2>
          <RecentConversions 
            conversions={recentConversions} 
            categories={categories}
            onSelect={(conversion) => {
              const category = categories.find(c => c.id === conversion.categoryId);
              if (category) {
                setSelectedCategory(category);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Converter;