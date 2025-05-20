import React from 'react';
import { ArrowRight, Clock, Trash2 } from 'lucide-react';
import { Conversion, Category } from '../types';
import { getUnitById } from '../utils/conversionData';
import { formatNumber } from '../utils/conversionUtils';

interface RecentConversionsProps {
  conversions: Conversion[];
  categories: Category[];
  onSelect: (conversion: Conversion) => void;
}

const RecentConversions: React.FC<RecentConversionsProps> = ({
  conversions,
  categories,
  onSelect,
}) => {
  if (conversions.length === 0) {
    return (
      <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 text-center">
        No recent conversions
      </div>
    );
  }

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-200">Recent Conversions</h2>
        <button className="text-gray-400 hover:text-red-400 transition-colors duration-300">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-2">
        {conversions.map((conversion) => {
          const category = categories.find(c => c.id === conversion.categoryId);
          if (!category) return null;
          
          const fromUnit = getUnitById(conversion.categoryId, conversion.fromUnit);
          const toUnit = getUnitById(conversion.categoryId, conversion.toUnit);
          
          if (!fromUnit || !toUnit) return null;
          
          return (
            <button
              key={conversion.id}
              className="w-full group flex items-center p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 rounded-xl text-left transition-all duration-300"
              onClick={() => onSelect(conversion)}
            >
              <div className="text-purple-400 mr-4 transition-transform duration-300 group-hover:scale-110">
                {category.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center text-sm text-gray-200">
                  <span className="font-medium">{formatNumber(conversion.fromValue)}</span>
                  <span className="ml-1">{fromUnit.symbol}</span>
                  <ArrowRight className="mx-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">{formatNumber(conversion.toValue)}</span>
                  <span className="ml-1">{toUnit.symbol}</span>
                </div>
                <div className="flex items-center mt-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{formatTime(conversion.timestamp)}</span>
                  <span className="mx-1">•</span>
                  <span>{category.name}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RecentConversions;