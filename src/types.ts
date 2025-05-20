export interface Unit {
  id: string;
  name: string;
  symbol: string;
  conversion: (value: number, toBase: boolean) => number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  baseUnit: string;
  units: Unit[];
}

export interface Conversion {
  id: string;
  categoryId: string;
  fromValue: number;
  fromUnit: string;
  toUnit: string;
  toValue: number;
  timestamp: number;
}