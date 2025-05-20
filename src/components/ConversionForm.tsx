import React, { useState, useEffect } from 'react';
import { Clipboard, RefreshCw } from 'lucide-react';
import { Category, Conversion, Unit } from '../types';
import { convert, formatNumber, getConversionFormula, isValidNumberInput } from '../utils/conversionUtils';

interface ConversionFormProps {
  category: Category;
  onConversion: (conversion: Conversion) => void;
}

const ConversionForm: React.FC<ConversionFormProps> = ({ category, onConversion }) => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>(category.units[0].id);
  const [toUnit, setToUnit] = useState<string>(category.units[1].id);
  const [result, setResult] = useState<string>('');
  const [formula, setFormula] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isSwapping, setIsSwapping] = useState<boolean>(false);
  
  useEffect(() => {
    setFromUnit(category.units[0].id);
    setToUnit(category.units[1].id);
    performConversion(parseFloat(fromValue), category.units[0].id, category.units[1].id);
  }, [category]);
  
  useEffect(() => {
    if (fromValue && !isNaN(parseFloat(fromValue))) {
      performConversion(parseFloat(fromValue), fromUnit, toUnit);
    } else {
      setResult('');
      setFormula('');
    }
  }, [fromValue, fromUnit, toUnit]);

  const performConversion = (value: number, from: string, to: string) => {
    try {
      const fromUnitObj = category.units.find(u => u.id === from);
      const toUnitObj = category.units.find(u => u.id === to);
      
      if (!fromUnitObj || !toUnitObj) {
        setErrorMessage('Invalid unit selection');
        return;
      }
      
      const convertedValue = convert(value, fromUnitObj, toUnitObj, category);
      setResult(formatNumber(convertedValue));
      setFormula(getConversionFormula(value, fromUnitObj, toUnitObj, convertedValue));
      setErrorMessage('');
      
      const conversion: Conversion = {
        id: `${Date.now()}`,
        categoryId: category.id,
        fromValue: value,
        fromUnit: from,
        toUnit: to,
        toValue: convertedValue,
        timestamp: Date.now()
      };
      
      onConversion(conversion);
    } catch (error) {
      setErrorMessage('Error performing conversion');
      console.error(error);
    }
  };
  
  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (isValidNumberInput(input)) {
      setFromValue(input);
    }
  };
  
  const handleSwapUnits = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setFromUnit(toUnit);
      setToUnit(fromUnit);
      setIsSwapping(false);
    }, 300);
  };
  
  const handleCopyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(formula)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* From section */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            From
          </label>
          <input
            type="text"
            value={fromValue}
            onChange={handleFromValueChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            placeholder="Enter value"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          >
            {category.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* Swap button */}
        <div className="flex justify-center -my-4 md:my-0">
          <button
            onClick={handleSwapUnits}
            disabled={isSwapping}
            className="p-4 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            aria-label="Swap units"
          >
            <RefreshCw className={`h-6 w-6 transition-transform duration-300 ${isSwapping ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* To section */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            To
          </label>
          <input
            type="text"
            value={result}
            readOnly
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-gray-200"
            placeholder="Result"
          />
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          >
            {category.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Formula display */}
      <div className="relative p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
        <div className="text-sm text-gray-400 mb-1">Formula:</div>
        <div className="flex justify-between items-center">
          <div className="font-mono text-gray-200">
            {formula || 'Enter a value to see the conversion formula'}
          </div>
          <button
            onClick={handleCopyToClipboard}
            className={`p-2 rounded-lg transition-all duration-300 ${
              copied
                ? 'bg-green-500/20 text-green-400'
                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
            }`}
            disabled={!result}
          >
            <Clipboard className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Common conversions */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-300">Common Conversions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['1 Foot → Meter', '1 Meter → Foot', '1 Mile → Kilometer', '1 Inch → Centimeter'].map((conv, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm hover:bg-gray-700/50 transition-all duration-300"
            >
              {conv}
            </button>
          ))}
        </div>
      </div>
      
      {errorMessage && (
        <div className="mt-2 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ConversionForm;