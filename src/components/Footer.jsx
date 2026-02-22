import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import styles from './Footer.module.css';
import xyzLogo from '../assets/xyz_Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box className={styles.footer}>
      <Divider className={styles.divider} />
      <Box className={styles.footerContent}>

        {/* Left — Logo + Brand */}
        <Box className={styles.brandSection}>
       
          <Box>
            <Typography className={styles.brandName}>
              XYZ Retail Analytics Portal
            </Typography>
            <Typography className={styles.brandSub}>
              Sales & Quality Intelligence · Bangalore, Karnataka
            </Typography>
          </Box>
        </Box>

        {/* Right — Copyright */}
        <Box className={styles.rightSection}>
          <Typography className={styles.copyright}>
            © {currentYear} XYZ Retail Chain
          </Typography>
          <Typography className={styles.builtWith}>
            Built with React · Material UI · Tableau
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;