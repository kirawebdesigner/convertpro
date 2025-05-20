import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Layout from './components/Layout';
import Converter from './components/Converter';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Converter />
      </Layout>
    </ThemeProvider>
  );
}

export default App;