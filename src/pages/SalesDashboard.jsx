import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import TopBar from '../components/TopBar';
import TableauEmbed from '../components/TableauEmbed';
import styles from './DashboardPage.module.css';

const SalesDashboard = () => {
  return (
    <Box className={styles.pageWrapper}>
      <TopBar
        // title="Sales Dashboard"
        subtitle="Revenue, profit & performance analytics for all 10 outlets"
        breadcrumb="Home / Sales Dashboard"
      />

      <Box className={styles.content}>
        {/* <Box className={styles.alertBox}>
          <Alert
            severity="info"
            sx={{
              borderRadius: '12px',
              background: 'rgba(24, 131, 126, 0.06)',
              border: '1px solid rgba(24, 131, 126, 0.2)',
              color: '#004975',
              fontFamily: 'DM Sans',
              '& .MuiAlert-icon': { color: '#18837E' },
            }}
          >
            <Typography variant="body2" sx={{ fontFamily: 'DM Sans', fontSize: '0.85rem' }}>
              <strong>Interactive Dashboard</strong> — Use the Outlet and Month filters
              to drill down into specific outlets or time periods. Click any chart element
              to cross-filter across the dashboard.
            </Typography>
          </Alert>
        </Box> */}

        <Box className={styles.embedSection}>
          <TableauEmbed dashboardType="sales" title="XYZ Sales Analytics" />
        </Box>
      </Box>
    </Box>
  );
};

export default SalesDashboard;