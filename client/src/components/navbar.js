import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
    <Link to='/' className='navbar-brand'>
      EZ_Quiz
    </Link>
  </nav>
);

export default Navbar;
