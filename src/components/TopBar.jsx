import React from 'react';
import {
  AppBar, Toolbar, Typography, Box, Chip,
  Avatar, IconButton, Tooltip, useMediaQuery, useTheme,
} from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './TopBar.module.css';

const TopBar = ({ title, subtitle, breadcrumb }) => {
  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentTime = new Date().toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  // On mobile the Layout already renders a sticky bar with the hamburger
  if (isMobile) return null;

  return (
    <AppBar position="sticky" elevation={0} className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        {/* Left: Title & Breadcrumb */}
        <Box className={styles.titleSection}>
          {breadcrumb && (
            <Typography variant="caption" className={styles.breadcrumb}>{breadcrumb}</Typography>
          )}
          <Typography variant="h5" className={styles.pageTitle}>{title}</Typography>
          {subtitle && (
            <Typography variant="body2" className={styles.pageSubtitle}>{subtitle}</Typography>
          )}
        </Box>

        {/* Right: Status & Actions */}
        <Box className={styles.rightSection}>
          <Chip
            icon={<FiberManualRecordIcon sx={{ fontSize: '10px !important', color: '#4CAF50 !important' }} />}
            label="Live Data"
            size="small"
            className={styles.liveChip}
          />
          <Typography variant="caption" className={styles.dateText}>{currentTime}</Typography>
          <Box className={styles.actionButtons}>
            <Tooltip title="Help" arrow>
              <IconButton size="small" className={styles.iconBtn}>
                <HelpOutlineRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications" arrow>
              <IconButton size="small" className={styles.iconBtn}>
                <NotificationsNoneRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Tooltip title="Bosch Team" arrow>
            <Avatar className={styles.avatar}>B</Avatar>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;