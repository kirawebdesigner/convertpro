import { Category } from '../types';

// Length
const lengthUnits = [
  {
    id: 'meter',
    name: 'Meter',
    symbol: 'm',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'kilometer',
    name: 'Kilometer',
    symbol: 'km',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1000 : value / 1000,
  },
  {
    id: 'centimeter',
    name: 'Centimeter',
    symbol: 'cm',
    conversion: (value: number, toBase: boolean) => toBase ? value / 100 : value * 100,
  },
  {
    id: 'millimeter',
    name: 'Millimeter',
    symbol: 'mm',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000 : value * 1000,
  },
  {
    id: 'inch',
    name: 'Inch',
    symbol: 'in',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.0254 : value / 0.0254,
  },
  {
    id: 'foot',
    name: 'Foot',
    symbol: 'ft',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.3048 : value / 0.3048,
  },
  {
    id: 'yard',
    name: 'Yard',
    symbol: 'yd',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.9144 : value / 0.9144,
  },
  {
    id: 'mile',
    name: 'Mile',
    symbol: 'mi',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1609.344 : value / 1609.344,
  },
];

// Weight/Mass
const weightUnits = [
  {
    id: 'kilogram',
    name: 'Kilogram',
    symbol: 'kg',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'gram',
    name: 'Gram',
    symbol: 'g',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000 : value * 1000,
  },
  {
    id: 'milligram',
    name: 'Milligram',
    symbol: 'mg',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000000 : value * 1000000,
  },
  {
    id: 'pound',
    name: 'Pound',
    symbol: 'lb',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.45359237 : value / 0.45359237,
  },
  {
    id: 'ounce',
    name: 'Ounce',
    symbol: 'oz',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.028349523125 : value / 0.028349523125,
  },
  {
    id: 'ton',
    name: 'Metric Ton',
    symbol: 't',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1000 : value / 1000,
  },
];

// Temperature
const temperatureUnits = [
  {
    id: 'celsius',
    name: 'Celsius',
    symbol: '°C',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'fahrenheit',
    name: 'Fahrenheit',
    symbol: '°F',
    // For temperature, we need special conversion formulas
    conversion: (value: number, toBase: boolean) => toBase ? (value - 32) * 5/9 : (value * 9/5) + 32,
  },
  {
    id: 'kelvin',
    name: 'Kelvin',
    symbol: 'K',
    conversion: (value: number, toBase: boolean) => toBase ? value - 273.15 : value + 273.15,
  },
];

// Area
const areaUnits = [
  {
    id: 'square_meter',
    name: 'Square Meter',
    symbol: 'm²',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'square_kilometer',
    name: 'Square Kilometer',
    symbol: 'km²',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1000000 : value / 1000000,
  },
  {
    id: 'square_centimeter',
    name: 'Square Centimeter',
    symbol: 'cm²',
    conversion: (value: number, toBase: boolean) => toBase ? value / 10000 : value * 10000,
  },
  {
    id: 'square_millimeter',
    name: 'Square Millimeter',
    symbol: 'mm²',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000000 : value * 1000000,
  },
  {
    id: 'square_foot',
    name: 'Square Foot',
    symbol: 'ft²',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.09290304 : value / 0.09290304,
  },
  {
    id: 'square_inch',
    name: 'Square Inch',
    symbol: 'in²',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.00064516 : value / 0.00064516,
  },
  {
    id: 'acre',
    name: 'Acre',
    symbol: 'ac',
    conversion: (value: number, toBase: boolean) => toBase ? value * 4046.8564224 : value / 4046.8564224,
  },
  {
    id: 'hectare',
    name: 'Hectare',
    symbol: 'ha',
    conversion: (value: number, toBase: boolean) => toBase ? value * 10000 : value / 10000,
  },
];

// Volume
const volumeUnits = [
  {
    id: 'liter',
    name: 'Liter',
    symbol: 'L',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'milliliter',
    name: 'Milliliter',
    symbol: 'mL',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000 : value * 1000,
  },
  {
    id: 'cubic_meter',
    name: 'Cubic Meter',
    symbol: 'm³',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1000 : value / 1000,
  },
  {
    id: 'cubic_centimeter',
    name: 'Cubic Centimeter',
    symbol: 'cm³',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000 : value * 1000,
  },
  {
    id: 'gallon_us',
    name: 'Gallon (US)',
    symbol: 'gal',
    conversion: (value: number, toBase: boolean) => toBase ? value * 3.78541178 : value / 3.78541178,
  },
  {
    id: 'quart_us',
    name: 'Quart (US)',
    symbol: 'qt',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.946352946 : value / 0.946352946,
  },
  {
    id: 'pint_us',
    name: 'Pint (US)',
    symbol: 'pt',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.473176473 : value / 0.473176473,
  },
  {
    id: 'fluid_ounce_us',
    name: 'Fluid Ounce (US)',
    symbol: 'fl oz',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.0295735296 : value / 0.0295735296,
  },
];

