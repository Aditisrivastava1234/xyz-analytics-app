import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';
import Footer from './Footer';

const Layout = () => {
  return (
    <Box className={styles.root}>
      <Sidebar />
      <Box className={styles.mainContent} component="main">
        <Outlet />
         <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
