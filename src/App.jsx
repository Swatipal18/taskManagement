import React, { useState } from 'react';
import './index.css'

import Navigation from './Component/Navigation';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
