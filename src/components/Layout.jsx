import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={styles.root}>
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <Box className={styles.mainContent} component="main">
        {/* Mobile hamburger bar */}
        {isMobile && (
          <Box className={styles.mobileTopBar}>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <span /><span /><span />
            </button>
            <span className={styles.mobileTitle}>XYZ Analytics</span>
          </Box>
        )}

        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;