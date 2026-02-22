import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  Divider,
  IconButton,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './Sidebar.module.css';

// Import your XYZ logo — make sure xyz_Logo.png is in src/assets/
import xyzLogo from '../assets/xyz_Logo.png';

const NAV_ITEMS = [
  {
    label: 'Home',
    path: '/',
    icon: <HomeRoundedIcon />,
    description: 'Overview & Welcome',
  },
  {
    label: 'Sales Dashboard',
    path: '/sales',
    icon: <TrendingUpRoundedIcon />,
    description: 'Revenue & Performance',
  },
  {
    label: 'Quality Dashboard',
    path: '/quality',
    icon: <VerifiedRoundedIcon />,
    description: 'Quality Metrics',
  },
  {
    label: 'About',
    path: '/about',
    icon: <InfoRoundedIcon />,
    description: 'Project Information',
  },
];

const DRAWER_WIDTH = 260;
const COLLAPSED_WIDTH = 72;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #004975 0%, #003558 50%, #002540 100%)',
          color: '#fff',
          borderRight: 'none',
          boxShadow: '4px 0 24px rgba(0, 73, 117, 0.25)',
        },
      }}
    >
      {/* Logo Section */}
      <Box className={styles.logoSection}>
        <Box className={styles.logoWrapper}>
          {/* XYZ Logo Image */}
          <Box className={styles.logoImageBox}>
            <img
              src={xyzLogo}
              alt="XYZ Logo"
              className={styles.logoImage}
            />
          </Box>
          {!collapsed && (
            <Box className={styles.logoText}>
              <Typography variant="h6" className={styles.brandName}>
                XYZ Retail
              </Typography>
              <Typography variant="caption" className={styles.brandSubtitle}>
                Analytics Portal
              </Typography>
            </Box>
          )}
        </Box>
        <IconButton
          onClick={() => setCollapsed(!collapsed)}
          className={styles.collapseBtn}
          size="small"
        >
          {collapsed ? (
            <MenuRoundedIcon fontSize="small" />
          ) : (
            <MenuOpenRoundedIcon fontSize="small" />
          )}
        </IconButton>
      </Box>

      <Divider className={styles.divider} />

      {/* Navigation Label */}
      {!collapsed && (
        <Typography variant="overline" className={styles.navLabel}>
          Navigation
        </Typography>
      )}

      {/* Nav Items */}
      <List className={styles.navList}>
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.path);
          return (
            <ListItem key={item.path} disablePadding className={styles.navItem}>
              <Tooltip
                title={collapsed ? item.label : ''}
                placement="right"
                arrow
              >
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  className={`${styles.navButton} ${active ? styles.navButtonActive : ''}`}
                  sx={{
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    px: collapsed ? 0 : 2,
                  }}
                >
                  {active && <span className={styles.activeIndicator} />}
                  <ListItemIcon
                    className={`${styles.navIcon} ${active ? styles.navIconActive : ''}`}
                    sx={{ minWidth: collapsed ? 'auto' : 40 }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item.label}
                      secondary={item.description}
                      primaryTypographyProps={{
                        fontSize: '0.9rem',
                        fontWeight: active ? 600 : 400,
                        fontFamily: 'DM Sans',
                        color: active ? '#fff' : 'rgba(255,255,255,0.8)',
                      }}
                      secondaryTypographyProps={{
                        fontSize: '0.72rem',
                        fontFamily: 'DM Sans',
                        color: active
                          ? 'rgba(255,255,255,0.7)'
                          : 'rgba(255,255,255,0.45)',
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>

      {/* Bottom Brand Strip */}
      <Box className={styles.bottomStrip}>
        <Divider className={styles.divider} />
        {!collapsed ? (
          <Box className={styles.bottomContent}>
            <Typography variant="caption" className={styles.bottomText}>
              Powered by
            </Typography>
            <Typography variant="caption" className={styles.bottomBrand}>
              Tableau Public
            </Typography>
          </Box>
        ) : (
          <Box className={styles.bottomContentCollapsed}>
            <Typography variant="caption" className={styles.bottomText}>
              TP
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;