import React from 'react';
import Navbar from './Navbar';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} ConvertPro | All conversion rates follow international standards</p>
      </footer>
    </div>
  );
};

export default Layout;