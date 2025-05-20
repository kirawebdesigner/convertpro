import { Category, Unit } from "../types";

/**
 * Converts a value from one unit to another within the same category
 */
export const convert = (
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
  category: Category
): number => {
  // First convert from the source unit to the base unit
  const baseValue = fromUnit.conversion(value, true);
  
  // Then convert from the base unit to the target unit
  return toUnit.conversion(baseValue, false);
};

/**
 * Formats a number for display, handling scientific notation
 * when numbers are very large or very small
 */
export const formatNumber = (value: number): string => {
  // For very small or very large numbers, use scientific notation
  if (Math.abs(value) < 0.000001 || Math.abs(value) > 1000000000) {
    return value.toExponential(6);
  }
  
  // For numbers with many decimal places, limit to 6 decimal places
  if (Math.abs(value) < 1 && value !== 0) {
    return value.toPrecision(6).replace(/\.?0+$/, "");
  }
  
  // For integers and simple decimals, use standard formatting
  if (Number.isInteger(value)) {
    return value.toString();
  }
  
  // For other numbers, show up to 6 decimal places
  return value.toFixed(6).replace(/\.?0+$/, "");
};

/**
 * Generates a display formula for the conversion
 */
export const getConversionFormula = (
  fromValue: number,
  fromUnit: Unit,
  toUnit: Unit,
  toValue: number
): string => {
  return `${formatNumber(fromValue)} ${fromUnit.symbol} = ${formatNumber(toValue)} ${toUnit.symbol}`;
};

/**
 * Validates if a string is a valid number input
 */
export const isValidNumberInput = (input: string): boolean => {
  // Allow empty string for user to clear the input
  if (input === "" || input === "-") return true;
  
  // Use a regex to check if it's a valid number (including scientific notation)
  const numberRegex = /^-?\d*\.?\d*(?:[eE][+-]?\d+)?$/;
  return numberRegex.test(input);
};