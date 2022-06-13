import React from 'react';
import Navbar from 'components/Navbar';
import ActiveResource from './ActiveResource';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <ActiveResource/>
    {children}
  </>
);

export default Layout;
