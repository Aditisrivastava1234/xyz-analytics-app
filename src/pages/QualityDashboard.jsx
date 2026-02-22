import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import TopBar from '../components/TopBar';
import TableauEmbed from '../components/TableauEmbed';
import styles from './DashboardPage.module.css';

const QualityDashboard = () => {
  return (
    <Box className={styles.pageWrapper}>
      <TopBar
        // title="Quality Dashboard"
        subtitle="Defect rates, compliance metrics & quality KPIs across all outlets"
        breadcrumb="Home / Quality"
      />

      <Box className={styles.content}>
        {/* <Box className={styles.alertBox}>
          <Alert
            severity="warning"
            sx={{
              borderRadius: '12px',++
              background: 'rgba(152, 130, 172, 0.06)',
              border: '1px solid rgba(152, 130, 172, 0.25)',
              color: '#3d2c6e',
              fontFamily: 'DM Sans',
              '& .MuiAlert-icon': { color: '#9882AC' },
            }}
          >
            <Typography variant="body2" sx={{ fontFamily: 'DM Sans', fontSize: '0.85rem' }}>
              <strong>Quality Risk Flags</strong> — Outlets with Defect Rate &gt; 3% or
              Return Rate &gt; 3% are flagged as High Risk. Use the Outlet Name filter
              to investigate specific locations.
            </Typography>
          </Alert>
        </Box> */}

        <Box className={styles.embedSection}>
          <TableauEmbed dashboardType="quality" title="XYZ Quality Analytics" />
        </Box>
      </Box>
    </Box>
  );
};

export default QualityDashboard;