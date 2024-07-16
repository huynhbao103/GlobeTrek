import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../fontawesome';
import Laptop from './Laptop';
import Mobile from './Mobile';

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      {isMobile ? <Mobile /> : <Laptop />}
    </div>
  );
}

export default Header;