// Speed
const speedUnits = [
  {
    id: 'meter_per_second',
    name: 'Meter per Second',
    symbol: 'm/s',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'kilometer_per_hour',
    name: 'Kilometer per Hour',
    symbol: 'km/h',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.277777778 : value / 0.277777778,
  },
  {
    id: 'mile_per_hour',
    name: 'Mile per Hour',
    symbol: 'mph',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.44704 : value / 0.44704,
  },
  {
    id: 'knot',
    name: 'Knot',
    symbol: 'kn',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.514444444 : value / 0.514444444,
  },
  {
    id: 'foot_per_second',
    name: 'Foot per Second',
    symbol: 'ft/s',
    conversion: (value: number, toBase: boolean) => toBase ? value * 0.3048 : value / 0.3048,
  },
];

// Time
const timeUnits = [
  {
    id: 'second',
    name: 'Second',
    symbol: 's',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'millisecond',
    name: 'Millisecond',
    symbol: 'ms',
    conversion: (value: number, toBase: boolean) => toBase ? value / 1000 : value * 1000,
  },
  {
    id: 'minute',
    name: 'Minute',
    symbol: 'min',
    conversion: (value: number, toBase: boolean) => toBase ? value * 60 : value / 60,
  },
  {
    id: 'hour',
    name: 'Hour',
    symbol: 'h',
    conversion: (value: number, toBase: boolean) => toBase ? value * 3600 : value / 3600,
  },
  {
    id: 'day',
    name: 'Day',
    symbol: 'd',
    conversion: (value: number, toBase: boolean) => toBase ? value * 86400 : value / 86400,
  },
  {
    id: 'week',
    name: 'Week',
    symbol: 'wk',
    conversion: (value: number, toBase: boolean) => toBase ? value * 604800 : value / 604800,
  },
  {
    id: 'month',
    name: 'Month (30 days)',
    symbol: 'mo',
    conversion: (value: number, toBase: boolean) => toBase ? value * 2592000 : value / 2592000,
  },
  {
    id: 'year',
    name: 'Year (365 days)',
    symbol: 'yr',
    conversion: (value: number, toBase: boolean) => toBase ? value * 31536000 : value / 31536000,
  },
];

// Digital Storage
const digitalStorageUnits = [
  {
    id: 'byte',
    name: 'Byte',
    symbol: 'B',
    conversion: (value: number, toBase: boolean) => value, // Base unit
  },
  {
    id: 'kilobyte',
    name: 'Kilobyte',
    symbol: 'KB',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1024 : value / 1024,
  },
  {
    id: 'megabyte',
    name: 'Megabyte',
    symbol: 'MB',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1048576 : value / 1048576,
  },
  {
    id: 'gigabyte',
    name: 'Gigabyte',
    symbol: 'GB',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1073741824 : value / 1073741824,
  },
  {
    id: 'terabyte',
    name: 'Terabyte',
    symbol: 'TB',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1099511627776 : value / 1099511627776,
  },
  {
    id: 'petabyte',
    name: 'Petabyte',
    symbol: 'PB',
    conversion: (value: number, toBase: boolean) => toBase ? value * 1125899906842624 : value / 1125899906842624,
  },
  {
    id: 'bit',
    name: 'Bit',
    symbol: 'bit',
    conversion: (value: number, toBase: boolean) => toBase ? value / 8 : value * 8,
  },
  {
    id: 'kilobit',
    name: 'Kilobit',
    symbol: 'Kbit',
    conversion: (value: number, toBase: boolean) => toBase ? value * 128 : value / 128,
  },
  {
    id: 'megabit',
    name: 'Megabit',
    symbol: 'Mbit',
    conversion: (value: number, toBase: boolean) => toBase ? value * 131072 : value / 131072,
  },
  {
    id: 'gigabit',
    name: 'Gigabit',
    symbol: 'Gbit',
    conversion: (value: number, toBase: boolean) => toBase ? value * 134217728 : value / 134217728,
  },
];

export const categories: Category[] = [
  {
    id: 'length',
    name: 'Length',
    icon: '📏',
    baseUnit: 'meter',
    units: lengthUnits,
  },
  {
    id: 'weight',
    name: 'Weight',
    icon: '⚖️',
    baseUnit: 'kilogram',
    units: weightUnits,
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: '🌡️',
    baseUnit: 'celsius',
    units: temperatureUnits,
  },
  {
    id: 'area',
    name: 'Area',
    icon: '📐',
    baseUnit: 'square_meter',
    units: areaUnits,
  },
  {
    id: 'volume',
    name: 'Volume',
    icon: '🧪',
    baseUnit: 'liter',
    units: volumeUnits,
  },
  {
    id: 'speed',
    name: 'Speed',
    icon: '🚀',
    baseUnit: 'meter_per_second',
    units: speedUnits,
  },
  {
    id: 'time',
    name: 'Time',
    icon: '⏱️',
    baseUnit: 'second',
    units: timeUnits,
  },
  {
    id: 'digital',
    name: 'Digital',
    icon: '💾',
    baseUnit: 'byte',
    units: digitalStorageUnits,
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getUnitById = (categoryId: string, unitId: string) => {
  const category = getCategoryById(categoryId);
  return category?.units.find(unit => unit.id === unitId);
};